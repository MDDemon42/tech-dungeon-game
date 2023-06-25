import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Gear} from 'react-bootstrap-icons';
import styles from '../index.module.css';
import images from '../images/images';
import {IClassInfo, IStore} from '../types/interfaces';
import userParams from '../redux/slices/userParams';
import { useEffect, useState } from 'react';
import C from '../redux/constants';
import generalUser, { emptyInventory } from '../redux/slices/generalUser';
import { classInfo } from '../redux/slices/userParams';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const icon = useSelector((store: IStore) => store.userParams.icon);
    const classes = Object.keys(images.classIcons);

    const dispatch = useDispatch();

    const [startButtonText, setStartButtonText] = useState('Start!')

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.name]) {
                dispatch(userParams.actions.setState(result[C.name].userParams));
                dispatch(generalUser.actions.setState(result[C.name].generalUser));
                if (
                    result[C.name].userParams.level > 0 ||
                    result[C.name].userParams.diamonds > 0 ||
                    result[C.name].userParams.mechaCores > 0 ||
                    result[C.name].userParams.mutaGenes > 0 ||
                    result[C.name].userParams.mana > 0 ||
                    result[C.name].userParams.focus > 0 || 
                    !Object.is(result[C.name].generalUser.inventory, emptyInventory())
                ) {
                    setStartButtonText('Continue!')
                }
            }
        })
    }, [])

    const classToClass = (value: string) => {
        switch (value) {
            case 'noIcon':
                return '-not this one-'
            default:
                return upperCaseFirstLetter(value)
        }
    }

    const changeClass = (value: string) => {
        dispatch(userParams.actions.refreshState(value));
        dispatch(generalUser.actions.refreshState(''));
        setStartButtonText('Start!');
    }

    const startButtonListener = () => {
        window.open('#/game');
    }

    return (
        <div className={
            [
                styles.extensionPopup,
                styles.border
            ].join(' ')
        }>
            <div className={styles.extensionPopup_iconBlock}>
                <img 
                    src={images.classIcons[icon]} 
                    alt='classIcon' 
                    title={classInfo[icon as keyof IClassInfo].description}
                />
                <select 
                    value={icon}
                    onChange={(event) => changeClass(event.target.value)}
                >
                    {
                        classes.map(item => {
                            return (
                                <option value={item}>
                                    {classToClass(item)}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={styles.extensionPopup_buttonsBlock}>
                <button 
                    disabled={icon === 'noIcon'}
                    className={styles.border}
                    onClick={startButtonListener}
                >
                    {startButtonText}
                </button>
                <Link to={'settings'}>
                    <Gear/> 
                </Link>
            </div>                        
        </div>
    )
}

export default MainPage
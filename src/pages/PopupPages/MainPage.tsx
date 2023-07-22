import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Gear} from 'react-bootstrap-icons';
import styles from './PopupPage.module.css';
import images from '../../images/images';
import {IClassInfo, IStore} from '../../interfaces/interfaces';
import { useEffect, useState } from 'react';
import C from '../../redux/constants';
import { createEmptyInventory } from '../../general/characters/createEmptyCharacter';
import gameSquad, { classInfo } from '../../redux/slices/gameSquad';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const icon = useSelector((store: IStore) => store.gameSquad.squadMembers[index].params.class);

    const classes = Object.keys(images.classIcons);

    const dispatch = useDispatch();

    const [startButtonText, setStartButtonText] = useState('Start!')

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.name]) {
                dispatch(gameSquad.actions.setState(result[C.name].gameSquad));

                const user = result[C.name].gameSquad.squadMembers[index];
                if (
                    user.params.level > 0 ||
                    !Object.is(user.general.inventory, createEmptyInventory())
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
        dispatch(gameSquad.actions.refreshState(value));
        setStartButtonText('Start!');
    }

    const startButtonListener = () => {
        window.open('#/game');
    }

    return (
        <div className={styles.Popup}>
            <div className={styles.Popup_iconBlock}>
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
            <div className={styles.Popup_buttonsBlock}>
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
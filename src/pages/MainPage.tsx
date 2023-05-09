import {useSelector, useDispatch} from 'react-redux';

import {Link} from "react-router-dom";
import {Gear} from 'react-bootstrap-icons';

import styles from '../index.module.css';
import images from '../images/images';

import {IStore} from '../types/interfaces';

import userParams from '../redux/slices/userParams';

import { chromeStorageSaver } from '..';
import { useEffect } from 'react';

import C from '../redux/constants';
import generalUser from '../redux/slices/generalUser';

const {classIcons} = images as Record<string, any>;
const classes = Object.keys(classIcons);

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const icon = useSelector((store: IStore) => store.userParams.icon);
    const dispatch = useDispatch();

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            dispatch(userParams.actions.setState(result[C.name].userParams));
            dispatch(generalUser.actions.setState(result[C.name].generalUser));
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
        dispatch(userParams.actions.changeIcon(value));

        chromeStorageSaver()
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
                <img src={classIcons[icon]}/>
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
                    To adventure!
                </button>
                <Link to={'settings'}>
                    <Gear/> 
                </Link>
            </div>                        
        </div>
    )
}

export default MainPage
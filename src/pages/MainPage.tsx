import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styles from '../index.module.css';
import images from '../images/images';

import {Gear} from 'react-bootstrap-icons';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const {classIcons} = images as Record<string, any>;
    const classes = Object.keys(classIcons);

    const [chosenClass, setChosenClass] = useState('noIcon');

    useEffect(() => {
        const message = {
            token: '0_0',
            type: 'get'
        }

        chrome.runtime.sendMessage(message)
            .then(result => setChosenClass(result.class));
    }, []);

    const classToClass = (value: string) => {
        switch (value) {
            case 'noIcon':
                return '-random-'
            default:
                return upperCaseFirstLetter(value)
        }
    }

    const changeClass = (value: string) => {
        const message = {
            token: '0_0',
            type: 'class',
            class: value
        }

        chrome.runtime.sendMessage(message);
        setChosenClass(value)
    }

    const startButtonListener = () => {
        window.open('#/game');
    }

    console.log(chosenClass, classIcons[chosenClass])

    return (
        <div className={styles.extensionPopup}>
            <div className={styles.extensionPopup_iconBlock}>
                <img src={classIcons[chosenClass]}/>
                <select 
                    value={chosenClass} 
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
                <button onClick={startButtonListener}>
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
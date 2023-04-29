import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styles from '../index.module.css';
import images from '../images/images';

import abilities from '../abilities/abilities';
import items from '../items/items';

import {Gear} from 'react-bootstrap-icons';
import { Ability } from '../types/ability';
import { Item } from '../types/item';
import { User } from '../types/user';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const {classIcons} = images as Record<string, any>;
    const classes = Object.keys(classIcons);

    const [chosenClass, setChosenClass] = useState('noIcon');

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setChosenClass(result['tech-dungeon-game'].class)
            });
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
        let user: User = {
            name: '',
            class: '',
            abilities: [] as Ability[],
            items: [] as Item[]
        };

        chrome.storage.local.get()
            .then(data => {
                user = {...data['tech-dungeon-game']};
                user.class = value;
                user.abilities = abilities[value];
            })
            .then(() => {
                chrome.storage.local.set({
                    'tech-dungeon-game': user
                })
            })
            .then(() => {
                setChosenClass(value)
            });
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
                <button 
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
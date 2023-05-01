import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {Gear} from 'react-bootstrap-icons';
import styles from '../index.module.css';
import images from '../images/images';

import abilities from '../abilities/abilities';
import items from '../items/items';
import spells from '../spells/spells';
import powers from '../powers/powers';
import mutations from '../mutations/mutations';
import cybers from '../cybers/cybers';

const startingData = {
    user: {},
    abilities,
    items,
    spells,
    powers,
    mutations,
    cybers
}

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const {classIcons} = images as Record<string, any>;
    const classes = Object.keys(classIcons);

    const [chosenIcon, setChosenIcon] = useState('noIcon');

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                const data = result['tech-dungeon-game'];
                console.log('data', data)
                if (
                    data.items.length === 0 ||
                    data.abilities.length === 0 ||
                    data.spells.length === 0 ||
                    data.powers.length === 0
                ) {
                    startingData.user = data.user;
                    chrome.storage.local.set({
                        'tech-dungeon-game': startingData
                    })
                }

                setChosenIcon(result['tech-dungeon-game'].user.icon)
            });
    }, []);

    const classToClass = (value: string) => {
        switch (value) {
            case 'noIcon':
                return '-not this one-'
            default:
                return upperCaseFirstLetter(value)
        }
    }

    const changeClass = (value: string) => {
        let newData = {
            user: {
                icon: ''
            }
        };

        chrome.storage.local.get()
            .then(data => {
                newData = {...data['tech-dungeon-game']};
                console.log('newData', newData)
                newData.user.icon = value;
            })
            .then(() => {
                chrome.storage.local.set({
                    'tech-dungeon-game': newData
                })
            })
            .then(() => {
                setChosenIcon(value)
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
                <img src={classIcons[chosenIcon]}/>
                <select 
                    value={chosenIcon} 
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
                    disabled={chosenIcon === 'noIcon'}
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
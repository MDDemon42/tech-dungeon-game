import {useState} from 'react';
import { Link } from "react-router-dom";
import styles from '../index.module.css';
import images from '../images/images';

function MainPage() {
    const {classIcons} = images as Record<string, any>;
    const classes = Object.keys(classIcons);

    const [chosenClass, setChosenClass] = useState('noIcon');

    const classToClass = (value: string) => {
        switch (value) {
            case 'noIcon':
                return '-random-'
            default:
                return value.substring(0,1).toUpperCase() + value.substring(1)
        }
    }

    const startButtonListener = () => {
        window.open('#/game');
    }

    return (
        <div className={styles.extensionPopup}>
            <div className={styles.extensionPopup_iconBlock}>
                <img src={classIcons[chosenClass]}/>
                <select 
                    value={chosenClass} 
                    onChange={(event) => setChosenClass(event.target.value)}
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
            <Link to={'settings'}>
                Adjust settings
            </Link>
            <button onClick={startButtonListener}>
                Start adventure!
            </button>
        </div>
    )
}

export default MainPage
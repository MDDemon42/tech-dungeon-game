import {useNavigate} from 'react-router-dom';
import styles from '../index.module.css';
import { useEffect, useState } from 'react';

import { upperCaseFirstLetter } from './MainPage';

function SettingsPage() {
    const navigation = useNavigate()

    const backButtonListener = () => {
        navigation('/')
    }

    const [user, setUser] = useState({
        class: '-',
        name: '-'
    });

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setUser(result['tech-dungeon-game'])
            });
    }, []);

    return (
        <div className={styles.extensionPopup}>
            <h3>
                Settings Page
            </h3>
            <div className={styles.extensionPopup_userBlock}>
                You are going to play as {user.name} the {upperCaseFirstLetter(user.class)}
            </div>
            <div className={styles.extensionPopup_buttonsBlock}>
                <button onClick={backButtonListener}>
                    Back to Main Page
                </button>
            </div>
        </div>
    )
}

export default SettingsPage
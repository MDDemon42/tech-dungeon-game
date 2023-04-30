import { useEffect, useState } from "react";
import { User } from "../types/interfaces";
import styles from '../index.module.css';

import { upperCaseFirstLetter } from "../pages/MainPage";

function StatsScreen() {
    const [user, setUser] = useState({
        name: '',
        icon: ''
    } as User);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setUser(result['tech-dungeon-game'].user)
            });
    }, []);

    return (
        <div className={styles.extensionPopup_userBlock}>
            <h3>
                {user.name}
            </h3>
            <h4>
                {upperCaseFirstLetter(user.icon)} lvl. {user.level}
            </h4>
            <ul>
                <li>
                    money: {user.money}
                </li>
                <li>
                    stage: {user.stage}
                </li>
            </ul>
        </div>
    )
} 

export default StatsScreen
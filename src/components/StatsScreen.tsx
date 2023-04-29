import { useEffect, useState } from "react";
import { User } from "../types/user";
import styles from '../index.module.css';

import { upperCaseFirstLetter } from "../pages/MainPage";

function StatsScreen() {
    const [user, setUser] = useState({
        name: '',
        class: ''
    } as User);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setUser(result['tech-dungeon-game'])
            });
    }, []);

    const params = Object.keys(user)
        .filter(param => param !== 'name' && param !== 'class' && param !== 'level');

    return (
        <div className={styles.extensionPopup_userBlock}>
            <h3>
                {user.name}
            </h3>
            <h4>
                {upperCaseFirstLetter(user.class)} lvl. {user.level}
            </h4>
            <ul>
                {params.map(param => (
                    <li>
                        {param}: {user[param as keyof User]}
                    </li>
                ))}
            </ul>
        </div>
    )
} 

export default StatsScreen
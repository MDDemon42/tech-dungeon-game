import {IStore} from "../types/interfaces";
import styles from '../index.module.css';

import { upperCaseFirstLetter } from "../pages/MainPage";
import { useSelector } from "react-redux";

function StatsScreen() {
    const user = useSelector((state: IStore) => state.userParams);

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
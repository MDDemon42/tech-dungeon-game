import { BendingGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../BendingScreen/BendingScreen";
import SubMindScreen from "../SubMindScreen/SubMindScreen";
import styles from './FireSite.module.css';

function FireSite() {

    return (
        <div className={styles.FireSite}>
            <SubMindScreen screenName={MindGameScreens.fireSchool}/>
            <BendingScreen screenName={BendingGameScreens.fireSite}/>
        </div>
    )
}

export default FireSite
import { BendingGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../BendingScreen/BendingScreen";
import SubMindScreen from "../SubMindScreen/SubMindScreen";
import styles from './AirSite.module.css';

function AirSite() {

    return (
        <div className={styles.AirSite}>
            <SubMindScreen screenName={MindGameScreens.airSchool}/>
            <BendingScreen screenName={BendingGameScreens.airSite}/>
        </div>
    )
}

export default AirSite
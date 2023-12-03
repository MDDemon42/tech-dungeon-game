import { BendingGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../BendingScreen/BendingScreen";
import SubMindScreen from "../SubMindScreen/SubMindScreen";
import styles from './IceSite.module.css';

function IceSite() {

    return (
        <div className={styles.IceSite}>
            <SubMindScreen screenName={MindGameScreens.iceSchool}/>
            <BendingScreen screenName={BendingGameScreens.iceSite}/>
        </div>
    )
}

export default IceSite
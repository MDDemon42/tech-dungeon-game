import { MindGameScreens } from "../../enums-and-interfaces/enums";
import SubMindScreen from "../SubMindScreen/SubMindScreen";
import styles from './FocusSite.module.css';

function FocusSite() {

    return (
        <div className={styles.FocusSite}>
            <SubMindScreen screenName={MindGameScreens.focusSchool}/>
            <SubMindScreen screenName={MindGameScreens.focusSite}/>
        </div>
    )
}

export default FocusSite
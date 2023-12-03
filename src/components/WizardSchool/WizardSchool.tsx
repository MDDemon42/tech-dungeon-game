import { InventoryGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../SubInventoryScreen/SubInventoryScreen";
import SubMindScreen from "../SubMindScreen/SubMindScreen";
import styles from './WizardSchool.module.css';

function WizardSchool() {

    return (
        <div className={styles.WizardSchool}>
            <SubMindScreen screenName={MindGameScreens.wizardSchool}/>
            <SubMindScreen screenName={MindGameScreens.spellSchool}/>
            <SubInventoryScreen screenName={InventoryGameScreens.wizardShop}/>
        </div>
    )
}

export default WizardSchool
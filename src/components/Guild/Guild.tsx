import { InventoryGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../SubInventoryScreen/SubInventoryScreen";
import SubMindScreen from "../SubMindScreen/SubMindScreen";
import styles from './Guild.module.css';

function Guild() {

    return (
        <div className={styles.Guild}>
            <SubMindScreen screenName={MindGameScreens.guildSchool}/>
            <SubMindScreen screenName={MindGameScreens.guildRituals}/>
            <SubInventoryScreen screenName={InventoryGameScreens.guildShop}/>
        </div>
    )
}

export default Guild
import { IItem, IStore } from "../../enums-and-interfaces/interfaces";
import CommonIcon from "../Icons/CommonIcon";
import styles from './index.module.css';
import { backpacksItemEnableChecker } from "../../helpers/enableCheckers";
import { useSelector } from "react-redux";
import BackpacksScreenItemActions from "./BackpacksScreenItemActions";
import { useState } from "react";

function BackpacksScreenItem(props: {
    item: IItem,
    itemIndex: number
}) {
    const {item, itemIndex} = props;
    const char = useSelector((store: IStore) => store.character);
    const memberMasteries = char.general.mind.masteries.map(mastery => mastery.name);
    const memberAvailableStrength = char.params.strength - char.params.lifted;
    const memberInventory = char.general.inventory;
    const [enabled, disableReason] = backpacksItemEnableChecker(
        item, memberMasteries, 
        memberAvailableStrength,
        memberInventory
    ); 

    const [actionsVisible, setActionsVisible] = useState(false);
    const openActionsListener = () => {
        setActionsVisible(actionsVisible => !actionsVisible);
    }

    return <div className={styles.BackpacksScreenItem}>
        <CommonIcon item={item} disableReason={disableReason}/>
        <button 
            className={styles.BackpacksScreenItemButton}
            onClick={openActionsListener}
        >
            Actions
        </button>
        {
            actionsVisible ?
                <BackpacksScreenItemActions 
                    item={item} 
                    itemIndex={itemIndex}
                    enabled={enabled}
                    disableReason={disableReason}
                    closeListener={() => setActionsVisible(false)}
                /> :
                null
        }        
    </div>
}

export default BackpacksScreenItem
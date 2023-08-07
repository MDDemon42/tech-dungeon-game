import { useContext } from "react";
import { IItem, IMutation, ICyber } from "../../enums-and-interfaces/interfaces";
import { subInventoryEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './SubInventoryScreen.module.css';
import { SubInventoryScreenItemContext } from "./SubInventoryScreen";

function SubInventoryScreenItem(props: {
    datum: IItem | IMutation | ICyber
}) {
    const {datum} = props;
    const {
        dataName, resource, members, listener,
        currentBackpacksItemsAmount, buttonText
    } = useContext(SubInventoryScreenItemContext);
    
    const [enabled, disableReason] = subInventoryEnableChecker(
        datum, dataName, resource,
        currentBackpacksItemsAmount, 
        members
    );

    return <div className={styles.SubInventoryScreenItem}>
        <CommonIcon item={datum} disableReason={disableReason}/>
        {
            <button
                disabled={!enabled}
                onClick={() => listener(datum)}
            >
                {
                    buttonText
                }
            </button>
        }
    </div>
}

export default SubInventoryScreenItem
import { useContext } from "react";
import { IItem, IMutation, ICyber, IStore } from "../../enums-and-interfaces/interfaces";
import { subInventoryEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './index.module.css';
import { SubInventoryScreenItemContext } from ".";
import { useSelector } from "react-redux";

function SubInventoryScreenItem(props: {
    datum: IItem | IMutation | ICyber
}) {
    const char = useSelector((store: IStore) => store.character);

    const {datum} = props;
    const {
        screenName, listener, buttonText, 
    } = useContext(SubInventoryScreenItemContext);
    
    const [enabled, disableReason] = subInventoryEnableChecker(
        char, datum, screenName
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
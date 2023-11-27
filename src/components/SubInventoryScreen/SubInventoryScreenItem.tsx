import { useContext } from "react";
import { IItem, IMutation, ICyber, IStore } from "../../enums-and-interfaces/interfaces";
import { subInventoryEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './SubInventoryScreen.module.css';
import { SubInventoryScreenItemContext } from "./SubInventoryScreen";
import { useSelector } from "react-redux";

function SubInventoryScreenItem(props: {
    datum: IItem | IMutation | ICyber
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const {datum} = props;
    const {
        dataName, resource, listener, buttonText, 
    } = useContext(SubInventoryScreenItemContext);
    
    const [enabled, disableReason] = subInventoryEnableChecker(
        member, datum, dataName, resource
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
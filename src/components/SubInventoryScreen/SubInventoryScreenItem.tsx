import { InventoryOption } from "../../enums-and-interfaces/enums";
import { IItem, IMutation, ICyber, ICharacher } from "../../enums-and-interfaces/interfaces";
import { subInventoryEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './SubInventoryScreen.module.css';

function SubInventoryScreenItem(props: {
    datum: IItem | IMutation | ICyber,
    dataName: InventoryOption,
    resource: number,
    currentBackpacksItemsAmount: number,
    members: Record<string, ICharacher>,
    listener: any,
    buttonText: string
}) {
    const {
        datum, dataName, resource,
        currentBackpacksItemsAmount, members,
        listener, buttonText
    } = props;
    const [enabled, disableReason] = subInventoryEnableChecker(
        datum, dataName, resource,
        currentBackpacksItemsAmount, members
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
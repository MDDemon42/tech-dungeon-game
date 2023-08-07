import { ICharacher, IInventorySlot } from "../../enums-and-interfaces/interfaces";
import { upperCaseFirstLetter } from "../../pages/PopupPages/MainPage";
import SubInventoryScreenItem from "./SubInventoryScreenItem";
import styles from './SubInventoryScreen.module.css';
import { InventoryOption } from "../../enums-and-interfaces/enums";

const keyToTitle = (key: string) => {
    let keyArray = key.split('_')
        .filter((value, index) => index !== 0)
        .map(value => upperCaseFirstLetter(value));

    return keyArray.join(' ')
}

function SubInventoryScreenItemLine(props: {
    data: IInventorySlot[],
    title: string,
    dataName: InventoryOption,
    resource: number,
    currentBackpacksItemsAmount: number,
    members: Record<string, ICharacher>,
    listener: any,
    buttonText: string
}) {
    const {
        data, title, dataName, resource,
        currentBackpacksItemsAmount,
        members, listener, buttonText
    } = props;

    return <div className={styles.SubInventoryScreenItemLine}>
        <div className={styles.SubInventoryScreenItemLine_header}>
            {keyToTitle(title)}
        </div>
        {
            data && data.map(datum => 
                <SubInventoryScreenItem 
                    datum={datum}
                    dataName={dataName}
                    resource={resource}
                    currentBackpacksItemsAmount={currentBackpacksItemsAmount}
                    members={members}
                    listener={listener}
                    buttonText={buttonText}
                />
            )
        }
    </div>
}

export default SubInventoryScreenItemLine
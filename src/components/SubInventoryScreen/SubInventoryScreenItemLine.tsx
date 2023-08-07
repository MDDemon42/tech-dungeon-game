import { IInventorySlot } from "../../enums-and-interfaces/interfaces";
import { upperCaseFirstLetter } from "../../pages/PopupPages/MainPage";
import SubInventoryScreenItem from "./SubInventoryScreenItem";
import styles from './SubInventoryScreen.module.css';

const keyToTitle = (key: string) => {
    let keyArray = key.split('_')
        .filter((value, index) => index !== 0)
        .map(value => upperCaseFirstLetter(value));

    return keyArray.join(' ')
}

function SubInventoryScreenItemLine(props: {
    data: IInventorySlot[],
    title: string
}) {
    const {data, title} = props;

    return <div className={styles.SubInventoryScreenItemLine}>
        <div className={styles.SubInventoryScreenItemLine_header}>
            {keyToTitle(title)}
        </div>
        {
            data && data.map(datum => 
                <SubInventoryScreenItem datum={datum}/>
            )
        }
    </div>
}

export default SubInventoryScreenItemLine
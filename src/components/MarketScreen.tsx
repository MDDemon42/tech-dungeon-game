import {useSelector, useDispatch} from "react-redux";
import {IItem, IStore, InventoryPlaces} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import userParams from "../redux/slices/userParams";
import prioritisationChecker from "../functions/prioritisation";
import { upperCaseFirstLetter } from "../pages/MainPage";

function MarketScreen() {
    const itemsAll = useSelector((store: IStore) => store.generalAll.items);
    const itemsAllNames = Object.keys(itemsAll);

    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))
    const dispatch = useDispatch();

    const userResource = useSelector((store: IStore) => store.userParams.diamonds);
    function buyButtonListener(item: IItem) {
        dispatch(generalUser.actions.buyItem(item));
        dispatch(userParams.actions.buyItem(item.cost));
    }

    function disableChecker(item: IItem) {
        const resourceCheck = userResource >= item.cost;
        const requiredMasteryCheck = !!item.requiredMastery && !masteriesUser.includes(item.requiredMastery.name)
        const priorityCheck = prioritisationChecker(item);
        
        return !resourceCheck || requiredMasteryCheck || !priorityCheck; 
    }

    const itemsArray = itemsAllNames.map(name => itemsAll[name]);
    const itemsSpecified: Record<string, IItem[]> = {
        items_for_head: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.head),
        items_for_armor: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.armor),
        items_for_back: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.back),
        items_for_belt: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.belt),
        items_for_both_hands: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.bothHands),
        items_for_left_hand: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.leftHand),
        items_for_left_pocket: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.leftPocket),
        items_for_right_hand: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.rightHand),
        items_for_right_pocket: itemsArray.filter(item => item.inventoryPlace === InventoryPlaces.rightPocket)
    }    

    const keyToTitle = (key: string) => {
        let keyArray = key.split('_').map(value => upperCaseFirstLetter(value));

        return keyArray.join(' ')
    }

    const InventorySlotItemsLine = (props: {
        items: IItem[],
        title: string
    }) => {
        const {items, title} = props;
        return <div className={styles.commonScreen_notVertical}>
            <div className={styles.inventorySlotItems_title}>
                {keyToTitle(title)}
            </div>
            {
                items && items.map(item => (
                    <div className={styles.commonIconWithButton}>
                        <CommonIcon item={item}/>
                        {
                            <button
                                disabled={disableChecker(item)}
                                onClick={() => buyButtonListener(item)}
                            >
                                Buy!
                            </button>
                        }
                    </div>
                ))
            }
        </div>
    }

    return (
        <div className={styles.gamePage_component}>
            <h3 className={styles.inventory_header}>
                Welcome to Market!
            </h3>            
            <div className={styles.gamePage_component_container}>
                {
                    Object.keys(itemsSpecified).map(key => {
                        if (itemsSpecified[key].length === 0) {
                            return null
                        }
                        
                        return <InventorySlotItemsLine 
                            items={itemsSpecified[key]}
                            title={key}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default MarketScreen
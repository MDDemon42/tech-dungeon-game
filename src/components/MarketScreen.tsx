import {useSelector, useDispatch} from "react-redux";
import {IItem, IStore, InventoryPlaces} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import userParams from "../redux/slices/userParams";
import handsSlotsChainsChecker from "../functions/handsSlotsChains";

function MarketScreen() {
    const itemsAll = useSelector((store: IStore) => store.generalAll.items);
    const itemsAllNames = Object.keys(itemsAll);

    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))
    const dispatch = useDispatch();

    const userMoney = useSelector((store: IStore) => store.userParams.money);
    function buyButtonListener(item: IItem) {
        dispatch(generalUser.actions.buyItem(item));
        dispatch(userParams.actions.buyItem(item.cost));
    }

    function disableChecker(item: IItem) {
        const moneyCheck = userMoney < item.cost;
        const requiredMasteryCheck = !!item.requiredMastery && !masteriesUser.includes(item.requiredMastery.name)
        const slotChainCheck = (
            item.inventoryPlace === InventoryPlaces.leftHand ||
            item.inventoryPlace === InventoryPlaces.rightHand ||
            item.inventoryPlace === InventoryPlaces.bothHands
        ) ? handsSlotsChainsChecker(item) : true;
        
        return moneyCheck || requiredMasteryCheck || !slotChainCheck; 
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Market!
            <div className={styles.commonScreen_notVertical}>
                {
                    itemsAll && itemsAllNames.map(name => {
                        const item = itemsAll[name];
                            
                        return (
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
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MarketScreen
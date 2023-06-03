import {useSelector, useDispatch} from "react-redux";
import {IItem, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import userParams from "../redux/slices/userParams";

function MarketScreen() {
    const itemsAll = useSelector((store: IStore) => store.generalAll.items);
    const itemsAllNames = Object.keys(itemsAll);

    const itemsUser = useSelector((store: IStore) => store.generalUser.items.map(data => data.name));
    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))
    const dispatch = useDispatch();

    const userMoney = useSelector((store: IStore) => store.userParams.money);
    function buyButtonListener(item: IItem) {
        if (item.cost <= userMoney) {
            dispatch(generalUser.actions.buyItem(item));
            dispatch(userParams.actions.buyItem(item.cost));
        }        
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Market!
            <div className={styles.commonScreen_notVertical}>
                {
                    itemsAll && itemsAllNames.map(name => {
                        const item = itemsAll[name];
                        const disabled = itemsUser.includes(item.name) ||
                            userMoney < item.cost ||
                            (!!item.requiredMastery && !masteriesUser.includes(item.requiredMastery.name));
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={item}/>
                                {
                                    <button
                                        disabled={disabled}
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
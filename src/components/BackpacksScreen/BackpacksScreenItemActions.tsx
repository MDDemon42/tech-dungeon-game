import { 
    HandIndexThumb, 
    HandIndexThumbFill, 
    ArrowUpCircleFill, 
    ArrowUpCircle,
    ArrowLeft
} from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { UserResource, InventoryGameScreens } from "../../enums-and-interfaces/enums";
import { IStore, IManageItemsProps, IItem } from "../../enums-and-interfaces/interfaces";
import items from "../../gameScreens/Market/items";
import { createNoItem } from "../../helpers/emptyEssencesCreators";
import gameSquad from "../../redux/slices/gameSquad";
import ResourceIcon from "../Icons/ResourceIcon";
import styles from './index.module.css';

function BackpacksScreenItemActions(props: {
    item: IItem,
    itemIndex: number,
    enabled: boolean,
    disableReason: string
    closeListener: () => void;
}) {
    const {
        item, itemIndex, enabled, 
        disableReason, closeListener
    } = props;
    
    const storage = useSelector((store: IStore) => store.gameSquad.storage);
    const nothing = createNoItem().name;
    const emptyLockers = storage.filter(item => item.name === nothing).length;

    const gameScreen = useSelector((store: IStore) => store.gameScreen.screen);

    const dispatch = useDispatch();

    const equipListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.equipItem(props));
        closeListener();
    }
    const shouldShowEquip = enabled;
    
    const putIntoStorageListener = () => {
        dispatch(gameSquad.actions.putIntoStorage(props));
        closeListener();
    }
    const putIntoStorageDisabled = storage.length === 0 || emptyLockers === 0;
    const shouldShowPutIntoStorage = item.name !== nothing;

    const sellListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.sellItem(props));
        closeListener();
    }
    const shouldShowSell = item.name !== nothing &&
        gameScreen === InventoryGameScreens.market
    
    const utilizeListener = (itemIndex: number) => {
        dispatch(gameSquad.actions.utilizeRemains(itemIndex));
        closeListener();
    }
    const shouldShowUtilize = gameScreen === InventoryGameScreens.mutaLab ||
        item.name === items.bigResources.beastRemains.name ||
        item.name === items.bigResources.insectoidRemains.name ||
        item.name === items.bigResources.reptiloidRemains.name ||
        item.name === items.bigResources.dragonRemains.name;

    return <div className={styles.BackpacksScreenItemActions}>
        <label>
            {item.name}
        </label>

        {
            shouldShowEquip ?
                <button onClick={() => equipListener(props)}>
                    {chrome.i18n.getMessage('equip')}
                    {
                        enabled ?
                            <HandIndexThumb 
                                title={chrome.i18n.getMessage('equip')}
                            /> :
                            <HandIndexThumbFill
                                title={disableReason}
                            />
                    }
                </button> :
                null
        }        
        
        {
            shouldShowSell ?
                <button onClick={() => sellListener(props)}>
                    Sell {chrome.i18n.getMessage('')}
                    <ResourceIcon resource={UserResource.gem} price={item.cost}/>
                </button> :
                null  
        }        

        {
            shouldShowUtilize ?
                <button onClick={() => utilizeListener(itemIndex)}>
                    Utilize {chrome.i18n.getMessage('')}
                    <ResourceIcon resource={UserResource.gene} price={item.cost}/>
                </button> :
                null
        }        
        
        {
            shouldShowPutIntoStorage ?
                <button
                    disabled={putIntoStorageDisabled}
                    onClick={putIntoStorageListener}
                >
                    {chrome.i18n.getMessage('put_into_storage')}
                    {
                        putIntoStorageDisabled ?
                            <ArrowUpCircleFill 
                                title={chrome.i18n.getMessage('storage_is_full')}
                            /> :
                            <ArrowUpCircle 
                                title={chrome.i18n.getMessage('put_into_storage')} 
                            /> 
                    }
                </button> :
                null
        }        

        <button onClick={closeListener}>
            {nothing}
            <ArrowLeft
                title={chrome.i18n.getMessage('')}
            />
        </button>
    </div>
}

export default BackpacksScreenItemActions
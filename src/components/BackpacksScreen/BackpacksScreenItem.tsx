import { 
    ArrowUpCircle, 
    ArrowUpCircleFill,
    HandIndexThumb,
    HandIndexThumbFill
} from "react-bootstrap-icons";
import { IItem, IManageItemsProps, IStore } from "../../enums-and-interfaces/interfaces";
import CommonIcon from "../Icons/CommonIcon";
import BackpacksScreenItemButton from "./BackpacksScreenItemButton";
import { useDispatch } from "react-redux";
import gameSquad from "../../redux/slices/gameSquad";
import styles from './index.module.css';
import { backpacksItemEnableChecker } from "../../helpers/enableCheckers";
import { useSelector } from "react-redux";
import { createNoItem } from "../../helpers/emptyEssencesCreators";

function BackpacksScreenItem(props: {
    item: IItem,
    itemIndex: number,
}) {
    const {item, itemIndex} = props;
    const squadMember = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched]);
    const memberMasteries = squadMember.general.mind.masteries.map(mastery => mastery.name);
    const memberAvailableStrength = squadMember.params.strength - squadMember.params.lifted;
    const memberInventory = squadMember.general.inventory;
    const [enabled, disableReason] = backpacksItemEnableChecker(
        item, memberMasteries, 
        memberAvailableStrength,
        memberInventory
    );   
    
    const dispatch = useDispatch();

    const equipListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.equipItem(props));
    }

    const storage = useSelector((store: IStore) => store.gameSquad.storage);
    const nothing = createNoItem().name;
    const emptyLockers = storage.filter(item => item.name === nothing).length;
    const putIntoStorageListener = () => {
        dispatch(gameSquad.actions.putIntoStorage(props))
    }
    const putIntoStorageDisabled = item.name === nothing || 
        storage.length === 0 || emptyLockers === 0;

    return <div className={styles.BackpacksScreenItem_CommonIconWithButtons}>
        <CommonIcon item={item} disableReason={disableReason}/>
        <div className={styles.BackpacksScreenItem_CommonIconWithButtons_buttons}>
            {
                enabled ?
                    <HandIndexThumb 
                        onClick={() => equipListener(props)}
                        title={chrome.i18n.getMessage('equip')}
                    /> :
                    <HandIndexThumbFill
                        title={disableReason}
                    />
            }
            <BackpacksScreenItemButton item={item} itemIndex={itemIndex}/>  
            {
                putIntoStorageDisabled ?
                    <ArrowUpCircleFill title={chrome.i18n.getMessage('storage_is_full')}/> :
                    <ArrowUpCircle 
                        title={chrome.i18n.getMessage('put_into_storage')} 
                        onClick={putIntoStorageListener}
                    /> 
            }                         
        </div>
    </div>
}

export default BackpacksScreenItem
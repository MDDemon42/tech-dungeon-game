import { 
    HandIndexThumb, 
    HandIndexThumbFill, 
    ArrowLeft,
    Trash
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { IItem } from "../../enums-and-interfaces/interfaces";
import { createNoItem } from "../../helpers/emptyEssencesCreators";
import character from "../../redux/slices/character";
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
    
    const nothing = createNoItem().name;

    const dispatch = useDispatch();

    const equipListener = () => {
        dispatch(character.actions.equipItem(props));
        closeListener();
    }
    const shouldShowEquip = enabled;

    const throwingAwayListener = () => {
        dispatch(character.actions.throwItem({
            item, 
            inventoryPlace: item.inventoryPlaces[0],
            fromBackpacks: true,
            backpacksIndex: itemIndex
        }));
        closeListener();
    }
    const shouldShowThrowAway = item.name !== nothing;

    return <div className={styles.BackpacksScreenItemActions}>
        <label>
            {item.name}
        </label>

        {
            shouldShowEquip ?
                <button onClick={equipListener}>
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
            shouldShowThrowAway ?
                <button onClick={throwingAwayListener}>
                    Throw away
                    <Trash title={chrome.i18n.getMessage('')}/>
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
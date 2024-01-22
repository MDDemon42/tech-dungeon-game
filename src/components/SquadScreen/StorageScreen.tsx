import { useSelector } from "react-redux"
import { IItem, IStore } from "../../enums-and-interfaces/interfaces"
import CommonIcon from "../Icons/CommonIcon";
import styles from './index.module.css';
import { ArrowDownCircle, ArrowDownCircleFill } from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";
import gameSquad from "../../redux/slices/gameSquad";
import { createNoItem } from "../../helpers/emptyEssencesCreators";

function StorageScreen() {
    const storage = useSelector((store: IStore) => store.gameSquad.storage);
    const storageWitdh = storage.length * 80 > 540 ? 540 : storage.length * 80;

    const dispatch = useDispatch();
    const getFromStorageListener = (item: IItem, itemIndex: number) => {
        dispatch(gameSquad.actions.getFromStorage({item, itemIndex}))
    }

    const nothing = createNoItem().name;

    return (
        <div 
            className={styles.StorageScreen} 
            style={{width: storageWitdh + 'px'}}
        >
            {
                storage.map((item, index) => (
                    <div>
                        <CommonIcon item={item} disableReason={''}/>
                        {
                            item.name === nothing ?
                                <ArrowDownCircleFill 
                                    size={14}
                                    title={chrome.i18n.getMessage('storage_is_empty')}
                                /> :
                                <ArrowDownCircle 
                                    size={14} 
                                    title={chrome.i18n.getMessage('get_from_storage')}
                                    onClick={() => getFromStorageListener(item, index)}
                                />
                        }                        
                    </div>
                ))
            }
        </div>
    )
}

export default StorageScreen
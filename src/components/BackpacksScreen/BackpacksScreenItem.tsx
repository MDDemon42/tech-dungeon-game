import { ArrowUpCircle, ArrowUpCircleFill } from "react-bootstrap-icons";
import { IItem, IManageItemsProps } from "../../enums-and-interfaces/interfaces";
import CommonIcon from "../Icons/CommonIcon";
import BackpacksScreenItemButton from "./BackpacksScreenItemButton";
import { useDispatch } from "react-redux";
import gameSquad from "../../redux/slices/gameSquad";
import styles from './BackpacksScreen.module.css';
import { backpacksItemEnableChecker } from "../../helpers/enableCheckers";

function BackpacksScreenItem(props: {
    item: IItem,
    itemIndex: number,
    memberMasteries: string[]
}) {
    const {item, itemIndex, memberMasteries} = props;
    const [enabled, disableReason] = backpacksItemEnableChecker(item, memberMasteries);   
    
    const dispatch = useDispatch();

    const equipListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.equipItem(props));
    }

    return <div className={styles.BackpacksScreenItem_CommonIconWithButtons}>
        <CommonIcon item={item} disableReason={disableReason}/>
        <div className={styles.BackpacksScreenItem_CommonIconWithButtons_buttons}>
            <div>
                {
                    enabled ?
                        <ArrowUpCircle 
                            onClick={() => equipListener(props)}
                            title={chrome.i18n.getMessage('equip')}
                        /> :
                        <ArrowUpCircleFill
                            title={disableReason}
                        />
                }                                
            </div>
            <BackpacksScreenItemButton item={item} itemIndex={itemIndex}/>                
        </div>
    </div>
}

export default BackpacksScreenItem
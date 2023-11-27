import { useSelector } from 'react-redux';
import styles from './BackpacksScreen.module.css';
import { ICharacher, IItem, IManageItemsProps, IStore } from '../../enums-and-interfaces/interfaces';
import CommonIcon from '../Icons/CommonIcon';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import ResourceIcon from '../Icons/ResourceIcon';
import {ArrowUpCircle, ArrowUpCircleFill} from 'react-bootstrap-icons';
import priorityChecker from '../../helpers/priorityChecker';
import { UserResource } from '../../enums-and-interfaces/enums';

function BackpacksScreen(props: {
    character: ICharacher
}) {
    const { character } = props;

    const resources = useSelector((store: IStore) => store.gameSquad.resources);

    const dispatch = useDispatch()

    const equipListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.equipItem(props));
    }

    const sellListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.sellItem(props));
    }

    const masteriesUser = character.general.mind.masteries.map(data => data.name);
    const backpacksUser = character.general.backpacks;

    function BackpacksScreenItem(props: {
        item: IItem,
        itemIndex: number
    }) {
        const {item} = props;
        const [enabled, disableReason] = enableChecker(item);

        return <div className={styles.BackpacksScreen_itemsLine_CommonIconWithButtons}>
            <CommonIcon item={item} disableReason={disableReason}/>
            <div className={styles.BackpacksScreen_itemsLine_CommonIconWithButtons_buttons}>
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
                <div onClick={() => sellListener(props)}>
                    <ResourceIcon resource={UserResource.gem} price={item.cost}/>
                </div>
            </div>
        </div>
    }
    
    function enableChecker(item: IItem): [boolean, string] {
        const requiredMasteryCheck = !!item.requiredMastery ? 
            masteriesUser.includes(item.requiredMastery) :
            true;

        if (!requiredMasteryCheck) {
            return [false, chrome.i18n.getMessage('smec_mastery')]
        }

        const priorityCheck = priorityChecker(item);
        if (!priorityCheck) {
            return [false, chrome.i18n.getMessage('siec_priority')]
        }

        return [true, '']
    }    
    
    return <div className={styles.BackpacksScreen}>
        <div className={styles.BackpacksScreen_squadResources}>
            <div>
                <ResourceIcon resource={UserResource.gem}/>: {resources[UserResource.gem]}
            </div>
            <div>
                <ResourceIcon resource={UserResource.core}/>: {resources[UserResource.core]}
            </div>
            <div>
                <ResourceIcon resource={UserResource.gene}/>: {resources[UserResource.gene]}
            </div>
        </div>
        <div className={styles.BackpacksScreen_itemsLine}>
            {
                backpacksUser.map((item, index) => 
                    <BackpacksScreenItem item={item} itemIndex={index}/>
                )
            }
        </div>
        
    </div>
}

export default BackpacksScreen
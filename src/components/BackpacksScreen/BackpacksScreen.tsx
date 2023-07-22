import { useSelector } from 'react-redux';
import styles from './BackpacksScreen.module.css';
import { IItem, IManageItemsProps, IStore, UserResource } from '../../interfaces/interfaces';
import CommonIcon from '../Icons/CommonIcon';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import ResourceIcon from '../Icons/ResourceIcon';
import {ArrowUpCircle, ArrowUpCircleFill} from 'react-bootstrap-icons';
import priorityChecker from '../../helpers/priorityChecker';

function BackpacksScreen() {
    const backpacks = useSelector((store: IStore) => store.gameSquad.squadBackpacks);
    const {resources, items} = backpacks;

    const dispatch = useDispatch()

    const equipListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.equipItem(props));
    }

    const sellListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.sellItem(props));
    }

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const masteriesUser = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index].general.mind.masteries.map(data => data.name));

    let disableReason = '';
    function enableChecker(item: IItem) {
        const requiredMasteryCheck = !!item.requiredMastery ? 
            masteriesUser.includes(item.requiredMastery.name) :
            true;

        if (!requiredMasteryCheck) {
            disableReason = 'Does not have required mastery';
            return false
        }

        const priorityCheck = priorityChecker(item);
        if (!priorityCheck) {
            disableReason = 'Better equipment in use';
            return false
        }

        return true
    }    
    
    return <div className={styles.BackpacksScreen}>
        <div className={styles.BackpacksScreen_squadResources}>
            <div>
                <ResourceIcon resource='gem'/>: {resources[UserResource.gem]}
            </div>
            <div>
                <ResourceIcon resource='core'/>: {resources[UserResource.core]}
            </div>
            <div>
                <ResourceIcon resource='gene'/>: {resources[UserResource.gene]}
            </div>
        </div>
        <div className={styles.BackpacksScreen_itemsLine}>
            {
                items.map((item, index) => (
                    <div className={styles.commonIconWithButton}>
                        <CommonIcon item={item} disableReason={disableReason}/>
                        <div className={styles.commonIconWithButton_buttons}>
                            <div>
                                {
                                    enableChecker(item) ?
                                        <ArrowUpCircle 
                                            onClick={() => equipListener({index, item})}
                                            title='Equip'
                                        /> :
                                        <ArrowUpCircleFill
                                            title={disableReason}
                                        />
                                }                                
                            </div>
                            <div onClick={() => sellListener({index, item})}>
                                <ResourceIcon resource='gem'/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
}

export default BackpacksScreen
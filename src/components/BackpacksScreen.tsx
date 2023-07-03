import { useSelector } from 'react-redux';
import styles from '../index.module.css';
import { IItem, IManageItemsProps, IStore, UserResource } from '../types/interfaces';
import CommonIcon from './CommonIcon';
import { useDispatch } from 'react-redux';
import gameSquad from '../redux/slices/gameSquad';
import ResourceIcon from './ResourceIcon';
import {ArrowUpCircle} from 'react-bootstrap-icons';

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
    
    return <div className={styles.backpacksScreen}>
        <div className={styles.userParams_body}>
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
        <div className={styles.inventorySlotLine}>
            {
                items.map((item, index) => (
                    <div className={styles.commonIconWithButton}>
                        <CommonIcon item={item}/>
                        <div className={styles.commonIconWithButton_buttons}>
                            <div>
                                <ArrowUpCircle onClick={() => equipListener({index, item})}/>
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
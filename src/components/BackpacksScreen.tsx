import { useSelector } from 'react-redux';
import styles from '../index.module.css';
import { IItem, IStore, UserResource } from '../types/interfaces';
import CommonIcon from './CommonIcon';
import { useDispatch } from 'react-redux';
import gameSquad from '../redux/slices/gameSquad';
import ResourceIcon from './ResourceIcon';

function BackpacksScreen() {
    const backpacks = useSelector((store: IStore) => store.gameSquad.squadBackpacks);
    const {resources, items} = backpacks;

    const dispatch = useDispatch()

    const equipListener = (item: IItem) => {
        dispatch(gameSquad.actions.equipItem(item))
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
                items.map(item => (
                    <div className={styles.commonIconWithButton}>
                        <CommonIcon item={item}/>
                        {
                            <button
                                onClick={() => equipListener(item)}
                            >
                                Equip!
                            </button>
                        }
                    </div>
                ))
            }
        </div>
        
    </div>
}

export default BackpacksScreen
import { useSelector } from 'react-redux';
import styles from './index.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import BackpacksScreenItem from './BackpacksScreenItem';

function BackpacksScreen() {
    const backpacksUser = useSelector((store: IStore) => store.character.general.backpacks);  
    
    return <div className={styles.BackpacksScreen}>
        <div className={styles.BackpacksScreen_itemsLine}>
            {
                backpacksUser.map((item, index) => 
                    <BackpacksScreenItem 
                        item={item} 
                        itemIndex={index}
                    />
                )
            }
        </div>
        
    </div>
}

export default BackpacksScreen
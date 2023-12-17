import { useSelector } from 'react-redux';
import styles from './BackpacksScreen.module.css';
import { ICharacher, IStore } from '../../enums-and-interfaces/interfaces';
import ResourceIcon from '../Icons/ResourceIcon';
import { UserResource } from '../../enums-and-interfaces/enums';
import BackpacksScreenItem from './BackpacksScreenItem';

function BackpacksScreen(props: {
    character: ICharacher
}) {
    const { character } = props;

    const resources = useSelector((store: IStore) => store.gameSquad.resources);

    const masteriesUser = character.general.mind.masteries.map(data => data.name);
    const backpacksUser = character.general.backpacks;  
    
    return <div className={styles.BackpacksScreen}>
        <div className={styles.BackpacksScreen_squadResources}>
            {
                Object.keys(resources).map(key => {
                    if (key === UserResource.none) {
                        return null
                    }
                    return (
                        <div>
                            <ResourceIcon resource={key as UserResource}/>: {resources[key as UserResource]}
                        </div>
                )})
            }
        </div>
        <div className={styles.BackpacksScreen_itemsLine}>
            {
                backpacksUser.map((item, index) => 
                    <BackpacksScreenItem 
                        item={item} 
                        itemIndex={index}
                        memberMasteries={masteriesUser}
                    />
                )
            }
        </div>
        
    </div>
}

export default BackpacksScreen
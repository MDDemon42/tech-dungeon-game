import styles from '../index.module.css';
import CommonScreen from "./CommonScreen";
import StatsScreen from "./StatsScreen";
import InventoryScreen from "./InventoryScreen";
import { useSelector } from 'react-redux';
import { IStore } from '../types/interfaces';

function ProfileScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const user = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index])!;

    return (
        <div className={styles.gamePage_componentsBlock}>
            <div className={[
                styles.gamePage_component,
                styles.inventory
            ].join(' ')}>
                <CommonScreen 
                    name={'masteries'} 
                    vertical={true}
                /> 
                <div className={styles.inventory_screen}>
                    <StatsScreen />
                    <InventoryScreen character={user}/>
                    <CommonScreen 
                        name={'spells'} 
                        vertical={false}
                    />
                </div>
                <CommonScreen 
                    name={'powers'} 
                    vertical={true}
                />
            </div>
        </div>
    )
}

export default ProfileScreen
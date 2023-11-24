import styles from './ProfileScreen.module.css';
import MindScreen from "../MindScreen/MindScreen";
import StatsScreen from "../StatsScreen/StatsScreen";
import InventoryScreen from "../InventoryScreen/InventoryScreen";
import { ICharacher } from '../../enums-and-interfaces/interfaces';
import BackpacksScreen from '../BackpacksScreen/BackpacksScreen';

function ProfileScreen(props: {
    character: ICharacher
}) {
    const {character} = props;

    return (
        <div className={styles.ProfileScreenContainer}>
            <div className={styles.ProfileScreen}>
                <MindScreen 
                    character={character}
                    name={'masteries'} 
                    vertical={true}
                /> 
                <div className={styles.ProfileScreen_inventory}>
                    <StatsScreen />
                    <InventoryScreen 
                        character={character} 
                        battle={false}
                    />
                    <MindScreen 
                        character={character}
                        name={'spells'} 
                        vertical={false}
                    />
                </div>
                <MindScreen 
                    character={character}
                    name={'powers'} 
                    vertical={true}
                />
            </div> 
            <BackpacksScreen character={character}/>
        </div>
    )
}

export default ProfileScreen
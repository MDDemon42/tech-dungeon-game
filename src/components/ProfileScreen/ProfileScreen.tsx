import styles from './ProfileScreen.module.css';
import MindScreen from "../MindScreen/MindScreen";
import StatsScreen from "../StatsScreen/StatsScreen";
import InventoryScreen from "../InventoryScreen/InventoryScreen";
import { ICharacher } from '../../enums-and-interfaces/interfaces';

function ProfileScreen(props: {
    character: ICharacher
}) {
    const {character} = props;

    return (
        <div className={styles.ProfileScreenContainer}>
            <div className={styles.ProfileScreen}>
                <MindScreen 
                    name={'masteries'} 
                    vertical={true}
                /> 
                <div className={styles.ProfileScreen_inventory}>
                    <StatsScreen />
                    <InventoryScreen character={character} battle={false}/>
                    <MindScreen 
                        name={'spells'} 
                        vertical={false}
                    />
                </div>
                <MindScreen 
                    name={'powers'} 
                    vertical={true}
                />
            </div> 
        </div>
    )
}

export default ProfileScreen
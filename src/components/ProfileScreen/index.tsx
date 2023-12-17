import styles from './index.module.css';
import MindScreen from "../MindScreen";
import StatsBar from "../StatsBar";
import InventoryScreen from "../InventoryScreen";
import { ICharacher } from '../../enums-and-interfaces/interfaces';
import BackpacksScreen from '../BackpacksScreen/BackpacksScreen';
import { MindOption } from '../../enums-and-interfaces/enums';

function ProfileScreen(props: {
    character: ICharacher
}) {
    const {character} = props;

    return (
        <div className={styles.ProfileScreenContainer}>
            <div className={styles.ProfileScreen_inventory}>
                <div className={styles.ProfileScreen}>
                    <MindScreen 
                        character={character}
                        name={MindOption.masteries} 
                        vertical={true}
                    /> 
                    <div className={styles.ProfileScreen_inventory}>
                        <StatsBar />
                        <InventoryScreen 
                            character={character} 
                            battle={false}
                        />
                    </div>
                    <MindScreen 
                        character={character}
                        name={MindOption.powers} 
                        vertical={true}
                    />
                </div>
                <div className={styles.ProfileScreen_spells_and_bending}>
                    <MindScreen
                        character={character}
                        name={MindOption.spells}
                        vertical={false}
                    />
                    <MindScreen
                        character={character}
                        name={MindOption.bending}
                        vertical={false}
                    />
                </div>
            </div>
            <BackpacksScreen character={character}/>
        </div>
    )
}

export default ProfileScreen
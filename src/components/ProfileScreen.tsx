import styles from '../index.module.css';
import CommonScreen from "./CommonScreen";
import StatsScreen from "./StatsScreen";
import InventoryScreen from "./InventoryScreen";
import { ICharacher } from '../types/interfaces';

function ProfileScreen(props: {
    character: ICharacher
}) {
    const {character} = props;

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
                    <InventoryScreen character={character} battle={false}/>
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
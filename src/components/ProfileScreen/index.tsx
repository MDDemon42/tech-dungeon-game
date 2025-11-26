import styles from './index.module.css';
import MindScreen from "../MindScreen";
import StatsBar from "../StatsBar";
import InventoryScreen from "../InventoryScreen";
import { ICharacter } from '../../enums-and-interfaces/interfaces';
import BackpacksScreen from '../BackpacksScreen';
import { MindOption } from '../../enums-and-interfaces/enums';
import OldFashionInventoryScreen from '../OldFashionInventoryScreen';
import { useState } from 'react';
import {ToggleOn, ToggleOff} from 'react-bootstrap-icons';

function ProfileScreen(props: {
    character: ICharacter
}) {
    const {character} = props;
    const [inventoryVisible, setInventoryVisible] = useState(false);

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
                        {
                            inventoryVisible ?
                                <>
                                    <ToggleOn 
                                        size={25}
                                        className={styles.InventoryVisibleToggle}
                                        title={chrome.i18n.getMessage('hide_inventory')}
                                        onClick={() => setInventoryVisible(false)}
                                    />
                                    <OldFashionInventoryScreen character={character} />
                                </> :
                                <ToggleOff 
                                    size={25}
                                    className={styles.InventoryVisibleToggle}
                                    title={chrome.i18n.getMessage('show_inventory')}
                                    onClick={() => setInventoryVisible(true)}
                                />
                        }
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
            <BackpacksScreen/>
        </div>
    )
}

export default ProfileScreen
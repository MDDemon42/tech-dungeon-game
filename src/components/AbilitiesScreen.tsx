import { useEffect, useState } from 'react';
import styles from '../index.module.css';
import { Ability } from '../types/ability';

import AbilityIcon from './AbilityIcon';

function AbilitiesScreen() {
    const [abilities, setAbilities] = useState([] as Ability[]);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setAbilities(result['tech-dungeon-game'].abilities)
            });
    }, []);

    return (
        <div className={styles.gamePage_component}>
            Abilities:
            <div className={styles.abilitiesScreen}>
                {
                    abilities && abilities.length > 0 ? 
                        abilities.map(ability => (
                            <AbilityIcon ability={ability}/>
                        )) :
                        <p>
                            No abilities yet
                        </p>
                }
            </div>
        </div>
    )
}

export default AbilitiesScreen
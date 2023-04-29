import { useEffect, useState } from 'react';
import styles from '../index.module.css';
import { Ability } from '../types/ability';

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
            Abilities Screen
            <div className={styles.abilitiesScreen}>
                {
                    abilities.length > 0 ? abilities.map(ability => (
                        <div className={styles.abilitiesScreen_ability}>
                            <img 
                                src={ability.image}
                                title={ability.description}
                            />
                            {ability.name}
                        </div>
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
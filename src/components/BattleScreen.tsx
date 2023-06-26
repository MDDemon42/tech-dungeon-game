import { useSelector } from 'react-redux';
import styles from '../index.module.css';
import { DamageTypes, IAbility, IStore } from '../types/interfaces';
import CommonIcon from './CommonIcon';
import items from '../general/items/items';
import masteries from '../general/masteries/masteries';
import abilities from '../general/abilities';
import { useState } from 'react';
import ResourceIcon from './ResourceIcon';
import characters, { emptyInventory } from '../general/characters/characters';

function BattleScreen() {
    const [selectedAbility, setSelectedAbility] = useState<IAbility|null>(null);
    const [selectedAbilityDiv, setSelectedAbilityDiv] = useState<HTMLElement|null>(null);
    const [opponents, setOpponents] = useState([
        characters.opponents.opponent_dummy(),
        characters.opponents.opponent_dummy()
    ]);

    const generalUser = useSelector((store: IStore) => store.generalUser);
    const masteriesUser = generalUser.masteries.map(mastery => mastery.name);
    const spellsUser = generalUser.spells;

    const inventory = generalUser.inventory ? generalUser.inventory : emptyInventory();

    const abilitiesUser: IAbility[] = [];
    
    Object.keys(inventory).forEach(name => {
        if (inventory[name].ability) {
            if (inventory[name].linkedMastery) {
                const masteryName = inventory[name].linkedMastery?.name;
                if (masteryName && masteriesUser.includes(masteryName)) {
                    abilitiesUser.push(...inventory[name].masterAbilities!);
                } else {
                    const {ability} = inventory[name];
                    if (ability) {
                        abilitiesUser.push(ability);
                    }
                }
            } else {
                const {ability} = inventory[name];
                if (ability) {
                    abilitiesUser.push(ability);
                }
            }
        }
    })

    spellsUser.forEach(spell => {
        if (!!spell.ability) {
            if (!!spell.requiresRod) {
                if (
                    inventory.bothHands.name === items.item_apprenticeRod.name ||
                    inventory.bothHands.name === items.item_magisterScepter.name
                ) {
                    abilitiesUser.push(spell.ability);
                }
            } else {
                abilitiesUser.push(spell.ability);
            }
        }
    })

    // special abilities
    if (
        inventory.leftHand.name === items.item_steelSwordLeftHand.name &&
        inventory.rightHand.name === items.item_steelSwordRightHand.name &&
        masteriesUser.includes(masteries.mastery_dualSwords.name)
    ) {
        abilitiesUser.push(abilities.battleAbilities.battleAbilities_dualSwordsSlash);
    }

    function selectAbility(ability: IAbility, id: string) {
        const abilityDiv = document.querySelectorAll<HTMLElement>('#' + id)[0];
        abilityDiv.style.cssText = 'background-color: lightblue';

        setSelectedAbility(ability);
        setSelectedAbilityDiv(abilityDiv);
    }

    function deselectAbility() {
        if (selectedAbilityDiv) {
            selectedAbilityDiv.style.cssText = '';
            setSelectedAbility(null);
            setSelectedAbilityDiv(null);
        }
    }

    function processAbility(index: number) {
        if (selectedAbility) {
            const allOpponents = [...opponents];

            const damage = selectedAbility.damage - allOpponents[index].params.resistances[selectedAbility.damageType];
            allOpponents[index].params.currentHealth -= damage;

            setOpponents(allOpponents);

            deselectAbility();
        }
    }

    return (
        <div className={styles.gamePage_component}>
            <h3 className={styles.inventory_header}>
                Battle Screen
            </h3>            
            <div className={styles.gamePage_battleScreen_container}>
                <div className={styles.gamePage_battleScreen_container_opponents}>
                    {
                        opponents.map((opponent, index) => 
                            <div className={styles.gamePage_battleScreen}>
                                <div>
                                    {
                                        [...Array(opponent.params.currentHealth)].map(icon => <ResourceIcon resource='health'/>)
                                    }
                                </div>
                                <div 
                                    className={styles.dummy}
                                    onClick={() => processAbility(index)}
                                >
                                    <h4 style={{textAlign: 'center'}}>
                                        {opponent.params.name}
                                    </h4>
                                </div>
                            </div>
                        )
                    }
                </div>                
                <div className={styles.commonScreen_notVertical}>
                    {
                        abilitiesUser && abilitiesUser.map(ability => {
                            const id = ability.name.split(' ').join('');

                            if (!!ability) {
                                return <div 
                                    className={styles.commonIconWithButton}
                                    id={id}
                                    onClick={() => selectAbility(ability, id)}
                                >
                                    <CommonIcon item={ability}/>
                                </div>
                            }

                            return null
                        })
                    }
                </div>
                {
                    selectedAbility ?
                        <button onClick={() => deselectAbility()}>
                            Deselect ability
                        </button> : null
                }
            </div>
        </div>
    )
}

export default BattleScreen
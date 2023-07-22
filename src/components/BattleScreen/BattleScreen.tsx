import { useSelector } from 'react-redux';
import styles from './BattleScreen.module.css';
import { 
    IAbility, 
    IBattleAbility, 
    IStore, 
    Race, 
    UserParam 
} from '../../interfaces/interfaces';
import CommonIcon from '../Icons/CommonIcon';
import items from '../../general/items';
import masteries from '../../general/masteries/masteries';
import abilities from '../../general/abilities';
import { useState } from 'react';
import characters from '../../general/characters';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import BattleOrder from '../BattleOrder/BattleOrder';
import { createEmptyInventory } from '../../general/characters/createEmptyCharacter';

const specialRaceAbilities: Record<Race, (IBattleAbility | null)> = {
    [Race.human]: null,
    [Race.unknown]: null,
    [Race.satyr]: null,
    [Race.minotaur]: null,
    [Race.orc]: null,
    [Race.gnoll]: null,
    [Race.naga]: null,
    [Race.demon]: null,
    [Race.dragon]: null,
    [Race.chimera]: null
}

function BattleScreen() {
    const [selectedAbility, setSelectedAbility] = useState<IAbility|null>(null);
    const [selectedAbilityDiv, setSelectedAbilityDiv] = useState<HTMLElement|null>(null);
    const [opponents, setOpponents] = useState([
        characters.opponents.opponent_dummy(),
        characters.opponents.opponent_dummy()
    ]);

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const squadMembers = Object.keys(squad)
        .map(key => squad[key])
        .filter(member => !!member);

    const user = squad[index];

    const dispatch = useDispatch();

    const masteriesUser = user.general.mind.masteries.map(mastery => mastery.name);
    const spellsUser = user.general.mind.spells;
    const powersUser = user.general.mind.powers;

    const inventory = user.general.inventory ? user.general.inventory : createEmptyInventory();

    const abilitiesUser: IAbility[] = [];

    if (!!specialRaceAbilities[user.params.race]) {
        abilitiesUser.push(specialRaceAbilities[user.params.race]!);
    }
    
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
                    inventory.bothHands.name === items.weapons.item_apprenticeRod.name ||
                    inventory.bothHands.name === items.weapons.item_magisterScepter.name
                ) {
                    abilitiesUser.push(spell.ability);
                }
            } else {
                abilitiesUser.push(spell.ability);
            }
        }
    })

    powersUser.forEach(power => {
        if (!!power.ability) {
            abilitiesUser.push(power.ability);
        }
    })

    // special abilities
    if (
        inventory.leftHand.name === items.weapons.item_steelSwordLeftHand.name &&
        inventory.rightHand.name === items.weapons.item_steelSwordRightHand.name &&
        masteriesUser.includes(masteries.mastery_dualSwords.name)
    ) {
        abilitiesUser.push(abilities.battleAbilities.melee.battleAbility_dualSwordsSlash);
    }

    function selectAbility(ability: IAbility, id: string) {
        let enoughResources = true;
        const abilityDiv = document.querySelectorAll<HTMLElement>('#' + id)[0];

        const {costs} = ability;
        Object.keys(costs).forEach(key => {
            // @ts-ignore
            if (costs[key] > user?.params.currentParams[key]) {
                enoughResources = false;
                return;
            }
        })

        if (enoughResources) {
            abilityDiv.style.cssText = 'background-color: lightblue';

            setSelectedAbility(ability);
            setSelectedAbilityDiv(abilityDiv);
        } else {
            abilityDiv.style.cssText = 'background-color: red';

            setTimeout(() => {
                abilityDiv.style.cssText = '';
            }, 300)
        }
    }

    function deselectAbility() {
        if (selectedAbilityDiv) {
            selectedAbilityDiv.style.cssText = '';

            setSelectedAbility(null);
            setSelectedAbilityDiv(null);
        }
    }

    function processAbility(opponentIndex: number) {
        if (selectedAbility) {
            const allOpponents = [...opponents];
            
            const damage = selectedAbility.damage - allOpponents[opponentIndex].params.resistances[selectedAbility.damageType];
            const chance = Math.floor(Math.random()*100);
            if (selectedAbility.hitChance > chance) {
                allOpponents[opponentIndex].params.currentParams[UserParam.health] -= damage;
            }            
            
            dispatch(gameSquad.actions.processAbility({
                index,
                data: selectedAbility.costs
            }));

            setOpponents(allOpponents);

            deselectAbility();
        }
    }

    return (
        <div className={styles.BattleScreen}>
            <h3 className={styles.BattleScreen_header}>
                Battle Screen
            </h3>            
            <div className={styles.BattleScreen_body}>
                <BattleOrder squad={opponents} attacker={true} listener={processAbility}/>
                <div className={styles.BattleScreen_body_abilities}>
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
                <BattleOrder squad={squadMembers} attacker={false} listener={processAbility}/> 
            </div>
        </div>
    )
}

export default BattleScreen
import { useSelector } from 'react-redux';
import styles from './BattleScreen.module.css';
import { 
    IAbility, 
    IBattleAbility, 
    ICharacher, 
    IMemberStatus, 
    IStore
} from '../../enums-and-interfaces/interfaces';
import CommonIcon from '../Icons/CommonIcon';
import items from '../../general/items';
import masteries from '../../general/masteries/masteries';
import abilities from '../../general/abilities';
import { useEffect, useState } from 'react';
import characters from '../../general/characters';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import BattleOrder from '../BattleOrder/BattleOrder';
import { createEmptyInventory, createNoItem } from '../../helpers/emptyEssencesCreators';
import { Race, UserParam } from '../../enums-and-interfaces/enums';
import store from '../../redux/store';

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
    const [battleTurn, setBattleTurn] = useState(0);

    const [selectedAbility, setSelectedAbility] = useState<IAbility|null>(null);
    const [selectedAbilityDiv, setSelectedAbilityDiv] = useState<HTMLElement|null>(null);

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);

    const squadMembers: ICharacher[] = [];
    Object.keys(squad).forEach(key => squadMembers[Number(key)] = squad[key]);

    const [squadStatus, setSquadStatus] = useState<IMemberStatus[]>([]);

    const [opponents, setOpponents] = useState([
        characters.opponents.opponent_dummy(),
        characters.opponents.opponent_dummy()
    ]);
    const [opponentsStatus, setOpponentsStatus] = useState<IMemberStatus[]>([]);

    useEffect(() => {
        const squadStatusBasis = [...squadStatus];
        const opponentsStatusBasis = [...opponentsStatus];
        const memberStatusBasis = {
            selected: false,
            hasTurn: false,
            dead: false
        };
        
        if (battleTurn === 0) {
            squadMembers.forEach((member, index) => {
                if (!!member) {
                    squadStatusBasis[index] = {...memberStatusBasis};
                }
            });
            setSquadStatus(squadStatusBasis);

            opponents.forEach((_) => {
                opponentsStatusBasis.push({...memberStatusBasis});
            })
            setOpponentsStatus(opponentsStatusBasis);

            setBattleTurn(1);
        }
        

        if (battleTurn % 2 === 1) {
            squadStatusBasis.forEach((member) => {
                if (!!member) {
                    member.hasTurn = true;
                }
            });
            setSquadStatus(squadStatusBasis);
        } else {
            opponentsStatusBasis.forEach((member) => {
                member.hasTurn = true
            })
            setOpponentsStatus(opponentsStatusBasis);
        }
    }, [battleTurn])

    const dispatch = useDispatch();

    const user = squad[index];

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
                const masteryName = inventory[name].linkedMastery;
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

    // basic ability
    const noItem = createNoItem();
    if (
        inventory.leftHand.name === noItem.name ||
        inventory.rightHand.name === noItem.name
    ) {
        abilitiesUser.push(abilities.battleAbilities.melee.battleAbility_fistPunch)
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
        let opp_status = [...opponentsStatus];
        opp_status.forEach(opponent => opponent.selected = false);
        opp_status[opponentIndex].selected = true;
        setOpponentsStatus(opp_status);

        if (selectedAbility) {
            const allOpponents = [...opponents];
            const thatOpponent = allOpponents[opponentIndex];
            
            const damage = selectedAbility.damage - thatOpponent.params.resistances[selectedAbility.damageType];
            const chance = Math.floor(Math.random()*100);
            if (selectedAbility.hitChance > chance) {
                thatOpponent.params.currentParams[UserParam.health] -= damage;
            }        
            
            setOpponents(allOpponents);
            
            dispatch(gameSquad.actions.processAbility({
                index,
                data: selectedAbility.costs
            }));

            opp_status[opponentIndex].selected = false;
            setOpponentsStatus(opp_status);

            let status = [...squadStatus];
            status[index].hasTurn = false;
            status[index].selected = false;
            setSquadStatus(status);

            deselectAbility();
        }
    }

    function selectSquadMember(memberIndex: number) {
        let status = [...squadStatus];
        if (status[memberIndex].hasTurn) {
            dispatch(gameSquad.actions.changeSquadMember(memberIndex));

            status.forEach(member => {
                if (!!member) {
                    member.selected = false;
                }                
            });
            status[memberIndex].selected = true;
            setSquadStatus(status);
        }
    }

    return (
        <div className={styles.BattleScreen}>
            <h3 className={styles.BattleScreen_header}>
                Battle Screen
            </h3>            
            <div style={{position: 'absolute', right: 0, top: '20px'}}>
                Turn {battleTurn}
            </div>
            <div className={styles.BattleScreen_body}>
                <BattleOrder 
                    squad={opponents}
                    squadStatus={opponentsStatus} 
                    attacker={true} 
                    listener={processAbility}
                />
                <div className={styles.BattleScreen_body_abilitiesBlock}>
                    <div className={styles.BattleScreen_body_abilitiesBlock_abilities}>
                        {
                            abilitiesUser && abilitiesUser.map(ability => {
                                const id = ability.name.split(' ').join('');

                                if (!!ability) {
                                    return <div 
                                        className={styles.BattleScreen_body_abilitiesBlock_abilities_icon}
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
                    <button 
                        className={styles.BattleScreen_body_abilitiesBlock_button}
                        onClick={() => deselectAbility()}
                        disabled={!selectedAbility}
                    >
                        {`Deselect\n ability`}
                    </button>
                </div>                
                <BattleOrder
                    squad={squadMembers} 
                    squadStatus={squadStatus} 
                    attacker={false} 
                    listener={selectSquadMember}
                /> 
                <button onClick={() => setBattleTurn((value) => value + 1)}>
                    Next turn
                </button>
            </div>
        </div>
    )
}

export default BattleScreen
import { useSelector } from 'react-redux';
import styles from './BattlePage.module.css';
import { 
    IAbility, 
    IBattleAbility, 
    IBattlePageState, 
    IBigResource, 
    ICharacher, 
    IInventorySlot, 
    IItem, 
    IMemberStatus, 
    IStore,
    ISupportAbility
} from '../../enums-and-interfaces/interfaces';
import CommonIcon from '../../components/Icons/CommonIcon';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gameSquad, { createGameSquad } from '../../redux/slices/gameSquad';
import BattleOrder from '../../components/BattleOrder';
import { useNavigate } from 'react-router-dom';
import shuffleArray from '../../helpers/shuffleArray';
import gatherCharacterAbilities from '../../helpers/gatherCharacterAbilities';
import opponents from '../../redux/slices/opponents';
import {
    ArrowCounterclockwise,
    ArrowReturnLeft,
    CheckCircle,
    LayerBackward,
    SkipForward
} from 'react-bootstrap-icons';
import BattleTurnButtons from '../../components/BattleTurnButtons';
import BattleOverScreen from '../../components/BattleOverScreen/BattleOverScreen';
import { removeGameTabs } from '../../helpers/removeGameTabs';
import { AbilityTarget, BattleResult, GameScreens, InventoryPlace, InventorySlotCategory, Race, TaskStatus } from '../../enums-and-interfaces/enums';
import gameStage from '../../redux/slices/gameStage';
import { createNoItem } from '../../helpers/emptyEssencesCreators';
import abilities from '../../general/abilities';
import gameScreen from '../../redux/slices/gameScreen';
import { raceNames } from '../../general/races/races';
import items from '../../gameScreens/Market/items';
import supportAbilities from '../../general/abilities/supportAbilities';

function BattlePage() {
    const [battlePageState, setBattlePageState] = useState<IBattlePageState>({
        turn: 0,
        allyIndex: -1,
        memberIndex: -1,
        opponentIndex: -1,
        selectedAbility: null as IAbility | null,
        selectedAbilityDiv: null as HTMLElement | null,
        squadStatus: [] as IMemberStatus[],
        opponentsStatus: [] as IMemberStatus[],
        abilitiesOnTurn: [] as IAbility[],
        result: BattleResult.none,
        log: [chrome.i18n.getMessage('battle_log_battle_started')] as string[],
    });

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);

    const opps = useSelector((store: IStore) => store.opponents.opponentMembers);

    const squadMembers: ICharacher[] = [];
    Object.keys(squad).forEach(key => squadMembers[Number(key)] = squad[key]);

    const oppsMembers: ICharacher[] = [];
    Object.keys(opps).forEach(key => oppsMembers[Number(key)] = opps[key]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {        
        if (battlePageState.turn === 0) {
            setBattlePageStatuses();
            
            dispatch(gameStage.actions.changeStage({
                zone: GameScreens.villageMap,
                stage: 0
            }))
        } else if (battlePageState.turn % 2 === 1) {
            checkDead();

            checkAllyProtection();

            giveTurns();

            if ((battlePageState.turn + 1) % 4 === 0) {
                dispatch(gameSquad.actions.respite({}));

                dispatch(opponents.actions.respite({}));
            }
        } else {
            checkDead();

            checkOpponentProtection();

            giveTurns();

            opponentTurnHandler();
        }
    }, [battlePageState.turn])

    function setBattlePageStatuses() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squadStatusBasis = [...state.squadStatus];
            const opponentsStatusBasis = [...state.opponentsStatus];
            const memberStatusBasis: IMemberStatus = {
                selected: false,
                hasTurn: false,
                dead: false,
                defensiveCharms: false
            };

            squadMembers.forEach((member, index) => {
                if (!!member) {
                    squadStatusBasis[index] = {...memberStatusBasis};
                }
            });
            state.squadStatus = squadStatusBasis;

            oppsMembers.forEach((member, index) => {
                if (!!member) {
                    opponentsStatusBasis[index] = {...memberStatusBasis};
                }
            })
            state.opponentsStatus = opponentsStatusBasis;

            state.turn = 1;
            state.log.push(
                chrome.i18n.getMessage(
                    'battle_log_next_turn', 
                    [String(state.turn)]
                )
            );

            return state
        })
    }

    const opponentTurnHandler = async () => {
        const indexes = await getShuffledOpponentIndexes();

        indexes.forEach((index, orderIndex)=> {
            setTimeout(() => {
                selectOpponent(index, true);
            }, (orderIndex) * 4000 + 500)

            setTimeout(() => {
                selectAbility(null, oppsMembers[index]);
            }, (orderIndex) * 4000 + 1000)

            const sufferMember = chooseSquadMemberIndex();
            if (sufferMember === -1) {
                return
            }

            setTimeout(() => {
                selectSquadMember(sufferMember, true);
            }, (orderIndex) * 4000 + 1500)

            setTimeout(() => {
                processAbilityOntoMember(sufferMember);
            }, (orderIndex) * 4000 + 2500)

            setTimeout(() => {
                deselectSquadMember();
                deselectAbility();
                checkDead();
            }, (orderIndex) * 4000 + 2500)
            
            setTimeout(() => {
                clearCharacterAbilitiesOnTurn();
                deselectTarget(index);
            }, (orderIndex) * 4000 + 3000)
        })

        setTimeout(() => {
            nextBattleTurn();
        }, indexes.length * 4000)
    }

    function checkDead() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squadStatusBasis = [...state.squadStatus];
            const opponentsStatusBasis = [...state.opponentsStatus];

            let allMembers = 0;
            let deadMembers = 0;
            squadStatusBasis.forEach((member, index) => {
                if (!!member) {
                    allMembers++;
                    if (member.dead) {
                        deadMembers++;
                    } else if (squadMembers[index].params.currentParams.Health <= 0) {
                        state.log.push(
                            chrome.i18n.getMessage(
                                'battle_log_someone_dies', 
                                [squadMembers[index].params.name]
                            )
                        );
                        member.dead = true;
                        deadMembers++;
                    }
                }
            });
            if (allMembers === deadMembers) {
                setBattlePageState((prevState) => {
                    const state = {...prevState};
    
                    state.result = BattleResult.lose;
    
                    return state
                })
            }
            state.squadStatus = squadStatusBasis;

            let allOpponents = 0;
            let deadOpponents = 0;
            opponentsStatusBasis.forEach((opponent, index) => {
                if (!!opponent) {
                    allOpponents++;
                    if (opponent.dead) {
                        deadOpponents++;
                    } else if (oppsMembers[index].params.currentParams.Health <= 0) {
                        state.log.push(
                            chrome.i18n.getMessage(
                                'battle_log_someone_dies', 
                                [oppsMembers[index].params.name]
                            )
                        );
                        opponent.dead = true;
                        deadOpponents++;
                    }               
                }
            })
            if (allOpponents === deadOpponents) {
                setBattlePageState((prevState) => {
                    const state = {...prevState};
    
                    state.result = BattleResult.win;
    
                    return state
                })
            }
            state.opponentsStatus = opponentsStatusBasis;

            return state
        })
    }

    function checkAllyProtection() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squadStatusBasis = [...state.squadStatus];
            squadStatusBasis.forEach((member, index) => {
                if (!!member) {
                    if (!member.dead && member.defensiveCharms) {
                        member.defensiveCharms = false;

                        dispatch(gameSquad.actions.sufferAbility({
                            indexes: [index],
                            ability: supportAbilities.armor.reverseDefensiveCharms
                        }));
                    }
                }
            })

            state.squadStatus = squadStatusBasis;

            return state
        })
    }

    function checkOpponentProtection() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const opponentsStatusBasis = [...state.opponentsStatus];
            opponentsStatusBasis.forEach((member, index) => {
                if (!!member) {
                    if (!member.dead && member.defensiveCharms) {
                        member.defensiveCharms = false;

                        dispatch(opponents.actions.sufferAbility({
                            indexes: [index],
                            ability: supportAbilities.armor.reverseDefensiveCharms
                        }));
                    }
                }
            })

            state.opponentsStatus = opponentsStatusBasis;

            return state
        })
    }

    function giveTurns() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squadStatusBasis = [...state.squadStatus];
            const opponentsStatusBasis = [...state.opponentsStatus];

            if (state.turn % 2 === 1) {
                squadStatusBasis.forEach((member) => {
                    if (!!member) {
                        if (!member.dead) {
                            member.hasTurn = true;
                        }
                    }
                });
                state.squadStatus = squadStatusBasis;

                opponentsStatusBasis.forEach((member) => {
                    if (!!member) {
                        member.hasTurn = false;
                    }
                })
                state.opponentsStatus = opponentsStatusBasis;
            } else {
                opponentsStatusBasis.forEach((member) => {
                    if (!!member) {
                        if (!member.dead) {
                            member.hasTurn = true;
                        }           
                    }     
                })
                state.opponentsStatus = opponentsStatusBasis;
    
                squadStatusBasis.forEach((member) => {
                    if (!!member) {
                        member.hasTurn = false;
                    }
                });
                state.squadStatus = squadStatusBasis;
            }            

            return state
        })
    }

    async function getShuffledOpponentIndexes() {
        let indexes: number[] = [];
        await new Promise((resolve) => {
            setBattlePageState((prevState) => {
                const state = {...prevState};
                const status = [...state.opponentsStatus];
                indexes = status.map((_, index) => index);
                indexes = indexes.filter(index => status[index].hasTurn && !status[index].dead);
                
                return state
            })

            setTimeout(() => {
                resolve(0)
            }, 0)            
        })         

        shuffleArray(indexes);

        return indexes
    }

    function clearCharacterAbilitiesOnTurn() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            state.abilitiesOnTurn = [];

            return state
        })
    }

    function getIdOfTheAbility(ability: IBattleAbility | ISupportAbility) {
        return ability.name.split(' ').join('').replace('(', '').replace(')', '');
    }

    function selectAbility(
        ability: IBattleAbility | ISupportAbility | null, 
        charachter: ICharacher
    ) {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            let abil: IBattleAbility | ISupportAbility | null;
            if (state.turn % 2 === 0) {
                abil = state.abilitiesOnTurn[Math.floor(Math.random() * state.abilitiesOnTurn.length)];
            } else {
                abil = ability;
            }

            if (!abil) {
                return state
            }

            const id = getIdOfTheAbility(abil);            
            const abilityDiv = document.querySelectorAll<HTMLElement>('#' + id)[0];

            let enoughResources = true;
            const {costs} = abil;
            Object.keys(costs).forEach(key => {
                // @ts-ignore
                if (costs[key] > charachter?.params.currentParams[key]) {
                    enoughResources = false;
                    return;
                }
            })

            if (state.selectedAbilityDiv) {
                state.selectedAbilityDiv.style.cssText = '';

                state.selectedAbility = null;
                state.selectedAbilityDiv = null;
            }

            if (enoughResources) {
                abilityDiv.style.cssText = 'outline: 3px orange solid; outline-offset: 3px;';
                state.selectedAbility = abil;
                state.selectedAbilityDiv = abilityDiv;
            } else {
                abilityDiv.style.cssText = 'background-color: red';

                setTimeout(() => {
                    abilityDiv.style.cssText = '';
                }, 300)
            }

            return state
        })
    }

    function deselectAbility() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            if (state.selectedAbilityDiv) {
                state.selectedAbilityDiv.style.cssText = '';

                state.selectedAbility = null;
                state.selectedAbilityDiv = null;
            }

            return state
        });
    }

    function selectOpponent(opponentIndex: number, opponentTurn: boolean) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const opp_status = [...state.opponentsStatus];
            opp_status.forEach(opponent => opponent.selected = false);
            opp_status[opponentIndex].selected = true;

            state.opponentsStatus = opp_status;
            state.opponentIndex = opponentIndex;
            if (opponentTurn) {
                const previousAbilities = document.querySelectorAll('[class*="abilities_icon"]');
                previousAbilities.forEach(elem => {
                    (elem as HTMLElement).style.cssText = '';
                })
                state.abilitiesOnTurn = gatherCharacterAbilities(oppsMembers[opponentIndex]);
            }        

            return state
        });
    }

    function selectTarget(index: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squad_status = [...state.squadStatus];
            squad_status[index].selected = true;

            state.squadStatus = squad_status;
            state.allyIndex = index;

            return state
        });
    }

    function deselectTarget(opponentIndex?: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const opp_status = [...state.opponentsStatus];
            const squad_status = [...state.squadStatus];

            opp_status.forEach(opponent => opponent.selected = false);
            if (opponentIndex) {
                opp_status[opponentIndex].hasTurn = false;
            }

            squad_status.forEach((status, index) => {
                if (index !== state.memberIndex) {
                    status.selected = false;
                }
            })
    
            state.opponentsStatus = opp_status;
            state.squadStatus = squad_status;
            state.opponentIndex = -1;
            state.allyIndex = -1;

            return state
        });      
    }

    function processAbilityOntoMember(memberIndex: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            const possibleIndexes = collectSufferIndexes(state, memberIndex);

            const {selectedAbility} = state;
            if (selectedAbility) {
                const {hitChance} = selectedAbility;
                const sufferIndexes = possibleIndexes.filter(index => {
                    const squadMember = squadMembers[index];

                    const chance = Math.floor(Math.random()*100);
                    const success = hitChance - squadMember.params.dodge > chance;
                    const result = success ?
                        chrome.i18n.getMessage('battle_log_success_result'):
                        chrome.i18n.getMessage('battle_log_failure_result');
                    state.log.push(
                        chrome.i18n.getMessage(
                            'battle_log_someone_uses_ability_and_result',
                            [
                                oppsMembers[state.opponentIndex].params.name,
                                selectedAbility.name,
                                squadMember.params.name,
                                result,
                                String(hitChance - squadMember.params.dodge),
                                String(chance)
                            ]
                        )
                    );
                    return success
                });                

                dispatch(gameSquad.actions.sufferAbility({
                    indexes: sufferIndexes,
                    ability: selectedAbility
                }))

                dispatch(opponents.actions.processAbility({
                    index: state.opponentIndex,
                    data: selectedAbility.costs
                })); 

                if ((selectedAbility as IBattleAbility).throwing) {
                    const thisOpponent = oppsMembers[state.opponentIndex];
                    const thisOpponentInventory = thisOpponent.general.inventory;
                    const [abilityItem, abilityItemInventoryPlace] = Object.keys(thisOpponentInventory).map(key => {
                        const inventoryPlace = key as InventoryPlace;
                        const inventorySlot = thisOpponentInventory[inventoryPlace] as IItem;

                        if (inventorySlot) {
                            if (inventorySlot.category === InventorySlotCategory.item) {
                                const inventorySlotAbilities = inventorySlot.abilities;
                                if (inventorySlotAbilities) {
                                    const inventorySlotAbilitiesNames = inventorySlotAbilities
                                        .map(ability => ability.name);
                                    if (inventorySlotAbilitiesNames.includes(selectedAbility.name)) {
                                        return [inventorySlot, inventoryPlace]
                                    }
                                }

                                const inventorySlotlinkedAbilities = inventorySlot.linkedAbilities;
                                if (inventorySlotlinkedAbilities) {
                                    const inventorySlotlinkedAbilitiesNames = inventorySlotlinkedAbilities
                                        .map(ability => ability.masterAbility.name);
                                    if (inventorySlotlinkedAbilitiesNames.includes(selectedAbility.name)) {
                                        return [inventorySlot, inventoryPlace]
                                    }
                                }
                            }
                        }

                        return [inventorySlot, inventoryPlace]
                    }).filter(item => !!item[0])[0] as [IItem, InventoryPlace];

                    dispatch(opponents.actions.throwItem({
                        index: state.opponentIndex,
                        item: abilityItem,
                        inventoryPlace: abilityItemInventoryPlace
                    }))
                }
            }            

            return state
        })
    }

    function processAbilityOntoAlly() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            const {selectedAbility} = state;
            if (selectedAbility) {
                const {hitChance} = selectedAbility;
                const chance = Math.floor(Math.random()*100);
                const success = hitChance > chance;
                const result = success ?
                    chrome.i18n.getMessage('battle_log_success_result'):
                    chrome.i18n.getMessage('battle_log_failure_result');
                state.log.push(
                    chrome.i18n.getMessage(
                        'battle_log_someone_uses_ability_and_result',
                        [
                            squadMembers[state.memberIndex].params.name,
                            selectedAbility.name,
                            squadMembers[state.allyIndex].params.name,
                            result,
                            String(hitChance),
                            String(chance)
                        ]
                    )
                );

                dispatch(gameSquad.actions.sufferAbility({
                    indexes: [state.allyIndex],
                    ability: selectedAbility
                }));
                
                dispatch(gameSquad.actions.processAbility({
                    index: state.memberIndex,
                    data: selectedAbility.costs
                }));

                if (selectedAbility.name === supportAbilities.armor.defensiveCharms.name) {
                    state.squadStatus[state.allyIndex].defensiveCharms = true;
                }
            }

            state.allyIndex = -1;
            state.squadStatus[state.memberIndex].hasTurn = false;
            state.memberIndex = -1;
            state.squadStatus.forEach((member) => {
                if (!!member) {
                    member.selected = false;
                }
            });            
            state.selectedAbility = null;
            state.selectedAbilityDiv = null;

            return state
        })
    }

    function processAbilityOntoOpponent() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            const possibleIndexes = collectSufferIndexes(state, state.opponentIndex);             

            const {selectedAbility} = state;
            if (selectedAbility) {
                const {hitChance} = selectedAbility;
                const sufferIndexes = possibleIndexes.filter(index => {
                    const oppsMember = oppsMembers[index];

                    const chance = Math.floor(Math.random()*100);
                    const success = hitChance - oppsMember.params.dodge > chance;
                    const result = success ?
                        chrome.i18n.getMessage('battle_log_success_result'):
                        chrome.i18n.getMessage('battle_log_failure_result');
                    state.log.push(
                        chrome.i18n.getMessage(
                            'battle_log_someone_uses_ability_and_result',
                            [
                                squadMembers[state.memberIndex].params.name,
                                selectedAbility.name,
                                oppsMember.params.name,
                                result,
                                String(hitChance - oppsMember.params.dodge),
                                String(chance)
                            ]
                        )
                    );
                    return success
                }); 

                dispatch(opponents.actions.sufferAbility({
                    indexes: sufferIndexes,
                    ability: selectedAbility
                }))
                
                dispatch(gameSquad.actions.processAbility({
                    index: state.memberIndex,
                    data: selectedAbility.costs
                }));

                if ((selectedAbility as IBattleAbility).throwing) {
                    const thisMember = squadMembers[state.opponentIndex];
                    const thisMemberInventory = thisMember.general.inventory;
                    const [abilityItem, abilityItemInventoryPlace] = Object.keys(thisMemberInventory).map(key => {
                        const inventoryPlace = key as InventoryPlace;
                        const inventorySlot = thisMemberInventory[inventoryPlace] as IItem;
    
                        if (inventorySlot) {
                            if (inventorySlot.category === InventorySlotCategory.item) {
                                const inventorySlotAbilities = inventorySlot.abilities;
                                if (inventorySlotAbilities) {
                                    const inventorySlotAbilitiesNames = inventorySlotAbilities
                                        .map(ability => ability.name);
                                    if (inventorySlotAbilitiesNames.includes(selectedAbility.name)) {
                                        return [inventorySlot, inventoryPlace]
                                    }
                                }
    
                                const inventorySlotlinkedAbilities = inventorySlot.linkedAbilities;
                                if (inventorySlotlinkedAbilities) {
                                    const inventorySlotlinkedAbilitiesNames = inventorySlotlinkedAbilities
                                        .map(ability => ability.masterAbility.name);
                                    if (inventorySlotlinkedAbilitiesNames.includes(selectedAbility.name)) {
                                        return [inventorySlot, inventoryPlace]
                                    }
                                }
    
                            }
                        }
    
                        return [null, null]
                    }).filter(item => !!item[0])[0] as [IItem, InventoryPlace];
                    
                    dispatch(gameSquad.actions.throwItem({
                        index: state.memberIndex,
                        item: abilityItem,
                        inventoryPlace: abilityItemInventoryPlace
                    }))
                }

                if (selectedAbility.name === abilities.battleAbilities.ranged.physicalSmashing.telekineticDisarm.name) {
                    const certainOpponentInventory = opps[state.opponentIndex].general.inventory;
                    const possibleWeapons = [
                        {
                            item: certainOpponentInventory.Both_hands,
                            place: InventoryPlace.bothHands
                        },
                        {
                            item: certainOpponentInventory.Right_hand,
                            place: InventoryPlace.rightHand
                        },
                        {
                            item: certainOpponentInventory.Extra_right_hand,
                            place: InventoryPlace.extraRightHand
                        },
                        {
                            item: certainOpponentInventory.Left_hand,
                            place: InventoryPlace.leftHand
                        },
                        {
                            item: certainOpponentInventory.Extra_left_hand,
                            place: InventoryPlace.extraLeftHand
                        }
                    ];
    
                    let itemToDispatch = createNoItem() as IItem;
                    let inventoryPlace = InventoryPlace.belt;
    
                    possibleWeapons.forEach(weapon => {
                        if (
                            weapon.item &&
                            weapon.item.category === InventorySlotCategory.item
                        ) {
                            itemToDispatch = weapon.item as IItem;
                            inventoryPlace = weapon.place;
                        }
                    })                
    
                    dispatch(opponents.actions.throwItem({
                        index: state.opponentIndex,
                        item: itemToDispatch,
                        inventoryPlace
                    }))
                }
            }

            state.opponentIndex = -1;
            state.opponentsStatus.forEach((member) => {
                member.selected = false;
            })
            state.squadStatus[state.memberIndex].hasTurn = false;
            state.memberIndex = -1;
            state.squadStatus.forEach((member) => {
                if (!!member) {
                    member.selected = false;
                }
            });            
            state.selectedAbility = null;
            state.selectedAbilityDiv = null;

            return state
        })
    }

    function collectSufferIndexes(state: IBattlePageState, targetIndex: number): number[] {
        const indexes = [] as number[];
        const processingSquad = state.turn % 2 === 1 ? squadMembers : oppsMembers;
        
        const stateSelAbil = state.selectedAbility;
        const stateSelAbilTarAmount = (stateSelAbil as IBattleAbility).targetAmount;
        if (stateSelAbilTarAmount > 1) {
            if (processingSquad[targetIndex - 1]) {
                indexes.push(targetIndex - 1);
            }

            if (processingSquad[targetIndex + 1]) {
                indexes.push(targetIndex + 1);
            }

            if (stateSelAbilTarAmount === 5) {
                for (const index in processingSquad) {
                    if (processingSquad[index] && Number(index) !== targetIndex) {
                        indexes.push(Number(index));
                    }
                }
            }
        } 
            
        indexes.push(targetIndex);            

        return indexes
    }

    function chooseSquadMemberIndex() {
        const squadStatus = [...battlePageState.squadStatus];

        const memberIndexes = squadMembers.map((member, index) => {
            if (member && !squadStatus[index].dead) {
                return index
            }
            return undefined
        }).filter(index => Number(index) > -1 );

        const memberIndex = memberIndexes[Math.floor(Math.random() * memberIndexes.length)] as number ?? -1;

        return memberIndex
    }

    function selectSquadMember(memberIndex: number, opponentTurn: boolean) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const status = [...state.squadStatus];

            if (!opponentTurn) {
                if (status[memberIndex].hasTurn) {  
                    status.forEach(member => {
                        if (!!member) {
                            member.selected = false;
                        }                
                    });
                    status[memberIndex].selected = true;
    
                    state.squadStatus = status;
                    state.memberIndex = memberIndex;

                    dispatch(gameSquad.actions.changeSquadMember(memberIndex));
                    state.abilitiesOnTurn = gatherCharacterAbilities(squad[memberIndex]);
                }                
            } else {
                status[memberIndex].selected = true;
                state.squadStatus = status;
            }

            return state
        });
    }

    function deselectSquadMember() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const status = [...state.squadStatus];

            status.forEach(member => {
                if (!!member) {
                    member.selected = false;
                }                
            });

            state.squadStatus = status;
            state.memberIndex = -1;

            state.selectedAbility = null;
            state.selectedAbilityDiv = null;

            return state
        });
    }

    function nextBattleTurn() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            state.turn++;

            state.log.push(
                chrome.i18n.getMessage(
                    'battle_log_next_turn', 
                    [String(state.turn)]
                )
            );

            return state
        });
    }

    function checkEndOfTurn() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            let turnsLeft = 0;
            state.squadStatus.forEach((member) => {
                if (!!member && member.hasTurn) {
                    turnsLeft++;
                }
            }); 
            if (turnsLeft === 0) {
                state.turn++;

                state.log.push(
                    chrome.i18n.getMessage(
                        'battle_log_next_turn', 
                        [String(state.turn)]
                    )
                );
            }

            return state
        })
    }

    function abilitiesOnTurnBlock(character: ICharacher) {
        const state = {...battlePageState};
        return (
            state.abilitiesOnTurn && state.abilitiesOnTurn.map(ability => {
                const id = getIdOfTheAbility(ability);

                if (!!ability) {
                    return <div 
                        className={styles.BattlePage_body_abilitiesBlock_abilities_icon}
                        id={id}
                        onClick={() => selectAbility(ability, character)}
                    >
                        <CommonIcon item={ability}/>
                    </div>
                }

                return null
            })
        )
    }

    const setGameOver = () => {
        dispatch(gameSquad.actions.setState(createGameSquad()));

        removeGameTabs();
    }

    const navigateHomeHandler = () => {
        navigate('/game');
    }

    const collectTropheys = () => {
        const result: (IItem | IBigResource)[] = [];

        oppsMembers.forEach(opp => {
            const oppInventory = opp.general.inventory;

            Object.values(oppInventory).forEach((item: IInventorySlot) => {
                if (!!item && item.category === InventorySlotCategory.item) {
                    result.push(item as IItem);
                }
            })

            const oppRace = opp.params.race;
            const beastRaces = [
                raceNames[Race.gnoll], 
                raceNames[Race.satyr], 
                raceNames[Race.taur]
            ];
            const reptiloidRaces = [
                raceNames[Race.naga], 
                raceNames[Race.raptor]
            ];
            const dragonRaces = [
                raceNames[Race.ankylosaurus], 
                raceNames[Race.dragon], 
                raceNames[Race.koatl]
            ];

            if (beastRaces.includes(oppRace)) {
                result.push(items.bigResources.beastRemains);
            }

            if (reptiloidRaces.includes(oppRace)) {
                result.push(items.bigResources.reptiloidRemains);
            }

            if (dragonRaces.includes(oppRace)) {
                result.push(items.bigResources.dragonRemains);
            }
        })

        const oppGems = Array(Math.floor(oppsMembers.length / 2) + 1)
            .fill(items.other.gem) as IItem[];
        console.log('-oppGems-', oppGems);
        result.push(...oppGems);
        console.log('-result-', result);
        return result
    }

    const showTropheys = () => {
        const tropheys = collectTropheys();

        dispatch(gameStage.actions.setUsableOptions({
            screen: GameScreens.tropheyField,
            stage: 0,
            options: {0: tropheys}
        }));

        dispatch(gameStage.actions.changeStage({
            zone: GameScreens.tropheyField,
            stage: 1
        }))

        dispatch(gameStage.actions.updateTask({
            screen: GameScreens.tropheyField,
            stage: 2,
            status: TaskStatus.unknown
        }))

        dispatch(gameScreen.actions.changeScreen(GameScreens.tropheyField));
        
        setTimeout(() => navigate('/game'), 0);
    }

    const battleTurnButtonsListeners = {
        navigateHome: navigateHomeHandler,
    }

    const abilitiesBlockInstructionStyle = 
        (condition: boolean): React.CSSProperties => 
    {
        if (battlePageState.turn % 2 === 0) {
            return {}
        }

        return {fontWeight: condition ? 'bold' : '400'}
    }

    return (
        <div className={styles.BattlePageContainer}>
            <div className={styles.BattlePage}>
                {
                    battlePageState.result === BattleResult.lose ?
                        <BattleOverScreen 
                            result={battlePageState.result} 
                            listener={setGameOver}
                        /> :
                        battlePageState.result === BattleResult.win ?
                            <BattleOverScreen 
                                result={battlePageState.result} 
                                listener={showTropheys}
                            /> :
                            null
                }
                <div className={styles.BattlePage_body}>
                    <BattleOrder 
                        squad={oppsMembers}
                        squadStatus={battlePageState.opponentsStatus} 
                        listener={(opp_index: number) => selectOpponent(opp_index, false)}
                    />
                    <div className={styles.BattlePage_body_abilitiesBlock}>
                        <button 
                            className={styles.BattlePage_body_abilitiesBlock_button_deselectSquadMember}
                            onClick={deselectSquadMember}
                            disabled={battlePageState.memberIndex < 0}
                            title={chrome.i18n.getMessage('battle_page_deselect_member')}
                        >
                            <LayerBackward size={30}/>                        
                        </button>
                        <button 
                            className={styles.BattlePage_body_abilitiesBlock_button_deselectAbility}
                            onClick={deselectAbility}
                            disabled={
                                !battlePageState.selectedAbility ||
                                battlePageState.turn % 2 === 0
                            }
                            title={chrome.i18n.getMessage('battle_page_deselect_ability')}
                        >
                            <ArrowCounterclockwise size={30}/>                        
                        </button>
                        <button 
                            className={styles.BattlePage_body_abilitiesBlock_button_deselectAbility}
                            onClick={() => deselectTarget()}
                            disabled={battlePageState.opponentIndex < 0}
                            title={chrome.i18n.getMessage('battle_page_deselect_opponent')}
                        >
                            <ArrowReturnLeft size={30}/>                        
                        </button>
                        <div className={styles.BattlePage_body_abilitiesBlock_abilities}>
                            {
                                battlePageState.result === BattleResult.none ?
                                (
                                    battlePageState.turn % 2 === 1 ? 
                                        battlePageState.memberIndex >= 0 ?
                                            abilitiesOnTurnBlock(squad[battlePageState.memberIndex]) :
                                            <p>
                                                {chrome.i18n.getMessage('battle_page_your_turn')}
                                            </p> :
                                        battlePageState.abilitiesOnTurn ?
                                            abilitiesOnTurnBlock(opps[battlePageState.opponentIndex]) :
                                            <p>
                                                {chrome.i18n.getMessage('battle_page_opponents_turn')}
                                            </p> 
                                ) :
                                'Battle is ' + battlePageState.result
                            }
                        </div> 
                        <div className={styles.BattlePage_body_abilitiesBlock_button_instruction}>
                            <span style={abilitiesBlockInstructionStyle(battlePageState.memberIndex < 0)}>
                                {chrome.i18n.getMessage('battle_page_choose_member')}
                            </span>
                            <span style={abilitiesBlockInstructionStyle(!battlePageState.selectedAbility)}>
                                {chrome.i18n.getMessage('battle_page_choose_ability')}
                            </span>
                            <span style={abilitiesBlockInstructionStyle(
                                !!battlePageState.selectedAbility && (
                                    (
                                        battlePageState.selectedAbility.target === AbilityTarget.enemy && 
                                        battlePageState.opponentIndex < 0 
                                    ) ||
                                    (
                                        battlePageState.selectedAbility.target === AbilityTarget.ally &&
                                        battlePageState.allyIndex < 0
                                    )
                                )
                            )}>
                                {chrome.i18n.getMessage('battle_page_choose_target')}
                            </span>
                        </div>
                        <button 
                            className={styles.BattlePage_body_abilitiesBlock_button_process}
                            onClick={() => {
                                if (battlePageState.selectedAbility) {
                                    if (battlePageState.selectedAbility.target === AbilityTarget.enemy) {
                                        processAbilityOntoOpponent();
                                    }
                                    if (battlePageState.selectedAbility.target === AbilityTarget.ally) {
                                        processAbilityOntoAlly();
                                    }
                                }
                                checkEndOfTurn();
                            }}
                            disabled={
                                battlePageState.memberIndex < 0 ||
                                !battlePageState.selectedAbility ||
                                (
                                    !!battlePageState.selectedAbility && (
                                        (
                                            battlePageState.selectedAbility.target === AbilityTarget.enemy && 
                                            battlePageState.opponentIndex < 0 
                                        ) ||
                                        (
                                            battlePageState.selectedAbility.target === AbilityTarget.ally &&
                                            battlePageState.allyIndex < 0
                                        )
                                    )
                                )
                            }
                            title={chrome.i18n.getMessage('battle_page_process_ability')}
                        >
                            <CheckCircle size={30}/>                        
                        </button>
                        <button 
                            className={styles.BattlePage_body_abilitiesBlock_button_nextTurn}
                            onClick={nextBattleTurn}
                            title={chrome.i18n.getMessage('battle_page_next_turn')}
                        >
                            <SkipForward size={30}/>                        
                        </button>                    
                    </div>                
                    <BattleOrder
                        squad={squadMembers} 
                        squadStatus={battlePageState.squadStatus} 
                        listener={(memb_index: number) => {
                            if (
                                battlePageState.selectedAbility &&
                                battlePageState.selectedAbility.target === AbilityTarget.ally
                            ) {
                                selectTarget(memb_index);
                            } else {
                                selectSquadMember(memb_index, false);
                            }                            
                        }}
                    /> 
                </div>
                <BattleTurnButtons 
                    listeners={battleTurnButtonsListeners}
                />
            </div>
            <div className={styles.BattleLog}>
                {
                    battlePageState.log.map(log => (
                        <div className={styles.BattleLog_log}> 
                            {log}
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default BattlePage
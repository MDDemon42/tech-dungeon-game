import { useSelector } from 'react-redux';
import styles from './BattlePage.module.css';
import { 
    IAbility, 
    IBattlePageState, 
    ICharacher, 
    IInventorySlot, 
    IItem, 
    IMemberStatus, 
    IStore
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
    CheckCircle
} from 'react-bootstrap-icons';
import BattleTurnButtons from '../../components/BattleTurnButtons';
import BattleOverScreen from '../../components/BattleOverScreen/BattleOverScreen';
import { removeGameTabs } from '../../helpers/removeGameTabs';
import { BattleResult, GameScreens, InventoryPlace, InventorySlotCategory } from '../../enums-and-interfaces/enums';
import gameStage from '../../redux/slices/gameStage';

function BattlePage() {
    const [battlePageState, setBattlePageState] = useState<IBattlePageState>({
        battleTurn: 0,
        selectedMemberIndex: -1,
        selectedOpponentIndex: -1,
        selectedAbility: null as IAbility | null,
        selectedAbilityDiv: null as HTMLElement | null,
        squadStatus: [] as IMemberStatus[],
        opponentsStatus: [] as IMemberStatus[],
        abilitiesOnTurn: [] as IAbility[],
        battleResult: BattleResult.none
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
        if (battlePageState.battleTurn === 0) {
            setBattlePageStatuses();
            
            dispatch(gameStage.actions.changeStage({
                zone: GameScreens.villageMap,
                stage: 0
            }))
        } else if (battlePageState.battleTurn % 2 === 1) {
            checkDead();

            giveTurns();

            if ((battlePageState.battleTurn + 1) % 4 === 0) {
                dispatch(gameSquad.actions.respite({}));

                dispatch(opponents.actions.respite({}));
            }
        } else {
            checkDead();

            giveTurns();

            opponentTurnHandler();
        }
    }, [battlePageState.battleTurn])

    function setBattlePageStatuses() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squadStatusBasis = [...state.squadStatus];
            const opponentsStatusBasis = [...state.opponentsStatus];
            const memberStatusBasis = {
                selected: false,
                hasTurn: false,
                dead: false
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

            state.battleTurn = 1;

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
                deselectOpponent(index);
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
                    if (squadMembers[index].params.currentParams.Health <= 0) {
                        member.dead = true;
                        deadMembers++;
                    }
                }
            });
            if (allMembers === deadMembers) {
                setBattlePageState((prevState) => {
                    const state = {...prevState};
    
                    state.battleResult = BattleResult.lose;
    
                    return state
                })
            }
            state.squadStatus = squadStatusBasis;

            let allOpponents = 0;
            let deadOpponents = 0;
            opponentsStatusBasis.forEach((opponent, index) => {
                if (!!opponent) {
                    allOpponents++;
                    if (oppsMembers[index].params.currentParams.Health <= 0) {
                        opponent.dead = true;
                        deadOpponents++;
                    }               
                }
            })
            if (allOpponents === deadOpponents) {
                setBattlePageState((prevState) => {
                    const state = {...prevState};
    
                    state.battleResult = BattleResult.win;
    
                    return state
                })
            }
            state.opponentsStatus = opponentsStatusBasis;

            return state
        })
    }

    function giveTurns() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const squadStatusBasis = [...state.squadStatus];
            const opponentsStatusBasis = [...state.opponentsStatus];

            if (state.battleTurn % 2 === 1) {
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

    function getIdOfTheAbility(ability: IAbility) {
        return ability.name.split(' ').join('').replace('(', '').replace(')', '');
    }

    function selectAbility(
        ability: IAbility | null, 
        charachter: ICharacher
    ) {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            let abil: IAbility | null;
            if (state.battleTurn % 2 === 0) {
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
            state.selectedOpponentIndex = opponentIndex;
            if (opponentTurn) {
                state.abilitiesOnTurn = gatherCharacterAbilities(oppsMembers[opponentIndex]);
            }            

            return state
        });
    }

    function deselectOpponent(opponentIndex?: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const opp_status = [...state.opponentsStatus];
            opp_status.forEach(opponent => opponent.selected = false);
            if (opponentIndex) {
                opp_status[opponentIndex].hasTurn = false;
            }
    
            state.opponentsStatus = opp_status;
            state.selectedOpponentIndex = -1;

            return state
        });      
    }

    function processAbilityOntoMember(memberIndex: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            const indexes = collectSufferIndexes(state, memberIndex);

            const {selectedAbility} = state;
            if (selectedAbility) {
                dispatch(gameSquad.actions.sufferAbility({
                    indexes,
                    ability: selectedAbility
                }))

                dispatch(opponents.actions.processAbility({
                    index: state.selectedOpponentIndex,
                    data: selectedAbility.costs
                })); 

                if (selectedAbility.throwing) {
                    const thisOpponent = oppsMembers[state.selectedOpponentIndex];
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
                        index: state.selectedOpponentIndex,
                        item: abilityItem,
                        inventoryPlace: abilityItemInventoryPlace
                    }))
                }
            }            

            return state
        })
    }

    function processAbilityOntoOpponent() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            const indexes = collectSufferIndexes(state, state.selectedOpponentIndex);

            dispatch(opponents.actions.sufferAbility({
                indexes,
                ability: state.selectedAbility
            }))
            
            dispatch(gameSquad.actions.processAbility({
                index: state.selectedMemberIndex,
                data: state.selectedAbility?.costs
            }));

            const {selectedAbility} = state;
            if (selectedAbility && selectedAbility.throwing) {
                const thisMember = squadMembers[state.selectedOpponentIndex];
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
                    index: state.selectedMemberIndex,
                    item: abilityItem,
                    inventoryPlace: abilityItemInventoryPlace
                }))
            }

            state.selectedOpponentIndex = -1;
            state.opponentsStatus.forEach((member) => {
                member.selected = false;
            })
            state.squadStatus[state.selectedMemberIndex].hasTurn = false;
            state.selectedMemberIndex = -1;
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
        const processingSquad = state.battleTurn % 2 === 1 ? squadMembers : oppsMembers;
        if (state.selectedAbility && state.selectedAbility.targetAmount > 1) {
            const {targetAmount} = state.selectedAbility;
            if (processingSquad[targetIndex - 1]) {
                indexes.push(targetIndex - 1);
            }

            if (processingSquad[targetIndex + 1]) {
                indexes.push(targetIndex + 1);
            }

            if (targetAmount === 5) {
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
                    state.selectedMemberIndex = memberIndex;

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
            state.selectedMemberIndex = -1;

            return state
        });
    }

    function nextBattleTurn() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            state.battleTurn++;

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
                state.battleTurn++;
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

    const showTropheys = () => {

        // for now
        navigate('/game');
    }

    const battleTurnButtonsListeners = {
        navigateHome: navigateHomeHandler,
        deselectMember: deselectSquadMember,
        nextTurn: nextBattleTurn
    }

    const battleTurnButtonsDisableReasons = {
        deselectMember: battlePageState.selectedMemberIndex < 0
    }

    return (
        <div className={styles.BattlePage}>
            {
                battlePageState.battleResult === BattleResult.lose ?
                    <BattleOverScreen 
                        result={battlePageState.battleResult} 
                        listener={setGameOver}
                    /> :
                    battlePageState.battleResult === BattleResult.win ?
                        <BattleOverScreen 
                            result={battlePageState.battleResult} 
                            listener={showTropheys}
                        /> :
                        null
            }
            <h3 className={styles.BattlePage_header}>
                {chrome.i18n.getMessage('battle_page_title')}
            </h3>            
            <div style={{position: 'absolute', right: '10px', top: '20px'}}>
                {chrome.i18n.getMessage('battle_page_turn', String(battlePageState.battleTurn))}
            </div>
            <div className={styles.BattlePage_body}>
                <BattleOrder 
                    squad={oppsMembers}
                    squadStatus={battlePageState.opponentsStatus} 
                    attacker={true} 
                    listener={(opp_index: number) => selectOpponent(opp_index, false)}
                />
                <div className={styles.BattlePage_body_abilitiesBlock}>
                    <button 
                        className={styles.BattlePage_body_abilitiesBlock_button_deselect}
                        onClick={deselectAbility}
                        disabled={
                            !battlePageState.selectedAbility ||
                            battlePageState.battleTurn % 2 === 0
                        }
                        title={chrome.i18n.getMessage('battle_page_deselect_ability')}
                    >
                        <ArrowCounterclockwise size={30}/>                        
                    </button>
                    <div className={styles.BattlePage_body_abilitiesBlock_abilities}>
                        {
                            battlePageState.battleResult === BattleResult.none ?
                            (
                                battlePageState.battleTurn % 2 === 1 ? 
                                    battlePageState.selectedMemberIndex >= 0 ?
                                        abilitiesOnTurnBlock(squad[battlePageState.selectedMemberIndex]) :
                                        <p>
                                            {chrome.i18n.getMessage('battle_page_your_turn')}
                                        </p> :
                                    battlePageState.abilitiesOnTurn ?
                                        abilitiesOnTurnBlock(opps[battlePageState.selectedOpponentIndex]) :
                                        <p>
                                            {chrome.i18n.getMessage('battle_page_opponents_turn')}
                                        </p> 
                            ) :
                            'Battle is ' + battlePageState.battleResult
                        }
                    </div>
                    <button 
                        className={styles.BattlePage_body_abilitiesBlock_button_process}
                        onClick={() => {
                            processAbilityOntoOpponent();
                            checkEndOfTurn();
                        }}
                        disabled={
                            !battlePageState.selectedAbility || 
                            battlePageState.selectedMemberIndex < 0 ||
                            battlePageState.selectedOpponentIndex < 0
                        }
                        title={chrome.i18n.getMessage('battle_page_process_ability')}
                    >
                        <CheckCircle size={30}/>                        
                    </button>
                </div>                
                <BattleOrder
                    squad={squadMembers} 
                    squadStatus={battlePageState.squadStatus} 
                    attacker={false} 
                    listener={(memb_index: number) => selectSquadMember(memb_index, false)}
                /> 
            </div>
            <BattleTurnButtons 
                listeners={battleTurnButtonsListeners}
                disableReasons={battleTurnButtonsDisableReasons}
            />
        </div>
    )
}

export default BattlePage
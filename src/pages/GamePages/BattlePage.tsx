import { useSelector } from 'react-redux';
import styles from './BattlePage.module.css';
import { 
    IAbility, 
    ICharacher, 
    IMemberStatus, 
    IStore
} from '../../enums-and-interfaces/interfaces';
import CommonIcon from '../../components/Icons/CommonIcon';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import BattleOrder from '../../components/BattleOrder/BattleOrder';
import { useNavigate } from 'react-router-dom';
import shuffleArray from '../../helpers/shuffleArray';
import characterAbilitiesGatherer from '../../helpers/characterAbilitiesGatherer';
import opponents from '../../redux/slices/opponents';
import {
    HouseDoor, 
    LayerBackward, 
    SkipForward, 
    ArrowCounterclockwise,
    CheckCircle
} from 'react-bootstrap-icons';
import BattleTurnButtons from '../../components/BattleTurnButtons/BattleTurnButtons';

function BattlePage() {
    const [battlePageState, setBattlePageState] = useState({
        battleTurn: 0,
        selectedMemberIndex: -1,
        selectedOpponentIndex: -1,
        selectedAbility: null as IAbility | null,
        selectedAbilityDiv: null as HTMLElement | null,
        squadStatus: [] as IMemberStatus[],
        opponentsStatus: [] as IMemberStatus[],
        abilitiesOnTurn: [] as IAbility[],
        battleResult: 'none'
    })

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);

    const current_opponents = useSelector((store: IStore) => store.opponents.opponentMembers);

    const squadMembers: ICharacher[] = [];
    Object.keys(squad).forEach(key => squadMembers[Number(key)] = squad[key]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {        
        if (battlePageState.battleTurn === 0) {
            dispatch(opponents.actions.chooseOpponentsOption({index: 0}));

            setBattlePageStatuses();
        } else if (battlePageState.battleTurn % 2 === 1) {
            checkDead();

            giveTurns();

            if ((battlePageState.battleTurn + 1) % 4 === 0) {
                dispatch(gameSquad.actions.respite({}));
            }
        } else {
            checkDead();

            giveTurns();

            if (battlePageState.battleTurn % 4 === 0) {
                dispatch(opponents.actions.respite({}));
            }

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

            current_opponents.forEach((_) => {
                opponentsStatusBasis.push({...memberStatusBasis});
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
                selectAbility(null, current_opponents[index]);
            }, (orderIndex) * 4000 + 1000)

            const sufferMember = chooseSquadMemberIndex();
            if (sufferMember === 0) {
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

            squadStatusBasis.forEach((member, index) => {
                if (!!member) {
                    if (squadMembers[index].params.currentParams.Health <= 0) {
                        member.dead = true;
                    }
                }
            });
            state.squadStatus = squadStatusBasis;

            opponentsStatusBasis.forEach((member, index) => {
                if (current_opponents[index].params.currentParams.Health <= 0) {
                    member.dead = true;
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

            if (state.battleTurn % 2 === 1) {
                squadStatusBasis.forEach((member, index) => {
                    if (!!member) {
                        if (!member.dead) {
                            member.hasTurn = true;
                        }
                    }
                });
                state.squadStatus = squadStatusBasis;

                opponentsStatusBasis.forEach((member) => {
                    member.hasTurn = false
                })
                state.opponentsStatus = opponentsStatusBasis;
            } else {
                opponentsStatusBasis.forEach((member) => {
                    if (!member.dead) {
                        member.hasTurn = true
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

            const id = abil.name.split(' ').join('');

            let enoughResources = true;
            const abilityDiv = document.querySelectorAll<HTMLElement>('#' + id)[0];

            const {costs} = abil;
            Object.keys(costs).forEach(key => {
                // @ts-ignore
                if (costs[key] > charachter?.params.currentParams[key]) {
                    enoughResources = false;
                    return;
                }
            })

            if (enoughResources) {
                abilityDiv.style.cssText = 'outline: 3px lightgray dashed; outline-offset: 3px;';
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
                state.abilitiesOnTurn = characterAbilitiesGatherer(current_opponents[opponentIndex]);
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

            if (state.selectedAbility) {
                dispatch(gameSquad.actions.sufferAbility({
                    index: memberIndex,
                    ability: state.selectedAbility
                }))

                dispatch(opponents.actions.processAbility({
                    index: state.selectedOpponentIndex,
                    data: state.selectedAbility.costs
                }));                
            }            

            return state
        })
    }

    function processAbilityOntoOpponent() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            dispatch(opponents.actions.sufferAbility({
                index: state.selectedOpponentIndex,
                ability: state.selectedAbility
            }))
            
            dispatch(gameSquad.actions.processAbility({
                index: state.selectedMemberIndex,
                data: state.selectedAbility?.costs
            }));

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

    function chooseSquadMemberIndex() {
        const squadStatus = [...battlePageState.squadStatus];
        const memberIndexes = squadMembers.map((member, index) => {
            if (member && !squadStatus[index].dead) {
                return index
            }
            return undefined
        }).filter(index => !!index);

        const memberIndex = memberIndexes[Math.floor(Math.random() * memberIndexes.length)] as number;

        if (memberIndex === undefined) {
            setBattlePageState((prevState) => {
                const state = {...prevState};

                state.battleResult = 'lost';

                return state
            })

            return 0
        } else {
            return memberIndex
        }
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
                    state.abilitiesOnTurn = characterAbilitiesGatherer(squad[memberIndex]);
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
                const id = ability.name.split(' ').join('');

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

    const battleTurnButtonsListeners = {
        navigateHome: () => navigate('/game'),
        deselectMember: deselectSquadMember,
        nextTurn: nextBattleTurn
    }

    const battleTurnButtonsDisableReasons = {
        deselectMember: battlePageState.selectedMemberIndex < 0
    }

    return (
        <div className={styles.BattlePage}>
            <h3 className={styles.BattlePage_header}>
                {chrome.i18n.getMessage('battle_page_title')}
            </h3>            
            <div style={{position: 'absolute', right: '10px', top: '20px'}}>
                {chrome.i18n.getMessage('battle_page_turn', String(battlePageState.battleTurn))}
            </div>
            <div className={styles.BattlePage_body}>
                <BattleOrder 
                    squad={current_opponents}
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
                            battlePageState.battleResult === 'none' ?
                            (
                                battlePageState.battleTurn % 2 === 1 ? 
                                    battlePageState.selectedMemberIndex >= 0 ?
                                        abilitiesOnTurnBlock(squad[battlePageState.selectedMemberIndex]) :
                                        <p>
                                            {chrome.i18n.getMessage('battle_page_your_turn')}
                                        </p> :
                                    battlePageState.abilitiesOnTurn ?
                                        abilitiesOnTurnBlock(current_opponents[battlePageState.selectedOpponentIndex]) :
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
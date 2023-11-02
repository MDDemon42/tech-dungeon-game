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
import characters from '../../general/characters';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import BattleOrder from '../../components/BattleOrder/BattleOrder';
import { UserParam } from '../../enums-and-interfaces/enums';
import { useNavigate } from 'react-router-dom';
import shuffleArray from '../../helpers/shuffleArray';
import characterAbilitiesGatherer from '../../helpers/characterAbilitiesGatherer';

const opponents_options = [
    [
        characters.opponents.opponent_dummy(),
        characters.villagers.guard(),
        characters.villagers.barbarian(),
        characters.villagers.knight()
    ]
]

function BattlePage() {
    const [battlePageState, setBattlePageState] = useState({
        battleTurn: 0,
        selectedMemberIndex: -1,
        selectedOpponentIndex: -1,
        selectedAbility: null as IAbility | null,
        selectedAbilityDiv: null as HTMLElement | null,
        squadStatus: [] as IMemberStatus[],
        opponentsStatus: [] as IMemberStatus[],
        opponents: opponents_options[Math.floor(Math.random() * opponents_options.length)],
        abilitiesOnTurn: [] as IAbility[]
    })

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);

    const squadMembers: ICharacher[] = [];
    Object.keys(squad).forEach(key => squadMembers[Number(key)] = squad[key]);

    useEffect(() => {
        const state = {...battlePageState};
        const squadStatusBasis = [...state.squadStatus];
        const opponentsStatusBasis = [...state.opponentsStatus];
        const memberStatusBasis = {
            selected: false,
            hasTurn: false,
            dead: false
        };
        
        if (state.battleTurn === 0) {
            squadMembers.forEach((member, index) => {
                if (!!member) {
                    squadStatusBasis[index] = {...memberStatusBasis};
                }
            });
            state.squadStatus = squadStatusBasis;

            state.opponents.forEach((_) => {
                opponentsStatusBasis.push({...memberStatusBasis});
            })
            state.opponentsStatus = opponentsStatusBasis;

            state.battleTurn = 1;

            setBattlePageState(state);
        } else if (state.battleTurn % 2 === 1) {
            squadStatusBasis.forEach((member) => {
                if (!!member) {
                    member.hasTurn = true;
                }
            });
            state.squadStatus = squadStatusBasis;

            setBattlePageState(state);
        } else {
            opponentsStatusBasis.forEach((member) => {
                member.hasTurn = true
            })
            state.opponentsStatus = opponentsStatusBasis;

            setBattlePageState(state);

            opponentTurnHandler();
        }
    }, [battlePageState.battleTurn])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const opponentTurnHandler = () => {
        const status = [...battlePageState.opponentsStatus];
        const indexes = status.map((_, index) => index);
        indexes.filter(index => status[index].hasTurn && !status[index].dead);

        shuffleArray(indexes);

        indexes.forEach((index, orderIndex)=> {
            setTimeout(() => {
                selectOpponent(index);
            }, (orderIndex) * 4000 + 500)

            setTimeout(() => {
                selectAbility(null, null, index);
            }, (orderIndex) * 4000 + 1000)

            setTimeout(() => {
                // use ability
                deselectAbility();
            }, (orderIndex) * 4000 + 2000)
            
            setTimeout(() => {
                deselectOpponent(index);
            }, (orderIndex) * 4000 + 3000)
        })

        setTimeout(() => {
            nextBattleTurn();
        }, status.length * 4000)
    }

    function selectAbility(
        ability: IAbility | null, 
        charachter: ICharacher | null, 
        index: number = 0
    ) {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            let abil: IAbility | null;
            let char: ICharacher | null;
            if (state.battleTurn % 2 === 0) {
                abil = state.abilitiesOnTurn[Math.floor(Math.random() * state.abilitiesOnTurn.length)];
                char = state.opponents[index];
            } else {
                abil = ability;
                char = charachter;
            }

            if (!abil || !char) {
                return state
            }

            const id = abil.name.split(' ').join('');

            let enoughResources = true;
            const abilityDiv = document.querySelectorAll<HTMLElement>('#' + id)[0];

            const {costs} = abil;
            Object.keys(costs).forEach(key => {
                // @ts-ignore
                if (costs[key] > char?.params.currentParams[key]) {
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

    function selectOpponent(opponentIndex: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const opp_status = [...state.opponentsStatus];
            opp_status.forEach(opponent => opponent.selected = false);
            opp_status[opponentIndex].selected = true;

            state.opponentsStatus = opp_status;
            state.selectedOpponentIndex = opponentIndex;
            state.abilitiesOnTurn = characterAbilitiesGatherer(state.opponents[opponentIndex]);

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

    function processAbility(opponentIndex: number) {
        const state = {...battlePageState};
        selectOpponent(opponentIndex);

        if (state.selectedAbility && state.selectedMemberIndex > 0) {
            const allOpponents = [...state.opponents];
            const thatOpponent = allOpponents[opponentIndex];
            
            const damage = state.selectedAbility.damage - 
                thatOpponent.params.resistances[state.selectedAbility.damageType];

            const chance = Math.floor(Math.random()*100);

            if (state.selectedAbility.hitChance > chance) {
                thatOpponent.params.currentParams[UserParam.health] -= damage;
            }
            
            dispatch(gameSquad.actions.processAbility({
                index: state.selectedMemberIndex,
                data: state.selectedAbility.costs
            }));

            deselectOpponent();

            const status = [...state.squadStatus];
            status[index].hasTurn = false;
            status[index].selected = false;

            deselectAbility();

            state.opponents = allOpponents;
            state.squadStatus = status;
            setBattlePageState(state);
        }
    }

    function selectSquadMember(memberIndex: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const status = [...state.squadStatus];

            if (status[memberIndex].hasTurn) {
                dispatch(gameSquad.actions.changeSquadMember(memberIndex));

                status.forEach(member => {
                    if (!!member) {
                        member.selected = false;
                    }                
                });
                status[memberIndex].selected = true;

                state.squadStatus = status;
                state.selectedMemberIndex = memberIndex;
                state.abilitiesOnTurn = characterAbilitiesGatherer(squad[memberIndex]);
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
                    squad={battlePageState.opponents}
                    squadStatus={battlePageState.opponentsStatus} 
                    attacker={true} 
                    listener={processAbility}
                />
                <div className={styles.BattlePage_body_abilitiesBlock}>
                    <div className={styles.BattlePage_body_abilitiesBlock_abilities}>
                        {
                            
                            battlePageState.battleTurn % 2 === 1 ? 
                                battlePageState.selectedMemberIndex >= 0 ?
                                    abilitiesOnTurnBlock(squad[battlePageState.selectedMemberIndex]) :
                                    <p>
                                        {chrome.i18n.getMessage('battle_page_your_turn')}
                                    </p> :
                                battlePageState.abilitiesOnTurn ?
                                    abilitiesOnTurnBlock(battlePageState.opponents[battlePageState.selectedOpponentIndex]) :
                                    <p>
                                        {chrome.i18n.getMessage('battle_page_opponents_turn')}
                                    </p> 
                        }
                    </div>
                    <button 
                        className={styles.BattlePage_body_abilitiesBlock_button}
                        onClick={() => deselectAbility()}
                        disabled={!battlePageState.selectedAbility}
                    >
                        {chrome.i18n.getMessage('battle_page_deselect_ability')}
                    </button>
                </div>                
                <BattleOrder
                    squad={squadMembers} 
                    squadStatus={battlePageState.squadStatus} 
                    attacker={false} 
                    listener={selectSquadMember}
                /> 
                <button onClick={nextBattleTurn}>
                    {chrome.i18n.getMessage('battle_page_next_turn')}
                </button>
            </div>
            <button onClick={() => navigate('/game')}>
                {chrome.i18n.getMessage('battle_page_back_to_village')}
            </button>
            <button onClick={() => deselectSquadMember()}>
                {chrome.i18n.getMessage('battle_page_deselect_member')}
            </button>
        </div>
    )
}

export default BattlePage
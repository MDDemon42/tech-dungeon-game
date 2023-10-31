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

function BattlePage() {
    const [battleTurn, setBattleTurn] = useState(0);

    const [selectedMember, setSelectedMember] = useState(-1);
    const [selectedOpponent, setSelectedOpponent] = useState(-1);
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
        } else if (battleTurn % 2 === 1) {
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

            opponentTurnHandler();
        }
    }, [battleTurn])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const opponentTurnHandler = () => {
        const status = [...opponentsStatus];

        const indexes = status.map((_, index) => index);

        shuffleArray(indexes);

        indexes.forEach((index, orderIndex)=> {
            setTimeout(() => {
                status[index].selected = true;
                setOpponentsStatus(status);

                setSelectedOpponent(index);
            }, (orderIndex) * 2000 + 500)

            setTimeout(() => {
                // use ability
            }, (orderIndex) * 2000 + 1000)
            
            setTimeout(() => {
                status[index].hasTurn = false;
                status[index].selected = false;
                setOpponentsStatus(status);

                setSelectedOpponent(-1);
            }, (orderIndex) * 2000 + 1500)
        })

        setTimeout(() => {
            setBattleTurn(turn => turn + 1)
        }, status.length*2000)
    }

    const user = squad[index];
    const abilitiesUser = characterAbilitiesGatherer(user);    

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
            abilityDiv.style.cssText = 'outline: 3px lightgray dashed; outline-offset: 3px;';

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

    function selectOpponent(opponentIndex: number) {
        let opp_status = [...opponentsStatus];
        opp_status.forEach(opponent => opponent.selected = false);
        opp_status[opponentIndex].selected = true;
        setOpponentsStatus(opp_status);

        setSelectedOpponent(opponentIndex);
    }

    function deselectOpponent() {
        let opp_status = [...opponentsStatus];
        opp_status.forEach(opponent => opponent.selected = false);
        setOpponentsStatus(opp_status);

        setSelectedOpponent(-1);
    }

    function processAbility(opponentIndex: number) {
        selectOpponent(opponentIndex);

        if (selectedAbility && selectedMember > 0) {
            const allOpponents = [...opponents];
            const thatOpponent = allOpponents[opponentIndex];
            
            const damage = selectedAbility.damage - thatOpponent.params.resistances[selectedAbility.damageType];
            const chance = Math.floor(Math.random()*100);
            if (selectedAbility.hitChance > chance) {
                thatOpponent.params.currentParams[UserParam.health] -= damage;
            }        
            
            setOpponents(allOpponents);
            
            dispatch(gameSquad.actions.processAbility({
                index: selectedMember,
                data: selectedAbility.costs
            }));

            deselectOpponent();

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

            setSelectedMember(memberIndex);
        }
    }

    function deselectSquadMember() {
        let status = [...squadStatus];
        status.forEach(member => {
            if (!!member) {
                member.selected = false;
            }                
        });
        setSquadStatus(status);

        setSelectedMember(-1);
    }

    return (
        <div className={styles.BattlePage}>
            <h3 className={styles.BattlePage_header}>
                {chrome.i18n.getMessage('battle_page_title')}
            </h3>            
            <div style={{position: 'absolute', right: '10px', top: '20px'}}>
                {chrome.i18n.getMessage('battle_page_turn', String(battleTurn))}
            </div>
            <div className={styles.BattlePage_body}>
                <BattleOrder 
                    squad={opponents}
                    squadStatus={opponentsStatus} 
                    attacker={true} 
                    listener={processAbility}
                />
                <div className={styles.BattlePage_body_abilitiesBlock}>
                    <div className={styles.BattlePage_body_abilitiesBlock_abilities}>
                        {
                            (selectedMember >= 0 && battleTurn % 2 === 1) ?
                                abilitiesUser && abilitiesUser.map(ability => {
                                    const id = ability.name.split(' ').join('');

                                    if (!!ability) {
                                        return <div 
                                            className={styles.BattlePage_body_abilitiesBlock_abilities_icon}
                                            id={id}
                                            onClick={() => selectAbility(ability, id)}
                                        >
                                            <CommonIcon item={ability}/>
                                        </div>
                                    }

                                    return null
                                }) :
                                battleTurn % 2 === 1 ? 
                                    <p>
                                        {chrome.i18n.getMessage('battle_page_your_turn')}
                                    </p> :
                                    <p>
                                        {chrome.i18n.getMessage('battle_page_opponents_turn')}
                                    </p> 
                        }
                    </div>
                    <button 
                        className={styles.BattlePage_body_abilitiesBlock_button}
                        onClick={() => deselectAbility()}
                        disabled={!selectedAbility}
                    >
                        {chrome.i18n.getMessage('battle_page_deselect_ability')}
                    </button>
                </div>                
                <BattleOrder
                    squad={squadMembers} 
                    squadStatus={squadStatus} 
                    attacker={false} 
                    listener={selectSquadMember}
                /> 
                <button onClick={() => setBattleTurn((value) => value + 1)}>
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
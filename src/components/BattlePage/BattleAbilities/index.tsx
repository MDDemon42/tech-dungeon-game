import { ArrowCounterclockwise, ArrowReturnLeft, CheckCircle, LayerBackward, SkipForward } from 'react-bootstrap-icons';
import { IBattleAbility, IBattlePageState, ICharacter, ISupportAbility } from '../../../enums-and-interfaces/interfaces';
import styles from './index.module.css';
import { AbilityTarget, BattleResult } from '../../../enums-and-interfaces/enums';
import AbilityIcon from '../../Icons/AbilityIcon';

const BattleAbilities = (props: {
    battlePageState: IBattlePageState,
    battleActions: {
        selectAbility: (ability: IBattleAbility | ISupportAbility | null, character: ICharacter) => void;
        deselectSquadMember: () => void;
        deselectAbility: () => void;
        deselectTarget: (opponentIndex?: number) => void;
        processAbilityOntoOpponent: () => void;
        processAbilityOntoAlly: () => void;
        checkEndOfTurn: () => void;
        nextBattleTurn: () => void;
    },
    ally: ICharacter,
    foe: ICharacter
}) => {
    const {battlePageState, battleActions, ally, foe} = props;

    const abilitiesBlockInstructionStyle = 
        (condition: boolean): React.CSSProperties => 
    {
        if (battlePageState.turn % 2 === 0) {
            return {}
        }

        return {fontWeight: condition ? 'bold' : '400'}
    }

    function getIdOfTheAbility(ability: IBattleAbility | ISupportAbility) {
        return ability.name.split(' ').join('').replace('(', '').replace(')', '');
    }

    function abilitiesOnTurnBlock(character: ICharacter) {
            const state = {...battlePageState};
            return (
                state.abilitiesOnTurn && state.abilitiesOnTurn.map(ability => {
                    const id = getIdOfTheAbility(ability);
    
                    if (!!ability) {
                        return <div 
                            className={styles.BattleAbilities_abilitiesIcon}
                            id={id}
                            onClick={() => battleActions.selectAbility(ability, character)}
                        >
                            <AbilityIcon item={ability}/>
                        </div>
                    }
    
                    return null
                })
            )
        }

    return (
        <div className={styles.BattleAbilities}>
            <button 
                className={styles.BattleAbilities_deselectSquadMember}
                onClick={battleActions.deselectSquadMember}
                disabled={battlePageState.memberIndex < 0}
                title={chrome.i18n.getMessage('battle_page_deselect_member')}
            >
                <LayerBackward size={30}/>                        
            </button>
            <button 
                className={styles.BattleAbilities_deselectAbility}
                onClick={battleActions.deselectAbility}
                disabled={
                    !battlePageState.selectedAbility ||
                    battlePageState.turn % 2 === 0
                }
                title={chrome.i18n.getMessage('battle_page_deselect_ability')}
            >
                <ArrowCounterclockwise size={30}/>                        
            </button>
            <button 
                className={styles.BattleAbilities_deselectOpponent}
                onClick={() => battleActions.deselectTarget()}
                disabled={battlePageState.opponentIndex < 0}
                title={chrome.i18n.getMessage('battle_page_deselect_opponent')}
            >
                <ArrowReturnLeft size={30}/>                        
            </button>
            <div className={styles.BattleAbilities_list}>
                {
                    battlePageState.result === BattleResult.none ?
                    (
                        battlePageState.turn % 2 === 1 ? 
                            battlePageState.memberIndex >= 0 ?
                                abilitiesOnTurnBlock(ally) :
                                <p>
                                    {chrome.i18n.getMessage('battle_page_your_turn')}
                                </p> :
                            battlePageState.abilitiesOnTurn ?
                                abilitiesOnTurnBlock(foe) :
                                <p>
                                    {chrome.i18n.getMessage('battle_page_opponents_turn')}
                                </p> 
                    ) :
                    'Battle is ' + battlePageState.result
                }
            </div> 
            <div className={styles.BattleAbilities_instruction}>
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
                className={styles.BattleAbilities_processButton}
                onClick={() => {
                    if (battlePageState.selectedAbility) {
                        if (battlePageState.selectedAbility.target === AbilityTarget.enemy) {
                            battleActions.processAbilityOntoOpponent();
                        }
                        if (battlePageState.selectedAbility.target === AbilityTarget.ally) {
                            battleActions.processAbilityOntoAlly();
                        }
                    }
                    battleActions.checkEndOfTurn();
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
                className={styles.BattleAbilities_nextTurnButton}
                onClick={battleActions.nextBattleTurn}
                title={chrome.i18n.getMessage('battle_page_next_turn')}
            >
                <SkipForward size={30}/>                        
            </button>                    
        </div>  
    )
}

export default BattleAbilities
// WwSsXx

import { useSelector } from 'react-redux';
import styles from './BattlePage.module.css';
import { 
    IAbility, 
    IBattleAbility, 
    IBattlePageState, 
    ICharacter, 
    IItem, 
    IMemberStatus, 
    IStore,
    ISupportAbility
} from '../../enums-and-interfaces/interfaces';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import BattleOrder from '../../components/BattlePage/BattleOrder';
import { useNavigate } from 'react-router-dom';
import opponents from '../../redux/slices/opponents';
import BattleTurnButtons from '../../components/BattlePage/BattleTurnButtons';
import { 
    AbilityTarget, 
    BattleResult, 
    CommonGameScreens,
    InventoryPlace, 
    UserParam,
} from '../../enums-and-interfaces/enums';
import gameStage from '../../redux/slices/gameStage';
import BattleLog from '../../components/BattlePage/BattleLog';
import BattleResultScreen from '../../components/BattlePage/BattleResultScreen';
import BattleAbilities from '../../components/BattlePage/BattleAbilities';
import selectAbility from '../../helpers/battleActions/selectAbility';
import deselectSquadMember from '../../helpers/battleActions/deselectSquadMember';
import deselectAbility from '../../helpers/battleActions/deselectAbility';
import deselectTarget from '../../helpers/battleActions/deselectTarget';
import processAbilityOntoOpponent from '../../helpers/battleActions/processAbilityOntoOpponent';
import processAbilityOntoAlly from '../../helpers/battleActions/processAbilityOntoAlly';
import checkEndOfTurn from '../../helpers/battleActions/checkEndOfTurn';
import nextBattleTurn from '../../helpers/battleActions/nextBattleTurn';
import collectTropheys from '../../helpers/battleActions/collectTropheys';
import selectSquadMember from '../../helpers/battleActions/selectSquadMember';
import selectTarget from '../../helpers/battleActions/selectTarget';
import selectOpponent from '../../helpers/battleActions/selectOpponent';
import checkDead from '../../helpers/battleActions/checkDead';
import setBattlePageStatuses from '../../helpers/battleActions/setBattlePageStatuses';
import checkAllyProtection from '../../helpers/battleActions/checkAllyProtection';
import checkOpponentProtection from '../../helpers/battleActions/checkOpponentProtection';
import giveTurns from '../../helpers/battleActions/giveTurns';
import opponentTurnHandler from '../../helpers/battleActions/opponentTurnHandler';

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

    const squadMembers = useMemo(() => {
        const result: ICharacter[] = [];
        Object.keys(squad).forEach(key => result[Number(key)] = squad[key]);

        return result;
    }, [squad]);
    

    const oppsMembers = useMemo(() => {
        const result: ICharacter[] = [];
        Object.keys(opps).forEach(key => result[Number(key)] = opps[key]);

        return result
    }, [opps]);    

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const dispatchActions = useMemo(() => {
        return {
            dispOpSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => 
                dispatch(opponents.actions.sufferAbility({
                    indexes: _i,
                    ability: _a
                })),
            dispSqSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => 
                dispatch(gameSquad.actions.sufferAbility({
                    indexes: _i,
                    ability: _a
                })),
            dispOpPro: (_i: number, _d: Partial<Record<UserParam, number>>) => 
                dispatch(opponents.actions.processAbility({
                    index: _i,
                    data: _d
                })),
            dispSqPro: (_i: number, _d: Partial<Record<UserParam, number>>) => 
                dispatch(gameSquad.actions.processAbility({
                    index: _i,
                    data: _d
                })),
            dispSqThr: (_i: number, _it: IItem, _pl: InventoryPlace, _f: boolean, _bi: number) => 
                dispatch(gameSquad.actions.throwItem({
                    index: _i,
                    item: _it,
                    inventoryPlace: _pl,
                    fromBackpacks: _f,
                    backpacksIndex: _bi
                })),
            dispOpThr: (_i: number, _it: IItem, _pl: InventoryPlace, _f: boolean, _bi: number) =>
                dispatch(opponents.actions.throwItem({
                    index: _i,
                    item: _it,
                    inventoryPlace: _pl,
                    fromBackpacks: _f,
                    backpacksIndex: _bi
                })),
            dispSqCh: (_i: number) => dispatch(gameSquad.actions.changeSquadMember(_i)),
    }}, [dispatch]);

    const operationList = useMemo(() => {
        return {
            battlePageState,
            setBattlePageState,
            oppsMembers,
            squad,
            squadMembers,
            dispatchActions
    }}, [battlePageState, dispatchActions, oppsMembers, squad, squadMembers]);

    useEffect(() => {        
        if (battlePageState.turn === 0) {
            setBattlePageStatuses(
                setBattlePageState,
                squadMembers,
                oppsMembers
            );
            
            dispatch(gameStage.actions.changeStage({
                zone: CommonGameScreens.villageMap,
                stage: 0
            }))
        } else if (battlePageState.turn % 2 === 1) {
            checkDead(
                setBattlePageState,
                squadMembers,
                oppsMembers
            );

            checkAllyProtection(
                setBattlePageState,
                dispatchActions,
                squadMembers
            );

            giveTurns(setBattlePageState);

            if ((battlePageState.turn + 1) % 4 === 0) {
                dispatch(gameSquad.actions.respite({}));

                dispatch(opponents.actions.respite({}));
            }
        } else {
            checkDead(
                setBattlePageState,
                squadMembers,
                oppsMembers
            );

            checkOpponentProtection(
                setBattlePageState,
                dispatchActions,
                oppsMembers
            );

            giveTurns(setBattlePageState);

            opponentTurnHandler(operationList);
        }
    }, [battlePageState.turn]) // do not put state or setState here => infinite rerenders

    const navigateHomeHandler = () => {
        navigate('/game');
    }

    const battleTurnButtonsListeners = {
        navigateHome: navigateHomeHandler,
    }

    const battleActions = {
        selectAbility: (_a: IBattleAbility | ISupportAbility | null, _c: ICharacter) => 
            selectAbility(_a, _c, setBattlePageState),
        deselectSquadMember: () => deselectSquadMember(setBattlePageState),
        deselectAbility: () => deselectAbility(setBattlePageState),
        deselectTarget: (_o?: number) => deselectTarget(setBattlePageState, _o),
        processAbilityOntoOpponent: () => processAbilityOntoOpponent(
            setBattlePageState, 
            squadMembers, 
            oppsMembers, 
            dispatchActions, 
            opps[battlePageState.opponentIndex].general.inventory
        ),
        processAbilityOntoAlly: () => processAbilityOntoAlly(
            setBattlePageState,
            dispatchActions,
            squadMembers[battlePageState.memberIndex].params.name,
            squadMembers[battlePageState.allyIndex].params.name
        ),
        checkEndOfTurn: () => checkEndOfTurn(setBattlePageState),
        nextBattleTurn: () => nextBattleTurn(setBattlePageState)
    }

    return (
        <div className={styles.BattlePageContainer}>
            <div className={styles.BattlePage}>
                <BattleResultScreen 
                    battleResult={battlePageState.result}
                    tropheys={collectTropheys(oppsMembers)}
                />
                <div className={styles.BattlePage_body}>
                    <BattleOrder 
                        squad={oppsMembers}
                        squadStatus={battlePageState.opponentsStatus} 
                        listener={(opp_index: number) => selectOpponent(
                            setBattlePageState,
                            opp_index, 
                            false,
                            opps[opp_index]
                        )}
                    />
                    <BattleAbilities 
                        battlePageState={battlePageState}
                        battleActions={battleActions}
                        ally={squad[battlePageState.memberIndex]}
                        foe={opps[battlePageState.opponentIndex]}
                    />              
                    <BattleOrder
                        squad={squadMembers} 
                        squadStatus={battlePageState.squadStatus} 
                        listener={(memb_index: number) => {
                            if (
                                battlePageState.selectedAbility &&
                                battlePageState.selectedAbility.target === AbilityTarget.ally
                            ) {
                                selectTarget(
                                    setBattlePageState,
                                    memb_index
                                );
                            } else {
                                selectSquadMember(
                                    setBattlePageState,
                                    dispatchActions,
                                    memb_index, 
                                    squad[memb_index],
                                    false
                                );
                            }                            
                        }}
                    /> 
                </div>
                <BattleTurnButtons 
                    listeners={battleTurnButtonsListeners}
                />
            </div>
            <BattleLog battlePageState={battlePageState}/>
        </div>
        
    )
}

export default BattlePage
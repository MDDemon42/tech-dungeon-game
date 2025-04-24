import { useSelector } from 'react-redux';
import styles from './BattlePage.module.css';
import { 
    IAbility, 
    IBattleAbility, 
    IBattlePageState,
    ICharacher, 
    IItem, 
    IMemberStatus, 
    IStore,
    ISupportAbility
} from '../../enums-and-interfaces/interfaces';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { 
    AbilityTarget, 
    BattleResult, 
    CommonGameScreens, 
    InventoryGameScreens, 
    InventoryPlace, 
    InventorySlotCategory, 
    Race, 
    TaskStatus 
} from '../../enums-and-interfaces/enums';
import gameStage from '../../redux/slices/gameStage';
import createEmptyCharacter, { createNoItem } from '../../helpers/emptyEssencesCreators';
import abilities from '../../general/abilities';
import gameScreen from '../../redux/slices/gameScreen';
import { raceNames } from '../../general/races/races';
import items from '../../gameScreens/Market/items';
import supportAbilities from '../../general/abilities/supportAbilities';
import rituals from '../../general/rituals';
import AbilityIcon from '../../components/Icons/AbilityIcon';
import character from '../../redux/slices/character';

function BattlePage() {
    const [battlePageState, setBattlePageState] = useState<IBattlePageState>({
        turn: 0,
        opponentIndex: -1,
        selectedAbility: null as IAbility | null,
        selectedAbilityDiv: null as HTMLElement | null,
        charStatus: {} as IMemberStatus,
        opponentsStatus: [] as IMemberStatus[],
        abilitiesOnTurn: [] as IAbility[],
        result: BattleResult.none,
        log: [chrome.i18n.getMessage('battle_log_battle_started')] as string[],
    });

    const char = useSelector((store: IStore) => store.character);

    const opps = useSelector((store: IStore) => store.opponents.opponentMembers);

    const oppsMembers: ICharacher[] = [];
    Object.keys(opps).forEach(key => oppsMembers[Number(key)] = opps[key]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {        
        if (battlePageState.turn === 0) {
            setBattlePageStatuses();
            
            dispatch(gameStage.actions.changeStage({
                zone: CommonGameScreens.villageMap,
                stage: 0
            }))
        } else if (battlePageState.turn % 2 === 1) {
            checkDead();

            checkAllyProtection();

            giveTurns();

            if ((battlePageState.turn + 1) % 4 === 0) {
                dispatch(character.actions.respite({}));

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
            const opponentsStatusBasis = [...state.opponentsStatus];
            const memberStatusBasis: IMemberStatus = {
                selected: false,
                hasTurn: false,
                dead: false,
                defensiveCharms: false,
                flameShield: false
            };


            const charStatusBasis = {...memberStatusBasis};
            if (
                char.params.race === 
                rituals.fireRituals.fireElemental.newRaceName
            ) {
                charStatusBasis.flameShield = true;
            }

            state.charStatus = charStatusBasis;

            oppsMembers.forEach((member, index) => {
                if (!!member) {
                    opponentsStatusBasis[index] = {...memberStatusBasis};
                    if (
                        oppsMembers[index].params.race === 
                        rituals.fireRituals.fireElemental.newRaceName
                    ) {
                        opponentsStatusBasis[index].flameShield = true;
                    }
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

            setTimeout(() => {
                selectSquadMember();
            }, (orderIndex) * 4000 + 1500)

            setTimeout(() => {
                processAbilityOntoChar();
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
            const { charStatus } = {...state};
            const opponentsStatusBasis = [...state.opponentsStatus];

            if (char.params.currentParams.Health <= 0) {
                state.log.push(
                    chrome.i18n.getMessage(
                        'battle_log_someone_dies', 
                        [char.params.name]
                    )
                );
                
                setBattlePageState((prevState) => {
                    const state = {...prevState};
    
                    state.result = BattleResult.lose;
    
                    return state
                })
            }

            state.charStatus = charStatus;

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
            const { charStatus } = {...state};
            if (!charStatus.dead) {
                if (charStatus.defensiveCharms) {
                    charStatus.defensiveCharms = false;

                    dispatch(character.actions.sufferAbility({
                        ability: supportAbilities.armor.reverseDefensiveCharms
                    }));
                }

                if (
                    charStatus.flameShield && 
                    char.params.race !== rituals.fireRituals.fireElemental.newRaceName
                ) {
                    charStatus.flameShield = false;

                    dispatch(character.actions.sufferAbility({
                        ability: supportAbilities.armor.reverseFlameShield
                    }));
                }
            }

            state.charStatus = charStatus;

            return state
        })
    }

    function checkOpponentProtection() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const opponentsStatusBasis = [...state.opponentsStatus];
            opponentsStatusBasis.forEach((member, index) => {
                if (!!member) {
                    if (!member.dead) {
                        if (member.defensiveCharms) {
                            member.defensiveCharms = false;

                            dispatch(opponents.actions.sufferAbility({
                                indexes: [index],
                                ability: supportAbilities.armor.reverseDefensiveCharms
                            }));
                        }

                        if (
                            member.flameShield && 
                            oppsMembers[index].params.race !== rituals.fireRituals.fireElemental.newRaceName
                        ) {
                            member.flameShield = false;

                            dispatch(opponents.actions.sufferAbility({
                                indexes: [index],
                                ability: supportAbilities.armor.reverseFlameShield
                            }));
                        }
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
            const { charStatus } = {...state};
            const opponentsStatusBasis = [...state.opponentsStatus];

            if (state.turn % 2 === 1) {
                if (!charStatus.dead) {
                    charStatus.hasTurn = true;
                }
                state.charStatus = charStatus;

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
    
                if (!!charStatus) {
                    charStatus.hasTurn = false;
                }
                state.charStatus = charStatus;
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

    function deselectTarget(opponentIndex?: number) {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const { opponentsStatus } = {...state};
            const { charStatus } = {...state};

            opponentsStatus.forEach(opponent => opponent.selected = false);
            if (opponentIndex) {
                opponentsStatus[opponentIndex].hasTurn = false;
            }

            charStatus.selected = false;
    
            state.opponentsStatus = opponentsStatus;
            state.charStatus = charStatus;
            state.opponentIndex = -1;

            return state
        });      
    }

    function processAbilityOntoChar() {
        setBattlePageState((prevState) => {
            const state = {...prevState};

            const {selectedAbility} = state;
            if (selectedAbility) {
                const {hitChance} = selectedAbility;

                const chance = Math.floor(Math.random()*100);
                const success = hitChance - char.params.dodge > chance;
                const result = success ?
                    chrome.i18n.getMessage('battle_log_success_result'):
                    chrome.i18n.getMessage('battle_log_failure_result');
                state.log.push(
                    chrome.i18n.getMessage(
                        'battle_log_someone_uses_ability_and_result',
                        [
                            oppsMembers[state.opponentIndex].params.name,
                            selectedAbility.name,
                            char.params.name,
                            result,
                            String(hitChance - char.params.dodge),
                            String(chance)
                        ]
                    )
                );

                dispatch(character.actions.sufferAbility({
                    ability: selectedAbility
                }));

                if (!(selectedAbility as IBattleAbility).ranged) {
                    const { charStatus } = state;
                    if (charStatus.flameShield) {
                        dispatch(opponents.actions.sufferAbility({
                            indexes: [state.opponentIndex],
                            ability: abilities.battleAbilities.ranged.fire.flame
                        })); 
                        state.log.push(
                            chrome.i18n.getMessage(
                                'battle_log_someone_uses_ability_and_result',
                                [
                                    char.params.name,
                                    supportAbilities.armor.flameShield.name,
                                    oppsMembers[state.opponentIndex].params.name,
                                    chrome.i18n.getMessage('battle_log_success_result'),
                                    String(100),
                                    String(100)
                                ]
                            )
                        );
                    }
                }                

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
                        inventoryPlace: abilityItemInventoryPlace,
                        fromBackpacks: false,
                        backpacksIndex: 0
                    }))
                }
            }            

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
                                char.params.name,
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

                if (!(selectedAbility as IBattleAbility).ranged) {
                    const {opponentsStatus} = state;
                    sufferIndexes.forEach(index => {
                        if (opponentsStatus[index].flameShield) {
                            dispatch(character.actions.sufferAbility({
                                ability: abilities.battleAbilities.ranged.fire.flame
                            })); 
                            state.log.push(
                                chrome.i18n.getMessage(
                                    'battle_log_someone_uses_ability_and_result',
                                    [
                                        oppsMembers[index].params.name,
                                        supportAbilities.armor.flameShield.name,
                                        char.params.name,
                                        chrome.i18n.getMessage('battle_log_success_result'),
                                        String(100),
                                        String(100)
                                    ]
                                )
                            );
                        }
                    })
                } 
                
                dispatch(character.actions.processAbility({
                    data: selectedAbility.costs
                }));

                if ((selectedAbility as IBattleAbility).throwing) {
                    const charInventory = char.general.inventory;
                    const [abilityItem, abilityItemInventoryPlace] = Object.keys(charInventory).map(key => {
                        const inventoryPlace = key as InventoryPlace;
                        const inventorySlot = charInventory[inventoryPlace] as IItem;
    
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
                    
                    dispatch(character.actions.throwItem({
                        item: abilityItem,
                        inventoryPlace: abilityItemInventoryPlace,
                        fromBackpacks: false,
                        backpacksIndex: 0
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
                        inventoryPlace,
                        fromBackpacks: false,
                        backpacksIndex: 0
                    }))
                }
            }

            state.opponentIndex = -1;
            state.opponentsStatus.forEach((member) => {
                member.selected = false;
            })
            state.charStatus.hasTurn = false;
            state.charStatus.selected = false;       
            state.selectedAbility = null;
            state.selectedAbilityDiv = null;

            return state
        })
    }

    function collectSufferIndexes(state: IBattlePageState, targetIndex: number): number[] {
        const indexes = [] as number[];
        
        const stateSelAbil = state.selectedAbility;
        const stateSelAbilTarAmount = (stateSelAbil as IBattleAbility).targetAmount;
        if (stateSelAbilTarAmount > 1) {
            if (oppsMembers[targetIndex - 1]) {
                indexes.push(targetIndex - 1);
            }

            if (oppsMembers[targetIndex + 1]) {
                indexes.push(targetIndex + 1);
            }

            if (stateSelAbilTarAmount === 5) {
                for (const index in oppsMembers) {
                    if (oppsMembers[index] && Number(index) !== targetIndex) {
                        indexes.push(Number(index));
                    }
                }
            }
        } 
            
        indexes.push(targetIndex);            

        return indexes
    }

    function selectSquadMember() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const { charStatus } = state;

            charStatus.selected = true;
            state.charStatus = charStatus;

            return state
        });
    }

    function deselectSquadMember() {
        setBattlePageState((prevState) => {
            const state = {...prevState};
            const { charStatus } = {...state};

            charStatus.selected = false;

            state.charStatus = charStatus;

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

            if (state.charStatus.hasTurn) {
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
                        <AbilityIcon item={ability}/>
                    </div>
                }

                return null
            })
        )
    }

    const setGameOver = () => {
        dispatch(character.actions.setState(createEmptyCharacter()));

        removeGameTabs();
    }

    const navigateHomeHandler = () => {
        navigate('/game');
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
                                listener={() => navigate('/game')}
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
                            disabled={!battlePageState.charStatus.selected}
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
                                        battlePageState.charStatus.selected ?
                                            abilitiesOnTurnBlock(char) :
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
                            <span style={abilitiesBlockInstructionStyle(!battlePageState.charStatus.selected)}>
                                {chrome.i18n.getMessage('battle_page_choose_member')}
                            </span>
                            <span style={abilitiesBlockInstructionStyle(!battlePageState.selectedAbility)}>
                                {chrome.i18n.getMessage('battle_page_choose_ability')}
                            </span>
                            <span style={abilitiesBlockInstructionStyle(
                                !!battlePageState.selectedAbility && (
                                    battlePageState.selectedAbility.target === AbilityTarget.enemy && 
                                    battlePageState.opponentIndex < 0 
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
                                }
                                checkEndOfTurn();
                            }}
                            disabled={
                                !battlePageState.charStatus.selected ||
                                !battlePageState.selectedAbility ||
                                (
                                    !!battlePageState.selectedAbility && (
                                        battlePageState.selectedAbility.target === AbilityTarget.enemy && 
                                        battlePageState.opponentIndex < 0
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
                        squad={[char]} 
                        squadStatus={[battlePageState.charStatus]} 
                        listener={selectSquadMember}
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
import { InventoryPlace, InventorySlotCategory, UserParam } from "../../enums-and-interfaces/enums";
import { 
    IBattleAbility, 
    IBattlePageState, 
    ICharacter, 
    IInventory, 
    IItem, 
    ISupportAbility 
} from "../../enums-and-interfaces/interfaces";
import abilities from "../../general/abilities";
import supportAbilities from "../../general/abilities/supportAbilities";
import { createNoItem } from "../emptyEssencesCreators";
import collectSufferIndexes from "./collectSufferIndexes";

export default function processAbilityOntoOpponent(
    changeState: (value: any) => void,
    squadMembers: ICharacter[],
    oppsMembers: ICharacter[],
    dispatchActions: {
        dispOpSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
        dispSqSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
        dispSqPro: (_i: number, _d: Partial<Record<UserParam, number>>) => void,
        dispSqThr: (_i: number, _it: IItem, _pl: InventoryPlace, _f: boolean, _bi: number) => void,
        dispOpThr: (_i: number, _it: IItem, _pl: InventoryPlace, _f: boolean, _bi: number) => void
    },
    certainOpponentInventory: IInventory
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};

        const possibleIndexes = collectSufferIndexes(state, state.opponentIndex, squadMembers, oppsMembers);             

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
                            String(100 - (hitChance - oppsMember.params.dodge)),
                            String(100 - chance)
                        ]
                    )
                );
                return success
            }); 

            dispatchActions.dispOpSuf(sufferIndexes, selectedAbility);

            if (!(selectedAbility as IBattleAbility).ranged) {
                const {opponentsStatus} = state;
                sufferIndexes.forEach(index => {
                    if (opponentsStatus[index].flameShield) {
                        dispatchActions.dispSqSuf(
                            [state.memberIndex], 
                            abilities.battleAbilities.ranged.fire.flame
                        );
                        state.log.push(
                            chrome.i18n.getMessage(
                                'battle_log_someone_uses_ability_and_result',
                                [
                                    oppsMembers[index].params.name,
                                    supportAbilities.armor.flameShield.name,
                                    squadMembers[state.memberIndex].params.name,
                                    chrome.i18n.getMessage('battle_log_success_result'),
                                    String(100),
                                    String(100)
                                ]
                            )
                        );
                    }
                })
            } 
            
            dispatchActions.dispSqPro(state.memberIndex, selectedAbility.costs);

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
                
                dispatchActions.dispSqThr(
                    state.memberIndex,
                    abilityItem,
                    abilityItemInventoryPlace,
                    false,
                    0
                );
            }

            if (selectedAbility.name === abilities.battleAbilities.ranged.physicalSmashing.telekineticDisarm.name) {
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

                dispatchActions.dispOpThr(
                    state.opponentIndex,
                    itemToDispatch,
                    inventoryPlace,
                    false,
                    0
                );
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
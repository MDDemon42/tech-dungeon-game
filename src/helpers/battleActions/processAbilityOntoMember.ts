import { InventoryPlace, InventorySlotCategory, UserParam } from "../../enums-and-interfaces/enums";
import { IBattleAbility, IBattlePageState, ICharacter, IItem, ISupportAbility } from "../../enums-and-interfaces/interfaces";
import abilities from "../../general/abilities";
import supportAbilities from "../../general/abilities/supportAbilities";
import collectSufferIndexes from "./collectSufferIndexes";

export default function processAbilityOntoMember(
    changeState: (value: any) => void,
    dispatchActions: {
        dispOpSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
        dispSqSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
        dispOpPro: (_i: number, _d: Partial<Record<UserParam, number>>) => void,
        dispSqPro: (_i: number, _d: Partial<Record<UserParam, number>>) => void,
        dispOpThr: (_i: number, _it: IItem, _pl: InventoryPlace, _f: boolean, _bi: number) => void
    },
    memberIndex: number,
    squadMembers: ICharacter[],
    oppsMembers: ICharacter[]
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};

        const possibleIndexes = collectSufferIndexes(state, memberIndex, squadMembers, oppsMembers);

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
                            String(100 - (hitChance - squadMember.params.dodge)),
                            String(100 - chance)
                        ]
                    )
                );
                return success
            });                

            dispatchActions.dispSqSuf(sufferIndexes, selectedAbility);

            if (!(selectedAbility as IBattleAbility).ranged) {
                const {squadStatus} = state;
                sufferIndexes.forEach(index => {
                    if (squadStatus[index].flameShield) {
                        dispatchActions.dispOpSuf(
                            [state.opponentIndex], 
                            abilities.battleAbilities.ranged.fire.flame
                        );
                        state.log.push(
                            chrome.i18n.getMessage(
                                'battle_log_someone_uses_ability_and_result',
                                [
                                    squadMembers[index].params.name,
                                    supportAbilities.armor.flameShield.name,
                                    oppsMembers[state.opponentIndex].params.name,
                                    chrome.i18n.getMessage('battle_log_success_result'),
                                    String(100),
                                    String(100)
                                ]
                            )
                        );
                    }
                })
            }                

            dispatchActions.dispOpPro(state.opponentIndex, selectedAbility.costs); 

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

                dispatchActions.dispOpThr(
                    state.opponentIndex,
                    abilityItem,
                    abilityItemInventoryPlace,
                    false,
                    0
                );
            }
        }            

        return state
    })
}
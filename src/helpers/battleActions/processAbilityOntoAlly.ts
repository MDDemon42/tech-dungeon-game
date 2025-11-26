import { UserParam } from "../../enums-and-interfaces/enums";
import { IBattleAbility, IBattlePageState, ISupportAbility } from "../../enums-and-interfaces/interfaces";
import supportAbilities from "../../general/abilities/supportAbilities";

export default function processAbilityOntoAlly(
    changeState: (value: any) => void,
    dispatchActions: {
        dispSqSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
        dispSqPro: (_i: number, _d: Partial<Record<UserParam, number>>) => void,
    },
    memberName: string,
    allyName: string
) {
    changeState((prevState: IBattlePageState) => {
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
                        memberName,
                        selectedAbility.name,
                        allyName,
                        result,
                        String(100 - hitChance),
                        String(100 - chance)
                    ]
                )
            );

            dispatchActions.dispSqSuf([state.allyIndex], selectedAbility);
            
            dispatchActions.dispSqPro(state.memberIndex, selectedAbility.costs);

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
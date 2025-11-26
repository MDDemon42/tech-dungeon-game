import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function deselectAbility(
    changeState: (value: any) => void
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        if (state.selectedAbilityDiv) {
            state.selectedAbilityDiv.style.cssText = '';

            state.selectedAbility = null;
            state.selectedAbilityDiv = null;
        }

        return state
    });
}
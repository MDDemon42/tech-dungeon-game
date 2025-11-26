import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function deselectSquadMember(
    changeState: (value: any) => void
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const status = [...state.squadStatus];

        status.forEach(member => {
            if (!!member) {
                member.selected = false;
            }                
        });

        state.squadStatus = status;
        state.memberIndex = -1;

        state.selectedAbility = null;
        state.selectedAbilityDiv = null;

        return state
    });
}
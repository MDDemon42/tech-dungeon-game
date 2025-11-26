import { IBattlePageState, ICharacter } from "../../enums-and-interfaces/interfaces";
import gatherCharacterAbilities from "../gatherCharacterAbilities";

export default function selectSquadMember(
    changeState: (value: any) => void,
    dispatchActions: {
        dispSqCh: (_i: number) => void
    },
    memberIndex: number, 
    member: ICharacter,
    opponentTurn: boolean
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const status = [...state.squadStatus];

        if (!opponentTurn) {
            if (status[memberIndex].hasTurn) {  
                status.forEach(member => {
                    if (!!member) {
                        member.selected = false;
                    }                
                });
                status[memberIndex].selected = true;

                state.squadStatus = status;
                state.memberIndex = memberIndex;

                dispatchActions.dispSqCh(memberIndex);
                state.abilitiesOnTurn = gatherCharacterAbilities(member);
            }                
        } else {
            status[memberIndex].selected = true;
            state.squadStatus = status;
        }

        return state
    });
}
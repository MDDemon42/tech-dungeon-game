import { IBattlePageState, ICharacter } from "../../enums-and-interfaces/interfaces";
import gatherCharacterAbilities from "../gatherCharacterAbilities";

export default function selectOpponent(
    changeState: (value: any) => void,
    opponentIndex: number, 
    opponentTurn: boolean,
    opp: ICharacter
) {
    changeState((prevState: IBattlePageState) => {
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
            state.abilitiesOnTurn = gatherCharacterAbilities(opp);
        }        

        return state
    });
}
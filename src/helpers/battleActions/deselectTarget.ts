import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function deselectTarget(
    changeState: (value: any) => void,
    opponentIndex: number = -1
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const opp_status = [...state.opponentsStatus];
        const squad_status = [...state.squadStatus];

        opp_status.forEach(opponent => opponent.selected = false);
        if (opponentIndex > 0) {
            opp_status[opponentIndex].hasTurn = false;
        }

        squad_status.forEach((status, index) => {
            if (index !== state.memberIndex) {
                status.selected = false;
            }
        })

        state.opponentsStatus = opp_status;
        state.squadStatus = squad_status;
        state.opponentIndex = -1;
        state.allyIndex = -1;

        return state
    });      
}
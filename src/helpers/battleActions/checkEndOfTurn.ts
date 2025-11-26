import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function checkEndOfTurn(
    changeState: (value: any) => void,
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};

        let turnsLeft = 0;
        state.squadStatus.forEach((member) => {
            if (!!member && member.hasTurn) {
                turnsLeft++;
            }
        }); 
        if (turnsLeft === 0) {
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
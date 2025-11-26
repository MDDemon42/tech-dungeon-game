import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function nextBattleTurn(
    changeState: (value: any) => void,
) {
    changeState((prevState: IBattlePageState) => {
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
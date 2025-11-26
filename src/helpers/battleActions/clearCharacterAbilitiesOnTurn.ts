import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function clearCharacterAbilitiesOnTurn(
    changeState: (value: any) => void,
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};

        state.abilitiesOnTurn = [];

        return state
    })
}
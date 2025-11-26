import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function selectTarget(
    changeState: (value: any) => void,
    index: number
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const squad_status = [...state.squadStatus];
        squad_status[index].selected = true;

        state.squadStatus = squad_status;
        state.allyIndex = index;

        return state
    });
}
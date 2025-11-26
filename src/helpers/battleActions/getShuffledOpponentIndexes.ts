import { IBattlePageState } from "../../enums-and-interfaces/interfaces";
import shuffleArray from "../shuffleArray";

export default async function getShuffledOpponentIndexes(
    changeState: (value: any) => void,
) {
    let indexes: number[] = [];
    await new Promise((resolve) => {
        changeState((prevState: IBattlePageState) => {
            const state = {...prevState};
            const status = [...state.opponentsStatus];
            indexes = status.map((_, index) => index);
            indexes = indexes.filter(index => status[index].hasTurn && !status[index].dead);
            
            return state
        })

        setTimeout(() => {
            resolve(0)
        }, 0)            
    })         

    shuffleArray(indexes);

    return indexes
}
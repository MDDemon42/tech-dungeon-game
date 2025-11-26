import { IBattleAbility, IBattlePageState, ICharacter } from "../../enums-and-interfaces/interfaces";

export default function collectSufferIndexes(
    state: IBattlePageState, 
    targetIndex: number,
    squadMembers: ICharacter[],
    oppsMembers: ICharacter[]
): number[] {
    const indexes = [] as number[];
    const processingSquad = state.turn % 2 === 1 ? squadMembers : oppsMembers;
    
    const stateSelAbil = state.selectedAbility;
    const stateSelAbilTarAmount = (stateSelAbil as IBattleAbility).targetAmount;
    if (stateSelAbilTarAmount > 1) {
        if (processingSquad[targetIndex - 1]) {
            indexes.push(targetIndex - 1);
        }

        if (processingSquad[targetIndex + 1]) {
            indexes.push(targetIndex + 1);
        }

        if (stateSelAbilTarAmount === 5) {
            for (const index in processingSquad) {
                if (processingSquad[index] && Number(index) !== targetIndex) {
                    indexes.push(Number(index));
                }
            }
        }
    } 
        
    indexes.push(targetIndex);            

    return indexes
}
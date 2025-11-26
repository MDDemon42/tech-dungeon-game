import { IBattlePageState, ICharacter } from "../../enums-and-interfaces/interfaces";

export default function chooseSquadMemberIndex(
    state: IBattlePageState,
    squadMembers: ICharacter[]
) {
    const squadStatus = [...state.squadStatus];

    const memberIndexes = squadMembers.map((member, index) => {
        if (member && !squadStatus[index].dead) {
            return index
        }
        return undefined
    }).filter(index => Number(index) > -1 );

    const memberIndex = memberIndexes[Math.floor(Math.random() * memberIndexes.length)] as number ?? -1;

    return memberIndex
}
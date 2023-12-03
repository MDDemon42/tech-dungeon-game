import { IBattleAbility, IBending } from "../../enums-and-interfaces/interfaces";
import pyrokinesis from "./pyrokinesis";
import cryomancy from "./cryomancy";
import aerotheurgy from "./aerotheurgy";

export function createBending(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        requiredBending: string,
        requiresBothHands: boolean,
        ability: IBattleAbility | null
    ]
): IBending {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        requiredBending: abilityInfo[1],
        requiresBothHands: abilityInfo[2],
        ability: abilityInfo[3]
    }
}

const bending = {
    aerotheurgy,
    cryomancy,
    pyrokinesis
}

export default bending
import { IBattleAbility, IBending, ISupportAbility } from "../../enums-and-interfaces/interfaces";
import { aerotheurgy } from "../../gameScreens/AirSite/bendings";
import { cryomancy } from "../../gameScreens/IceSite/bendings";
import { pyrokinesis } from "../../gameScreens/FireSite/bendings";

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
        ability: IBattleAbility | ISupportAbility
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
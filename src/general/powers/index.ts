import { IBattleAbility, IPassiveAbility, IPower } from "../../enums-and-interfaces/interfaces";
import armors from "./armors";
import other from "./other";
import weapons from "./weapons";

export function createPower(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        ability: IBattleAbility | null,
        passiveAbility: IPassiveAbility | null
    ],
    requiredPower: string
): IPower {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        ability: abilityInfo[1],
        passiveAbility: abilityInfo[2],

        requiredPower        
    }
}

const powers = {
    armors,
    other,
    weapons
};

export default powers
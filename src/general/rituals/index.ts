import { IPassiveAbility, IRitual } from "../../enums-and-interfaces/interfaces";
import guildRituals from "../../gameScreens/Guild/rituals";

export function createRitual(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    ritualInfo: [
        healthCost: number,
        requiredMastery: string,
        passiveAbilities: IPassiveAbility[]
    ]
): IRitual {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        healthCost: ritualInfo[0],
        requiredMastery: ritualInfo[1],
        passiveAbilities: ritualInfo[2]
    }
}

const rituals = {
    guildRituals
}

export default rituals
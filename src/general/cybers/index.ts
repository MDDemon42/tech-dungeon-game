import { ICyber, IPassiveAbility, IBattleAbility } from "../../enums-and-interfaces/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";
import { InventoryPlace } from "../../enums-and-interfaces/enums";

export function createCyber(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    inventoryInfo: [
        cost: number,
        inventoryPlace: InventoryPlace,
        priority: number
    ],
    abilityInfo: [
        ability: IBattleAbility | null,
        passiveAbility: IPassiveAbility | null
    ],
    requiredCyber: string    
): ICyber {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        ability: abilityInfo[0],
        passiveAbility: abilityInfo[1],

        requiredCyber        
    }
}

const cybers = {
    armors,
    other,
    weapons
}

export default cybers
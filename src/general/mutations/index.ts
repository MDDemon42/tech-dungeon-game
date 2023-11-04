import { IAbility, IMutation } from "../../enums-and-interfaces/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";
import { InventoryPlace } from "../../enums-and-interfaces/enums";

export function createMutation(
    commonInfo: [
        name: string,
        description: string,
        image: string,
    ],
    inventoryInfo: [
        cost: number,
        inventoryPlace: InventoryPlace,
        priority: number
    ],
    abilityInfo: [
        ability: IAbility | null,
        linkedMastery: string,
        masterAbilities: IAbility[] | null
    ]
): IMutation {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        ability: abilityInfo[0],
        linkedMastery: abilityInfo[1],
        masterAbilities: abilityInfo[2]
    }
}

const mutations = {
    armors,
    weapons,
    other
}

export default mutations
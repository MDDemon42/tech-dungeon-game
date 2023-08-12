import { IAbility, IItem, IMastery } from "../../enums-and-interfaces/interfaces";
import weapons from "./weapons";
import armors from "./armors";
import other from "./other";
import { InventoryPlace } from "../../enums-and-interfaces/enums";

export function createItem(
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
        requiredMastery: string,
        ability: IAbility | null,
        linkedMastery: string,
        masterAbilities: IAbility[] | null
    ]
): IItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        requiredMastery: abilityInfo[0],
        ability: abilityInfo[1],
        linkedMastery: abilityInfo[2],
        masterAbilities: abilityInfo[3]       
    }
}

const items = {
    weapons,
    armors,
    other
}

export default items
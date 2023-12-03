import { 
    IAbility, IBattleAbility, 
    IItem, IPassiveAbility 
} from "../../enums-and-interfaces/interfaces";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import weapons from "./weapons";
import armors from "./armors";
import other from "./other";
import bigResources from "./bigResources";

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
        ability: IBattleAbility | null,
        linkedMastery: string,
        masterAbilities: IAbility[] | null,
        passiveAbility: IPassiveAbility | null
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
        masterAbilities: abilityInfo[3],
        passiveAbility: abilityInfo[4]
    }
}

const items = {
    armors,
    other,
    weapons,
    bigResources
}

export default items
import { IAbility, IItem, IMastery } from "../../types/interfaces";
import { InventoryPlaces } from "../../types/interfaces";
import weapons from "./weapons";
import armors from "./armors";
import other from "./other";

export function createItem(
    name: string,
    description: string,
    image: string,
    cost: number,
    inventoryPlace: InventoryPlaces,
    requiredMastery: IMastery | null,
    ability: IAbility | null,
    linkedMastery: IMastery | null,
    masterAbilities: IAbility[] | null,
    priority: number
): IItem {
    return {
        name,
        description,
        image,
        cost,
        inventoryPlace,
        requiredMastery,
        ability,
        linkedMastery,
        masterAbilities,
        priority
    }
}

const items = {
    weapons,
    armors,
    other
}

export default items
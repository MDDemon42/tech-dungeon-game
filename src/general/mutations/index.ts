import { IMutation, InventoryPlaces } from "../../types/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";

export function createMutation(
    name: string,
    description: string,
    cost: number,
    inventoryPlace: InventoryPlaces,
    image: string,
    priority: number
): IMutation {
    return {
        name,
        description,
        cost,
        inventoryPlace,
        image,
        priority,
        linkedMastery: null,
        masterAbilities: null
    }
}

const mutations = {
    armors,
    weapons,
    other
}

export default mutations
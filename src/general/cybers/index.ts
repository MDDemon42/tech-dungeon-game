import { InventoryPlaces, ICyber } from "../../types/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";

export function createCyber(
    name: string,
    description: string,
    cost: number,
    inventoryPlace: InventoryPlaces,
    image: string,
    priority: number
): ICyber {
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

const cybers = {
    armors,
    other,
    weapons
}

export default cybers
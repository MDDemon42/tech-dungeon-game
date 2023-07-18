import { IAbility, IItem, IMastery } from "../../types/interfaces";
import { InventoryPlaces } from "../../types/interfaces";
import images from "../../images/images";
import weapons from "./weapons";
import armors from "./armors";

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

const item_healingPotion = createItem(
    'Healing potion', 'Drink of herbs',
    images.normalItems.healingPotion, 
    1, InventoryPlaces.leftPocket,
    null, null, null, null, 1
)

const items = {
    weapons,
    armors,
    item_healingPotion
}

export default items
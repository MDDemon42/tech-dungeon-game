import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import { IArmouryItem, IBattleAbility, ICraft, IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import weapons from "./weapons";

export function createArmouryItem(
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
        abilities: IBattleAbility[] | null,
        linkedMastery: string,
        masterAbilities: IBattleAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
    ],
    requiredStrength: number,
    craft: ICraft 
): IArmouryItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        requiredMastery: abilityInfo[0],
        abilities: abilityInfo[1],
        linkedMastery: abilityInfo[2],
        masterAbilities: abilityInfo[3],
        passiveAbilities: abilityInfo[4],

        requiredStrength,
        craft
    }
}

const armouryItems = {
    weapons
}

const musketOptions = [
    armouryItems.weapons.musket
];

export const armouryOptions: Record<string, IArmouryItem[]> = {
    0: [],
    5: [...musketOptions]
};

export default armouryItems
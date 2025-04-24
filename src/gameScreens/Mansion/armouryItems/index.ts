import { InventoryPlace, InventorySlotCategory } from "../../../enums-and-interfaces/enums";
import { IItem, IBattleAbility, IMastery, IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import guns from "./guns";
import mageWeapons from "./mageWeapons";
import battleWeapons from "./battleWeapons";
import other from './other';

export function createArmouryItem(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    inventoryInfo: [
        cost: number,
        inventoryPlaces: InventoryPlace[],
        priority: number
    ],
    requirements: [
        requiredMastery: string,
        requiredStrength: number,
    ],
    abilities: IBattleAbility[] | null,
    passiveAbilities: IPassiveAbility[] | null,
    linkedAbilities: {
        linkedMastery: string,
        masterAbility: IBattleAbility,
    }[] | null,
    givenMastery: IMastery | null = null,
    category: InventorySlotCategory = InventorySlotCategory.item
): IItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        category,

        givenMastery,
        requiredMastery: requirements[0],
        requiredStrength: requirements[1],

        abilities,
        passiveAbilities,

        linkedAbilities        
    }
}

const armouryItems = {
    battleWeapons,
    guns,
    mageWeapons,
    other  
}

export default armouryItems
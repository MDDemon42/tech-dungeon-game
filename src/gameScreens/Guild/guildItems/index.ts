import { InventoryPlace, InventorySlotCategory } from "../../../enums-and-interfaces/enums";
import { IBattleAbility, IPassiveAbility, IGuildItem, IMastery } from "../../../enums-and-interfaces/interfaces";
import weapons from "./weapons";

export function createGuildItem(
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
    requiredMastery: string,
    requiredStrength: number,
    abilities: IBattleAbility[] | null,
    passiveAbilities: IPassiveAbility[] | null,
    linkedAbilities: {
        linkedMastery: string,
        masterAbility: IBattleAbility,
    }[] | null,  
    givenMastery: IMastery | null = null,   
    category: InventorySlotCategory = InventorySlotCategory.item  
): IGuildItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        category,

        givenMastery,
        requiredMastery,
        requiredStrength,
        abilities,
        passiveAbilities,
        linkedAbilities        
    }
}

const guildItems = {
    weapons
}

const basicOptions = [
    guildItems.weapons.acidBomd,
    guildItems.weapons.oakCrossow,
    guildItems.weapons.steelChakram
];

const runes = [
    guildItems.weapons.runicGreataxe,
    guildItems.weapons.runicGreathammer,
    guildItems.weapons.runicGreatsword
]

export const guildShopOptions: Record<string, IGuildItem[]> = {
    0: [],
    1: [...basicOptions],
    2: [...runes]
};

export default guildItems
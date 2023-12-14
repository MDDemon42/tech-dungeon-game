import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import { IBattleAbility, IPassiveAbility, IGuildItem } from "../../../enums-and-interfaces/interfaces";
import weapons from "./weapons";

export function createGuildItem(
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
    ]       
): IGuildItem {
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
        passiveAbilities: abilityInfo[4]
    }
}

const guildItems = {
    weapons
}

const basicOptions = [
    guildItems.weapons.guildItem_acidBomd,
    guildItems.weapons.guildItem_oakCrossow,
    guildItems.weapons.guildItem_steelChakram
];

const runes = [
    guildItems.weapons.guildItem_runicGreataxe,
    guildItems.weapons.guildItem_runicGreathammer,
    guildItems.weapons.guildItem_runicGreatsword
]

export const guildShopOptions: Record<string, IGuildItem[]> = {
    0: [],
    1: [...basicOptions],
    2: [...runes]
};

export default guildItems
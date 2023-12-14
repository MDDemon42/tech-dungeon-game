import { 
    IAbility, IBattleAbility, 
    IItem, IPassiveAbility 
} from "../../../enums-and-interfaces/interfaces";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
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
        abilities: IBattleAbility[] | null,
        linkedMastery: string,
        masterAbilities: IAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
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
        abilities: abilityInfo[1],
        linkedMastery: abilityInfo[2],
        masterAbilities: abilityInfo[3],
        passiveAbilities: abilityInfo[4]
    }
}

const items = {
    armors,
    other,
    weapons,
    bigResources
}

const basicOptions = [
    items.other.item_healingPotion,
    items.armors.item_leatherArmor,
    items.armors.item_woodenShield,
    items.weapons.item_oakBow,
    items.weapons.item_spear,
    items.weapons.item_axeLeftHand,
    items.weapons.item_axeRightHand,
    items.weapons.pickaxe
];

const steelOptions = [
    items.armors.item_steelArmor,
    items.armors.item_steelShield,
    items.weapons.item_steelMace,
    items.weapons.item_steelSwordLeftHand,
    items.weapons.item_steelSwordRightHand,
    items.weapons.item_steelGreataxe,
    items.weapons.item_steelGreathammer,
    items.weapons.item_steelGreatsword
];

export const marketOptions: Record<string, IItem[]> = {
    0: [],
    1: [...basicOptions],
    2: [...steelOptions]
};

export default items
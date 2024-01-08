import { 
    IBattleAbility, 
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
): IItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        requiredMastery,
        requiredStrength,
        abilities,
        passiveAbilities,
        linkedAbilities
    }
}

const items = {
    armors,
    other,
    weapons,
    bigResources
}

const basicOptions = [
    items.weapons.axe,
    items.other.healingPotion,
    items.armors.leatherArmor,
    items.weapons.oakBow,
    items.weapons.pickaxe,
    items.weapons.pierceStick,
    items.armors.woodenShield,
];

const steelOptions = [
    items.armors.steelArmor,
    items.armors.steelShield,
    items.weapons.steelMace,
    items.weapons.steelSpear,
    items.weapons.steelSword,
    items.weapons.steelGreataxe,
    items.weapons.steelGreathammer,
    items.weapons.steelGreatsword
];

export const marketOptions: Record<string, IItem[]> = {
    0: [],
    1: [...basicOptions],
    2: [...steelOptions]
};

export default items
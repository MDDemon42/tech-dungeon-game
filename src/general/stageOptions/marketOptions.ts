import { IItem } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const basicOptions = [
    items.other.item_healingPotion,
    items.armors.item_leatherArmor,
    items.armors.item_woodenShield,
    items.weapons.item_oakBow,
    items.weapons.item_spear,
    items.weapons.item_axeLeftHand,
    items.weapons.item_axeRightHand
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
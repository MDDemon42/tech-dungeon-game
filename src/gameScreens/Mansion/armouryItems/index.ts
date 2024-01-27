import { InventoryPlace, InventorySlotCategory, UserStartClass } from "../../../enums-and-interfaces/enums";
import { IArmouryItem, IBattleAbility, ICraft, IMastery, IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
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
        craft: ICraft
    ],
    abilities: IBattleAbility[] | null,
    passiveAbilities: IPassiveAbility[] | null,
    linkedAbilities: {
        linkedMastery: string,
        masterAbility: IBattleAbility,
    }[] | null,
    givenMastery: IMastery | null = null,
    category: InventorySlotCategory = InventorySlotCategory.item
): IArmouryItem {
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
        craft: requirements[2],

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

const musketOptions = [
    armouryItems.guns.musket,
    armouryItems.guns.pistol,
    armouryItems.other.holster
];

const rifleOptions = [
    armouryItems.guns.revolver,
    armouryItems.guns.rifle
];

export const startClassBattleOptions: Record<UserStartClass, IArmouryItem | null> = {
    [UserStartClass.smart]: armouryItems.battleWeapons.sabre,
    [UserStartClass.creative]: armouryItems.battleWeapons.khopesh,
    [UserStartClass.dreamer]: armouryItems.battleWeapons.katana,
    [UserStartClass.enduring]: armouryItems.battleWeapons.macuahuitl,
    [UserStartClass.ingenious]: null,
    [UserStartClass.noIcon]: null,
    [UserStartClass.sane]: armouryItems.battleWeapons.rapier,
    [UserStartClass.tireless]: armouryItems.battleWeapons.halberd,
    [UserStartClass.vital]: armouryItems.battleWeapons.glaive
}

const battleOptions = [
    armouryItems.battleWeapons.battleAxe,
    armouryItems.battleWeapons.dragonBoneBlade        
];

const battleMusketOptions = [
    armouryItems.guns.battleMusket,
    armouryItems.guns.battlePistol
];

const battleRifleOptions = [
    armouryItems.guns.battleRevolver,
    armouryItems.guns.battleRifle
];

export const startClassBattleMageOptions: Record<UserStartClass, IArmouryItem | null> = {
    [UserStartClass.smart]: null,
    [UserStartClass.creative]: armouryItems.mageWeapons.mageKhopesh,
    [UserStartClass.dreamer]: null,
    [UserStartClass.enduring]: armouryItems.mageWeapons.mageMacuahuitl,
    [UserStartClass.ingenious]: null,
    [UserStartClass.noIcon]: null,
    [UserStartClass.sane]: null,
    [UserStartClass.tireless]: armouryItems.mageWeapons.mageHalberd,
    [UserStartClass.vital]: armouryItems.mageWeapons.mageGlaive
}

const mageOptions = [
    armouryItems.mageWeapons.mageWand
];

const mageMusketOptions = [
    armouryItems.mageWeapons.mageMusket
];

const mageRifleOptions = [
    armouryItems.mageWeapons.mageRifle
];

const battleMageOptions = [
    armouryItems.mageWeapons.battleMageAxe,
    armouryItems.mageWeapons.mageDragonBoneBlade,       
];

const battleMageMusketOptions = [
    armouryItems.mageWeapons.battleMageMusket
];

const battleMageRifleOptions = [
    armouryItems.mageWeapons.battleMageRifle
];

export const armouryOptions: Record<string, IArmouryItem[]> = {
    0: [],
    7: [...musketOptions],
    11: [...battleOptions],
    13: [...mageOptions],
    17: [...rifleOptions],
    77: [...battleMusketOptions],
    91: [...mageMusketOptions],
    143: [...battleMageOptions],
    187: [...battleRifleOptions],
    221: [...mageRifleOptions],
    1001: [...battleMageMusketOptions],
    2431: [...battleMageRifleOptions]
};

export default armouryItems
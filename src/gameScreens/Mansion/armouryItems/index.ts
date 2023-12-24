import { InventoryPlace, UserStartClass } from "../../../enums-and-interfaces/enums";
import { IArmouryItem, IBattleAbility, ICraft, IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import guns from "./guns";
import mageWeapons from "./mageWeapons";
import battleWeapons from "./battleWeapons";

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
): IArmouryItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

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
    mageWeapons    
}

const musketOptions = [
    armouryItems.guns.musket,
    armouryItems.guns.pistol
];

const rifleOptions = [
    armouryItems.guns.revolverLeftHand,
    armouryItems.guns.revolverRightHand,
    armouryItems.guns.rifle
];

export const startClassBattleOptions: Record<UserStartClass, IArmouryItem | null> = {
    [UserStartClass.coreKeeper]: armouryItems.battleWeapons.sabre,
    [UserStartClass.creative]: armouryItems.battleWeapons.khopesh,
    [UserStartClass.dreamer]: armouryItems.battleWeapons.katana,
    [UserStartClass.geneKeeper]: armouryItems.battleWeapons.macuahuitl,
    [UserStartClass.ingenious]: null,
    [UserStartClass.noIcon]: null,
    [UserStartClass.richie]: armouryItems.battleWeapons.rapier,
    [UserStartClass.tireless]: armouryItems.battleWeapons.halberd,
    [UserStartClass.vital]: armouryItems.battleWeapons.glaive
}

const battleOptions = [
    armouryItems.battleWeapons.battleAxeLeftHand,
    armouryItems.battleWeapons.battleAxeRightHand,
    armouryItems.battleWeapons.dragonBoneBlade        
];

const battleMusketOptions = [
    armouryItems.guns.battleMusket,
    armouryItems.guns.battlePistol
];

const battleRifleOptions = [
    armouryItems.guns.battleRevolverLeftHand,
    armouryItems.guns.battleRevolverRightHand,
    armouryItems.guns.battleRifle
];

export const startClassBattleMageOptions: Record<UserStartClass, IArmouryItem | null> = {
    [UserStartClass.coreKeeper]: null,
    [UserStartClass.creative]: armouryItems.mageWeapons.mageKhopesh,
    [UserStartClass.dreamer]: null,
    [UserStartClass.geneKeeper]: armouryItems.mageWeapons.mageMacuahuitl,
    [UserStartClass.ingenious]: null,
    [UserStartClass.noIcon]: null,
    [UserStartClass.richie]: null,
    [UserStartClass.tireless]: armouryItems.mageWeapons.mageHalberd,
    [UserStartClass.vital]: armouryItems.mageWeapons.mageGlaive
}

const mageOptions = [
    armouryItems.mageWeapons.mageWandLeftHand,
    armouryItems.mageWeapons.mageWandRightHand
];

const mageMusketOptions = [
    armouryItems.mageWeapons.mageMusket
];

const mageRifleOptions = [
    armouryItems.mageWeapons.mageRifle
];

const battleMageOptions = [
    armouryItems.mageWeapons.battleMageAxeLeftHand,
    armouryItems.mageWeapons.battleMageAxeRightHand,
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
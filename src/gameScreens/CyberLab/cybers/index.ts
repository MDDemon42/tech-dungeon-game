import { ICyber, IPassiveAbility, IBattleAbility, IMastery } from "../../../enums-and-interfaces/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";
import { InventoryPlace, InventorySlotCategory } from "../../../enums-and-interfaces/enums";

export function createCyber(
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
    abilityInfo: [
        abilities: IBattleAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
    ],
    requiredCyber: string,
    requiredStrength: number = 0,
    givenMastery: IMastery | null = null,
    category: InventorySlotCategory = InventorySlotCategory.cyber
): ICyber {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        abilities: abilityInfo[0],
        passiveAbilities: abilityInfo[1],

        requiredCyber,
        requiredStrength,
        givenMastery,
        category
    }
}

const cybers = {
    armors,
    other,
    weapons
}

const limbsOptions = [
    cybers.weapons.cyberFist,
    cybers.weapons.treeCutter,
    cybers.weapons.cyberClaw, 
    cybers.other.reactiveFeet
];

const highEnergyOptions = [
    cybers.weapons.acidizer,
    cybers.weapons.laser,
    cybers.weapons.freezer,
    cybers.weapons.taserWhip,
    cybers.weapons.heatSaber,
    cybers.weapons.rocketLauncher,  
    cybers.armors.energyShield
];

const nanoOptions = [
    cybers.other.cyberEyes,
    cybers.armors.nanoVest,
    cybers.armors.nanoMatrix,
];

export const cyberLabOptions: Record<string, ICyber[]> = {
    0: [],
    1: [...limbsOptions],
    2: [...highEnergyOptions],
    3: [...nanoOptions], 
};

export default cybers
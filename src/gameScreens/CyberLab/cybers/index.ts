import { ICyber, IPassiveAbility, IBattleAbility } from "../../../enums-and-interfaces/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";

export function createCyber(
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
        abilities: IBattleAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
    ],
    requiredCyber: string    
): ICyber {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        abilities: abilityInfo[0],
        passiveAbilities: abilityInfo[1],

        requiredCyber        
    }
}

const cybers = {
    armors,
    other,
    weapons
}

const limbsOptions = [
    cybers.weapons.cyberFistLeftHand,
    cybers.weapons.treeCutter,
    cybers.weapons.cyberFistRightHand,
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
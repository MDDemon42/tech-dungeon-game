import { IBattleAbility, IMutation, IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";

export function createMutation(
    commonInfo: [
        name: string,
        description: string,
        image: string,
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
    requiredStrength: number = 0
): IMutation {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        abilities: abilityInfo[0],
        passiveAbilities: abilityInfo[1],
        
        requiredStrength
    }
}

const mutations = {
    armors,
    weapons,
    other
};

const beastOptions = [
    mutations.armors.fur,
    mutations.other.hooves,
    mutations.weapons.horns,
    mutations.weapons.lowerFangs
];

const reptiloidOptions = [
    mutations.weapons.acidSpit,
    mutations.other.extraArms,
    mutations.weapons.raptorLegs,
    mutations.armors.scales,
    mutations.weapons.tailWithSting,
];

const insectoidOptions = [
    mutations.weapons.claws,
    mutations.weapons.pincers,
    mutations.other.wings
];

export const mutaLabOptions: Record<string, IMutation[]> = {
    0: [],
    1: [],
    2: [...beastOptions],
    3: [...reptiloidOptions],
    5: [...insectoidOptions]
};

export default mutations
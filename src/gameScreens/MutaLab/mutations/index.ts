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
    ]    
): IMutation {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        abilities: abilityInfo[0],
        passiveAbilities: abilityInfo[1]  
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

const reptileOptions = [
    mutations.weapons.raptorLegs,
    mutations.armors.scales,
    mutations.weapons.tailWithSting,
    mutations.other.extraArms
];

const insectoidOptions = [
    mutations.weapons.acidSpit,
    mutations.weapons.claws,
    mutations.weapons.pincers,
    mutations.other.wings
];

export const mutaLabOptions: Record<string, IMutation[]> = {
    0: [],
    1: [],
    2: [...beastOptions],
    3: [...reptileOptions],
    5: [...insectoidOptions]
};

export default mutations
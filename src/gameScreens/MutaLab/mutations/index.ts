import { IBattleAbility, IMastery, IMutation, IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import armors from "./armors";
import weapons from "./weapons";
import other from "./other";
import { InventoryPlace, InventorySlotCategory } from "../../../enums-and-interfaces/enums";

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
    requiredStrength: number = 0,
    givenMastery: IMastery | null = null,
    category: InventorySlotCategory = InventorySlotCategory.mutation
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
        
        requiredStrength,
        givenMastery,
        category
    }
}

const mutations = {
    armors,
    weapons,
    other
};

const beastOptions = [
    mutations.weapons.claws,
    mutations.armors.fur,
    mutations.other.hooves,
    mutations.weapons.horns,
    mutations.weapons.lowerFangs,
];

const reptiloidOptions = [
    mutations.weapons.acidSpit,
    mutations.weapons.claws,
    mutations.other.extraArms,
    mutations.weapons.raptorLegs,
    mutations.armors.scales
];

const insectoidOptions = [
    mutations.weapons.claws,
    mutations.weapons.pincers,
    mutations.other.skinWings
];

const dragonOptions = [
    mutations.weapons.claws,
    mutations.other.dragonEyes,
    mutations.weapons.fireBreath,
    mutations.weapons.tailWithBlunt,
    mutations.weapons.tailWithCutter,
    mutations.weapons.tailWithSting,
    mutations.other.featherWings,
    mutations.armors.spikedShell
];

export const mutaLabOptions: Record<string, IMutation[]> = {
    0: [],
    1: [],
    2: [...beastOptions],
    3: [...reptiloidOptions],
    5: [...insectoidOptions],
    7: [...dragonOptions]
};

export default mutations
import { IMutation } from "../../enums-and-interfaces/interfaces";
import mutations from "../mutations";

const beastOptions = [
    mutations.armors.mutation_fur,
    mutations.other.mutation_hooves,
    mutations.weapons.mutation_horns,
    mutations.weapons.mutation_lowerFangs
];

const reptileOptions = [
    mutations.weapons.mutation_raptorLegs,
    mutations.armors.mutation_scales,
    mutations.weapons.mutation_tailWithSting,
];

const insectoidOptions = [
    mutations.weapons.mutation_acidSplit,
    mutations.weapons.mutation_claws,
    mutations.weapons.mutation_pincers,
    mutations.other.mutation_wings
];

export const mutaLabOptions: Record<string, IMutation[]> = {
    0: [],
    1: [],
    2: [...beastOptions],
    3: [...reptileOptions],
    5: [...insectoidOptions]
};
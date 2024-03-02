import { IBattleAbility, IPassiveAbility, IPower } from "../../../enums-and-interfaces/interfaces";
import armors from "./armors";
import other from "./other";
import weapons from "./weapons";

export function createPower(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        abilities: IBattleAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
    ],
    requiredPower: string
): IPower {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        abilities: abilityInfo[1],
        passiveAbilities: abilityInfo[2],

        requiredPower        
    }
}

const powers = {
    armors,
    other,
    weapons
};

const basicOptions = [
    powers.armors.guardianField,
    powers.other.intuition
];

const advancedOptions = [
    powers.armors.guardianAura,
    powers.other.telekinesis,
    powers.other.hypnosis,
    powers.other.levitation
];

const psiEnergyOptions = [
    powers.weapons.psiBlade,
    powers.weapons.psiJavelin,
    powers.weapons.psiLightning,
    powers.weapons.voidCrash
];

export const focusSiteOptions: Record<string, IPower[]> = {
    0: [],
    1: [...basicOptions],
    2: [...advancedOptions],
    3: [...psiEnergyOptions],
    5: []
};

export default powers
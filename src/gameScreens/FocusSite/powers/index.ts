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
        ability: IBattleAbility | null,
        passiveAbilities: IPassiveAbility[] | null
    ],
    requiredPower: string
): IPower {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        ability: abilityInfo[1],
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
    powers.armors.power_guardianField,
    powers.other.power_intuition
];

const advancedOptions = [
    powers.armors.power_guardianAura,
    powers.other.power_telekinesis,
    powers.other.power_levitation
];

const psiEnergyOptions = [
    powers.weapons.power_psiBlade,
    powers.weapons.power_psiLightning
];

export const focusSiteOptions: Record<string, IPower[]> = {
    0: [],
    1: [...basicOptions],
    2: [...advancedOptions],
    3: [...psiEnergyOptions],
};

export default powers
import { IPower } from "../../enums-and-interfaces/interfaces";
import powers from "../powers";

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
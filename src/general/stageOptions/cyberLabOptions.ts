import { ICyber } from "../../enums-and-interfaces/interfaces";
import cybers from "../cybers";

const basicOptions = [
    cybers.weapons.cyber_energyFist, 
    cybers.other.cyber_reactiveFeet
];

const advancedOptions = [
    cybers.weapons.cyber_laser,
    cybers.armors.cyber_nanoVest
];

const expertOptions = [
    cybers.weapons.cyber_energyWhip,
    cybers.weapons.cyber_rocketLauncher,
    cybers.armors.cyber_nanoMatrix,
];

export const cyberLabOptions: Record<string, ICyber[]> = {
    0: [],
    1: [],
    2: [...basicOptions],
    3: [...basicOptions, ...advancedOptions],
    4: [...basicOptions, ...advancedOptions, ...expertOptions] 
};
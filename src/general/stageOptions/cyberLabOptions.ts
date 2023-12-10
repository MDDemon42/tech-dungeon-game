import { ICyber } from "../../enums-and-interfaces/interfaces";
import cybers from "../cybers";

const limbsOptions = [
    cybers.weapons.cyber_energyFistLeftHand,
    cybers.weapons.cyber_slasherator,
    cybers.weapons.cyber_energyFistRightHand,
    cybers.weapons.cyber_cyberClaw, 
    cybers.other.cyber_reactiveFeet
];

const highEnergyOptions = [
    cybers.weapons.cyber_acidizer,
    cybers.weapons.cyber_laser,
    cybers.weapons.cyber_freezer,
    cybers.weapons.cyber_energyWhip,
    cybers.weapons.cyber_heatSaber,
    cybers.weapons.cyber_rocketLauncher,  
    cybers.armors.cyber_energyShield
];

const nanoOptions = [
    cybers.armors.cyber_nanoVest,
    cybers.armors.cyber_nanoMatrix,
];

export const cyberLabOptions: Record<string, ICyber[]> = {
    0: [],
    1: [...limbsOptions],
    2: [...highEnergyOptions],
    3: [...nanoOptions], 
};
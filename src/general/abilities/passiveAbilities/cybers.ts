import { createPassiveAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";

const cyberClaw = createPassiveAbility(
    [
        chrome.i18n.getMessage('cyber_claw'), 
        chrome.i18n.getMessage('resistance_slashing_1'),
    ],
    null,
    {[DamageType.physicalSlashing]: 1},
    0
);

const cyberFist = createPassiveAbility(
    [
        chrome.i18n.getMessage('cyber_fist_right_hand'), 
        chrome.i18n.getMessage('resistance_slashing_1'),
    ], 
    null,
    {[DamageType.physicalSlashing]: 1},
    0
);

const energyShield = createPassiveAbility(
    [
        chrome.i18n.getMessage('energy_shield'), 
        chrome.i18n.getMessage('resistance_piercing_and_smashing_1'),
    ],
    null,
    {
        [DamageType.physicalSmashing]: 1,
        [DamageType.physicalPiercing]: 1,
    },
    0
);

const nanoVest = createPassiveAbility(
    [
        chrome.i18n.getMessage('nano_vest'), 
        chrome.i18n.getMessage('resistance_slashing_1'),
    ],
    null,
    {[DamageType.physicalSlashing]: 1},
    0
);

const nanoMatrix = createPassiveAbility(
    [
        chrome.i18n.getMessage('nano_matrix'), 
        chrome.i18n.getMessage('resistance_piercing_and_slashing_1'),
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
    }, 
    0
);

const cybers = {
    cyberClaw,
    cyberFist,
    energyShield,
    nanoVest,
    nanoMatrix
}

export default cybers
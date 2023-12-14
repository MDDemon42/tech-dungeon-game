import { createPassiveAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";

const cyberClaw = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_slashing_1'), ''
    ],
    null,
    {[DamageType.physicalSlashing]: 1},
    0
);

const cyberFist = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_slashing_1'), ''
    ], 
    null,
    {[DamageType.physicalSlashing]: 1},
    0
);

const nanoVest = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_slashing_1'), ''
    ],
    null,
    {[DamageType.physicalSlashing]: 1},
    0
);

const nanoMatrix = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_piercing_and_slashing_1'), ''
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
    }, 
    0
);

const cyber = {
    cyberClaw,
    cyberFist,
    nanoVest,
    nanoMatrix
}

export default cyber
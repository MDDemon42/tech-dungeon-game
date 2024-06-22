import { createPassiveAbility } from ".";
import { UserParam, DamageType } from "../../../enums-and-interfaces/enums";

const titanSkin = createPassiveAbility(
    [
        chrome.i18n.getMessage('titan_skin'), 
        chrome.i18n.getMessage('resistance_titan_invincibility'),
    ],
    {[UserParam.stamina]: 1},
    {
        [DamageType.physicalPiercing]: 2,
        [DamageType.physicalSlashing]: 2,
        [DamageType.physicalSmashing]: 2,
        [DamageType.acid]: 2,
        [DamageType.cold]: 2,
        [DamageType.electrical]: 8,
        [DamageType.fire]: 2
    },
    0
);

const airVessel = createPassiveAbility(
    [
        chrome.i18n.getMessage('air_vessel'),
        chrome.i18n.getMessage('air_vessel_ability_description'),
    ],
    {[UserParam.mana]: 1},
    {[DamageType.suffocation]: 1},
    10
);

const fireVessel = createPassiveAbility(
    [
        chrome.i18n.getMessage('fire_vessel'),
        chrome.i18n.getMessage('fire_vessel_ability_description'),
    ],
    {[UserParam.mana]: 2},
    {[DamageType.fire]: 1},
    0
);

const coldVessel = createPassiveAbility(
    [
        chrome.i18n.getMessage('cold_vessel'),
        chrome.i18n.getMessage('cold_vessel_ability_description'),
    ],
    {[UserParam.mana]: 1},
    {[DamageType.cold]: 1},
    0
);

const cosmoChakra = createPassiveAbility(
    [
        chrome.i18n.getMessage('cosmo_chakra'),
        chrome.i18n.getMessage('cosmo_chakra_ability_description'),
    ],
    {[UserParam.focus]: 1},
    {[DamageType.psionic]: 1},
    0
);

const rituals = {
    titanSkin,
    airVessel,
    fireVessel,
    coldVessel,
    cosmoChakra
}

export default rituals
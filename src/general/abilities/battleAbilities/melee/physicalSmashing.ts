import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const fistPunch = createBattleAbility(
    [
        chrome.i18n.getMessage('fist_punch'), 
        '', 
        images.misc.fistPunch
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 70]
);

const fistSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('fist_smash'), 
        '', 
        images.misc.fistPunch
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const martialHit = createBattleAbility(
    [
        chrome.i18n.getMessage('martial_hit'), 
        '', 
        images.misc.martialHit
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 95]
);

const maceSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('mace_smash'), 
        '', 
        images.normalItems.steelMace
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const affiliatedMaceSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('mace_smash'),
        '', 
        images.normalItems.steelMace
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 95]
);

const steelGreathammerSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('greathammer_smash'), 
        '', 
        images.normalItems.steelGreathammer
    ], 
    {Stamina: 2},
    {[DamageType.physicalSmashing]: 2}, 
    [1, 70]
);

const runicGreathammerSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('greathammer_smash'), 
        '', 
        images.guildianLearnings.runicGreathammer
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const thunderPunch = createBattleAbility(
    [
        chrome.i18n.getMessage('thunder_punch'), 
        '', 
        images.elementBendings.thunderPunch
    ], 
    {Mana: 1, Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const cyberFistRightHandSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('cyber_fist_smash_right'), 
        '', 
        images.cyborgDetails.cyberFistRightHand
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const cyberFistLeftHandSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('cyber_fist_smash_left'), 
        '', 
        images.cyborgDetails.cyberFistLeftHand
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const physicalSmashing = {
    affiliatedMaceSmash,
    cyberFistLeftHandSmash,
    cyberFistRightHandSmash,
    fistPunch,
    fistSmash,
    maceSmash,
    martialHit,
    runicGreathammerSmash,
    steelGreathammerSmash,    
    thunderPunch,    
}

export default physicalSmashing
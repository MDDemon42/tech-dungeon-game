import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_fistPunch = createBattleAbility(
    [
        chrome.i18n.getMessage('fist_punch'), 
        '', 
        images.misc.fistPunch
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_fistSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('fist_smash'), 
        '', 
        images.misc.fistPunch
    ], 
    {Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_maceSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('mace_smash'), 
        '', 
        images.normalItems.steelMace
    ], 
    {Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_affiliatedMaceSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('mace_smash'),
        '', 
        images.normalItems.steelMace
    ], 
    {Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 95]
);

const battleAbility_thunderPunch = createBattleAbility(
    [
        chrome.i18n.getMessage('thunder_punch'), 
        '', 
        images.wizardSpells.thunderPunch
    ], 
    {Mana: 1, Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const physicalSmashing = {
    battleAbility_fistPunch,
    battleAbility_fistSmash,
    battleAbility_maceSmash,
    battleAbility_affiliatedMaceSmash,
    battleAbility_thunderPunch,
}

export default physicalSmashing
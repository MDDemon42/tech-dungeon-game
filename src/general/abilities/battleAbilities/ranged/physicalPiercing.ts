import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_iceShard = createBattleAbility(
    [
        chrome.i18n.getMessage('ice_shard'), 
        '', 
        images.wizardSpells.iceShard
    ], 
    {Mana: 1}, 
    [1, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_iceSpear = createBattleAbility(
    [
        chrome.i18n.getMessage('ice_spear'), 
        '', 
        images.wizardSpells.iceSpear
    ], 
    {Mana: 2}, 
    [2, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_iceHail = createBattleAbility(
    [
        chrome.i18n.getMessage('ice_hail'), 
        '', 
        images.wizardSpells.iceHail
    ], 
    {Mana: 2}, 
    [1, DamageType.physicalPiercing, 3, 70]
);

const battleAbility_oakBowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_bow_shot'),
        '', 
        images.normalItems.bow
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_affiliatedOakBowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_bow_shot'), 
        '', 
        images.normalItems.bow
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 95]
);

const battleAbility_crossbowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_crossbow_shot'), 
        '', 
        images.normalItems.crossbow
    ], 
    {Blank: 0}, 
    [1, DamageType.physicalPiercing, 1, 60]
);

const battleAbility_masterCrossbowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_crossbow_shot'), 
        '', 
        images.normalItems.crossbow
    ], 
    {Blank: 0}, 
    [1, DamageType.physicalPiercing, 1, 95]
);

const physicalPiercing = {
    battleAbility_iceShard,
    battleAbility_iceSpear,
    battleAbility_iceHail,
    battleAbility_oakBowShot,
    battleAbility_affiliatedOakBowShot,
    battleAbility_crossbowShot,
    battleAbility_masterCrossbowShot,
}

export default physicalPiercing
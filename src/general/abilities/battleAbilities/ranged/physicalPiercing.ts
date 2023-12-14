import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const iceShard = createBattleAbility(
    [
        chrome.i18n.getMessage('ice_shard'), 
        '', 
        images.elementBendings.iceShard
    ], 
    {Mana: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const iceSpear = createBattleAbility(
    [
        chrome.i18n.getMessage('ice_spear'), 
        '', 
        images.elementBendings.iceSpear
    ], 
    {Mana: 2}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const iceHail = createBattleAbility(
    [
        chrome.i18n.getMessage('ice_hail'), 
        '', 
        images.elementBendings.iceHail
    ],
    {Mana: 2}, 
    {[DamageType.physicalPiercing]: 1},
    [3, 70]
);

const oakBowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_bow_shot'),
        '', 
        images.normalItems.oakBow
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const affiliatedOakBowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_bow_shot'), 
        '', 
        images.normalItems.oakBow
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 95]
);

const crossbowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_crossbow_shot'), 
        '', 
        images.normalItems.oakCrossbow
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 60]
);

const masterCrossbowShot = createBattleAbility(
    [
        chrome.i18n.getMessage('oak_crossbow_shot'), 
        '', 
        images.normalItems.oakCrossbow
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 95]
);

const physicalPiercing = {
    iceShard,
    iceSpear,
    iceHail,
    oakBowShot,
    affiliatedOakBowShot,
    crossbowShot,
    masterCrossbowShot,
}

export default physicalPiercing
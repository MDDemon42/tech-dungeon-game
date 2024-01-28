import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const pierceStickThrow = createBattleAbility(
    [
        chrome.i18n.getMessage('pierce_stick_throw'), 
        '', 
        images.normalItems.pierceStick
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70],
    true
);

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

const musketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('musket_shot'), 
        '', 
        images.armouryItems.musket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const masterMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('musket_shot'), 
        '', 
        images.armouryItems.musket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 95]
);

const battleMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_musket_shot'), 
        '', 
        images.armouryItems.battleMusket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const masterBattleMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_musket_shot'), 
        '', 
        images.armouryItems.battleMusket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 95]
);

const mageMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_musket_shot'), 
        '', 
        images.armouryItems.mageMusket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const masterMageMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_musket_shot'), 
        '', 
        images.armouryItems.mageMusket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 95]
);

const battleMageMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_musket_shot'), 
        '', 
        images.armouryItems.battleMageMusket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const masterBattleMageMusketShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_musket_shot'), 
        '', 
        images.armouryItems.battleMageMusket
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 95]
);

const pistolShot = createBattleAbility(
    [
        chrome.i18n.getMessage('pistol_shot'), 
        '', 
        images.armouryItems.pistol
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const masterPistolShot = createBattleAbility(
    [
        chrome.i18n.getMessage('pistol_shot'), 
        '', 
        images.armouryItems.pistol
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 95]
);

const battlePistolShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_pistol_shot'), 
        '', 
        images.armouryItems.battlePistol
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const masterBattlePistolShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_pistol_shot'), 
        '', 
        images.armouryItems.battlePistol
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 95]
);

const revolverDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('revolver_double_shot'), 
        '', 
        images.armouryItems.revolver
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const masterRevolverDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('revolver_double_shot'), 
        '', 
        images.armouryItems.revolver
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 95]
);

const battleRevolverDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_revolver_double_shot'), 
        '', 
        images.armouryItems.battleRevolver
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const masterBattleRevolverDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_revolver_double_shot'), 
        '', 
        images.armouryItems.battleRevolver
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 95]
);

const rifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('rifle_double_shot'), 
        '', 
        images.armouryItems.rifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 70]
);

const masterRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('rifle_double_shot'), 
        '', 
        images.armouryItems.rifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 95]
);

const battleRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_rifle_double_shot'), 
        '', 
        images.armouryItems.battleRifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 70]
);

const masterBattleRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_rifle_double_shot'), 
        '', 
        images.armouryItems.battleRifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 95]
);

const mageRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_rifle_double_shot'), 
        '', 
        images.armouryItems.mageRifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 70]
);

const masterMageRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_rifle_double_shot'), 
        '', 
        images.armouryItems.mageRifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 95]
);

const battleMageRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_double_shot'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 70]
);

const masterBattleMageRifleDoubleShot = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_double_shot'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Blank: 0}, 
    {[DamageType.physicalPiercing]: 3},
    [1, 95]
);

const physicalPiercing = {
    pierceStickThrow,
    iceShard,
    iceSpear,
    iceHail,
    oakBowShot,
    affiliatedOakBowShot,
    crossbowShot,
    masterCrossbowShot,
    musketShot,
    masterMusketShot,
    battleMusketShot,
    masterBattleMusketShot,
    mageMusketShot,
    masterMageMusketShot,
    battleMageMusketShot,
    masterBattleMageMusketShot,
    pistolShot,
    masterPistolShot,
    battlePistolShot,
    masterBattlePistolShot,
    revolverDoubleShot,
    masterRevolverDoubleShot,
    battleRevolverDoubleShot,
    masterBattleRevolverDoubleShot,
    rifleDoubleShot,
    masterRifleDoubleShot,
    battleRifleDoubleShot,
    masterBattleRifleDoubleShot,
    mageRifleDoubleShot,
    masterMageRifleDoubleShot,
    battleMageRifleDoubleShot,
    masterBattleMageRifleDoubleShot
}

export default physicalPiercing
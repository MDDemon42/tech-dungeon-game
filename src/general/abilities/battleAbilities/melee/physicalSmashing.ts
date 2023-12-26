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

const cyberFistSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('cyber_fist_smash'), 
        '', 
        images.cyborgDetails.cyberFist
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 70]
);

const doubleCyberFistSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_cyber_fist_smash'), 
        '', 
        images.cyborgDetails.doubleCyberFistSmash
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSmashing]: 3},
    [1, 70]
);

const musketButtHit = createBattleAbility(
    [
        chrome.i18n.getMessage('musket_butt_hit'), 
        '', 
        images.armouryItems.musket
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 70]
);

const battleMusketButtHit = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_musket_butt_hit'), 
        '', 
        images.armouryItems.battleMusket
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 70]
);

const rifleButtHit = createBattleAbility(
    [
        chrome.i18n.getMessage('rifle_butt_hit'), 
        '', 
        images.armouryItems.rifle
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 70]
);

const battleRifleButtHit = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_rifle_butt_hit'), 
        '', 
        images.armouryItems.battleRifle
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 70]
);

const physicalSmashing = {
    affiliatedMaceSmash,
    cyberFistSmash,
    doubleCyberFistSmash,
    fistPunch,
    fistSmash,
    maceSmash,
    martialHit,
    musketButtHit,
    battleMusketButtHit,
    runicGreathammerSmash,
    rifleButtHit,
    battleRifleButtHit,
    steelGreathammerSmash,    
    thunderPunch,    
}

export default physicalSmashing
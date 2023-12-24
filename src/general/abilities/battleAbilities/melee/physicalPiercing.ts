import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const hornsCharge = createBattleAbility(
    [
        chrome.i18n.getMessage('horns_charge'), 
        '', 
        images.mutantEvolvings.horns
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const tailPrick = createBattleAbility(
    [
        chrome.i18n.getMessage('tail_prick'), 
        '', 
        images.mutantEvolvings.tailWithSting
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const pincersStab = createBattleAbility(
    [
        chrome.i18n.getMessage('pincers_stab'), 
        '', 
        images.mutantEvolvings.pincers
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 2},
    [1, 70]
);

const fangsBite = createBattleAbility(
    [
        chrome.i18n.getMessage('fangs_bite'), 
        '', 
        images.mutantEvolvings.lowerFangs
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 85]
);

const spearPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('spear_pierce'), 
        '', 
        images.normalItems.spear
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const affiliatedSpearPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('spear_pierce'), 
        '', 
        images.normalItems.spear
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 95]
);

const swordStab = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_stab'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1},
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const affiliatedSwordStab = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_stab'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 95]
);

const pickaxePick = createBattleAbility(
    [
        chrome.i18n.getMessage('pickaxe_pick'), 
        '', 
        images.normalItems.pickaxe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const battleMusketPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_musket_pierce'), 
        '', 
        images.armouryItems.battleMusket
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const battleMageMusketPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_musket_pierce'), 
        '', 
        images.armouryItems.battleMageMusket
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalPiercing]: 1},
    [1, 70]
);

const physicalPiercing = {
    hornsCharge,
    fangsBite,
    pincersStab,
    tailPrick,
    spearPierce,
    affiliatedSpearPierce,
    swordStab,
    affiliatedSwordStab,
    pickaxePick,
    battleMusketPierce,
    battleMageMusketPierce
}

export default physicalPiercing
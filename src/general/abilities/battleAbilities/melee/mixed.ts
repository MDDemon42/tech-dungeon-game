import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const ripApartMinor = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_minor'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 2}, 
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1
    },
    [1, 70]
);

const ripApartMere = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_mere'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 3}, 
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 2
    },
    [1, 70]
);

const ripApartMajor = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_major'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 4}, 
    {
        [DamageType.physicalSlashing]: 2,
        [DamageType.physicalPiercing]: 3
    },
    [1, 70]
);

const ripApartMajorGrand = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_major'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 5}, 
    {
        [DamageType.physicalSlashing]: 3,
        [DamageType.physicalPiercing]: 4
    },
    [1, 70]
);

const ripApartMonstrous = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_monstrous'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 6}, 
    {
        [DamageType.physicalSlashing]: 4,
        [DamageType.physicalPiercing]: 5
    },
    [1, 70]
);

const battleMageAxeFireSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_axe_fire_slash'), 
        '', 
        images.armouryItems.battleMageAxe
    ], 
    {Mana: 2, Stamina: 1}, 
    {
        [DamageType.fire]: 2,
        [DamageType.physicalSlashing]: 1
    },
    [1, 70]
);

const battleMageAxeColdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_axe_cold_slash'), 
        '', 
        images.armouryItems.battleMageAxe
    ], 
    {Mana: 2, Stamina: 1}, 
    {
        [DamageType.cold]: 2,
        [DamageType.physicalSlashing]: 1
    },
    [1, 70]
);

const mageDragonBoneBladeFireSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_dragon_bone_blade_fire_slash'), 
        '', 
        images.armouryItems.mageDragonBoneBlade
    ], 
    {Mana: 2, Stamina: 1}, 
    {
        [DamageType.fire]: 2,
        [DamageType.physicalSlashing]: 1
    },
    [1, 70]
);


const mageHalberdColdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_halberd_cold_slash'), 
        '', 
        images.armouryItems.mageHalberd
    ], 
    {Stamina: 2, Mana: 2},
    {
        [DamageType.cold]: 2,
        [DamageType.physicalSlashing]: 2
    },
    [1, 70]
);


const mageKhopeshFireSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_khopesh_fire_slash'), 
        '', 
        images.armouryItems.mageKhopesh
    ], 
    {Stamina: 1, Mana: 2},
    {
        [DamageType.fire]: 2,
        [DamageType.physicalSlashing]: 1
    },
    [1, 70]
);


const mageMacuahuitlColdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_macuahuitl_cold_slash'), 
        '', 
        images.armouryItems.mageMacuahuitl
    ], 
    {Stamina: 1, Mana: 2},
    {
        [DamageType.cold]: 2,
        [DamageType.physicalSlashing]: 1
    },
    [1, 70]
);

const battleMageMusketColdPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_musket_cold_pierce'), 
        '', 
        images.armouryItems.battleMageMusket
    ], 
    {Stamina: 1, Mana: 2},
    {
        [DamageType.cold]: 2,
        [DamageType.physicalPiercing]: 1
    },
    [1, 70]
);

const battleMageRifleColdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_cold_slash'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Stamina: 2, Mana: 2},
    {
        [DamageType.cold]: 2,
        [DamageType.physicalSlashing]: 2
    },
    [1, 70]
);

const battleMageRifleFireSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_fire_slash'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Stamina: 2, Mana: 2},
    {
        [DamageType.fire]: 2,
        [DamageType.physicalSlashing]: 2
    },
    [1, 70]
);

const mixed = {
    battleMageAxeColdSlash,
    battleMageAxeFireSlash,
    mageDragonBoneBladeFireSlash,
    mageHalberdColdSlash,
    mageKhopeshFireSlash,
    mageMacuahuitlColdSlash,
    battleMageMusketColdPierce,
    battleMageRifleColdSlash,
    battleMageRifleFireSlash,
    ripApartMinor,
    ripApartMere,
    ripApartMajor,
    ripApartMajorGrand,
    ripApartMonstrous
}

export default mixed
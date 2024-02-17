import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

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
    {Mana: 2, Stamina: 2}, 
    {
        [DamageType.fire]: 2,
        [DamageType.physicalSlashing]: 2
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

const spikedShellRush = createBattleAbility(
    [
        chrome.i18n.getMessage('spiked_shell_rush'), 
        '', 
        images.mutantEvolvings.spikedShell
    ], 
    {Stamina: 2},
    {
        [DamageType.physicalSmashing]: 2,
        [DamageType.physicalPiercing]: 1
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
    spikedShellRush
}

export default mixed
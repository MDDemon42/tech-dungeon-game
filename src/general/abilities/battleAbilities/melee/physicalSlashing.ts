import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const swordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_slash'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedSwordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_slash'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const dualSwordsSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('dual_sword_slash'), 
        '', 
        images.guildianLearnings.dualSwords
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 3},
    [1, 95]
);

const chakramSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_slash'), 
        '', 
        images.guildianLearnings.chakram
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1}, 
    [1, 70]
);

const affiliatedChakramSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_slash'), 
        '', 
        images.guildianLearnings.chakram
    ],
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1}, 
    [1, 95]
);

const steelGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greataxe_slash'), 
        '', 
        images.normalItems.steelGreataxe
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const runicGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greataxe_slash'), 
        '', 
        images.guildianLearnings.runicGreataxe
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const steelGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greatsword_slash'), 
        '', 
        images.normalItems.steelGreatsword
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const runicGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greatsword_slash'),
        '', 
        images.guildianLearnings.runicGreatsword
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const axeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('axe_slash'), 
        '', 
        images.normalItems.axe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const battleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_axe_slash'), 
        '', 
        images.armouryItems.battleAxe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedBattleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_axe_slash'),  
        '', 
        images.armouryItems.battleAxe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const battleMageAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_axe_slash'), 
        '', 
        images.armouryItems.battleMageAxe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const battleMageAxeWindSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_axe_wind_slash'), 
        '', 
        images.armouryItems.battleMageAxe
    ], 
    {Mana: 2, Stamina: 1}, 
    {
        [DamageType.physicalSlashing]: 3
    },
    [1, 70]
);

const affiliatedBattleMageAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_axe_slash'),  
        '', 
        images.armouryItems.battleMageAxe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const doubleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_axe_slash'),   
        '', 
        images.normalItems.doubleAxeSlash
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const affiliatedDoubleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_axe_slash'),
        '', 
        images.normalItems.doubleAxeSlash
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
); 

const cyberClawSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('cyber_claw_slash'),
        '', 
        images.cyborgDetails.cyberClaw
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const treeCutterSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('tree_cutter_slash'),
        '', 
        images.cyborgDetails.treeCutter
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const leftClawSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('left_claw_slash'),
        '', 
        images.mutantEvolvings.claws
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
); 

const rightClawSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('right_claw_slash'),
        '', 
        images.mutantEvolvings.claws
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
); 

const bothClawsSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('both_claws_slash'),
        '', 
        images.mutantEvolvings.claws
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const raptorJump = createBattleAbility(
    [
        chrome.i18n.getMessage('raptor_jump'),
        '', 
        images.mutantEvolvings.raptorLegs
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const dragonBoneBladeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('dragon_bone_blade_slash'), 
        '', 
        images.armouryItems.dragonBoneBlade
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedDragonBoneBladeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('dragon_bone_blade_slash'), 
        '', 
        images.armouryItems.dragonBoneBlade
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const mageDragonBoneBladeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_dragon_bone_blade_slash'), 
        '', 
        images.armouryItems.mageDragonBoneBlade
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedMageDragonBoneBladeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_dragon_bone_blade_slash'), 
        '', 
        images.armouryItems.mageDragonBoneBlade
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const glaiveSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('glaive_slash'), 
        '', 
        images.armouryItems.glaive
    ], 
    {Stamina: 2},
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
);

const affiliatedGlaiveSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('glaive_slash'), 
        '', 
        images.armouryItems.glaive
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
);

const mageGlaiveSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_glaive_slash'), 
        '', 
        images.armouryItems.mageGlaive
    ], 
    {Stamina: 2},
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
);

const mageGlaiveWindSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_glaive_wind_slash'), 
        '', 
        images.armouryItems.mageGlaive
    ], 
    {Stamina: 2, Mana: 2},
    {[DamageType.physicalSlashing]: 4},
    [1, 70]
);

const affiliatedMageGlaiveSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_glaive_slash'), 
        '', 
        images.armouryItems.glaive
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
);

const halberdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('halberd_slash'), 
        '', 
        images.armouryItems.halberd
    ], 
    {Stamina: 2},
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
);

const affiliatedHalberdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('halberd_slash'), 
        '', 
        images.armouryItems.halberd
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
);

const mageHalberdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_halberd_slash'), 
        '', 
        images.armouryItems.mageHalberd
    ], 
    {Stamina: 2},
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
);

const affiliatedMageHalberdSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_halberd_slash'), 
        '', 
        images.armouryItems.mageHalberd
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
);

const katanaSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('katana_slash'), 
        '', 
        images.armouryItems.katana
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedKatanaSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('katana_slash'), 
        '', 
        images.armouryItems.katana
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const khopeshSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('khopesh_slash'), 
        '', 
        images.armouryItems.khopesh
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedKhopeshSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('khopesh_slash'), 
        '', 
        images.armouryItems.khopesh
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const mageKhopeshSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_khopesh_slash'), 
        '', 
        images.armouryItems.mageKhopesh
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedMageKhopeshSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_khopesh_slash'), 
        '', 
        images.armouryItems.mageKhopesh
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const macuahuitlSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('macuahuitl_slash'), 
        '', 
        images.armouryItems.macuahuitl
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedMacuahuitlSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('macuahuitl_slash'), 
        '', 
        images.armouryItems.macuahuitl
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const mageMacuahuitlSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_macuahuitl_slash'), 
        '', 
        images.armouryItems.mageMacuahuitl
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedMageMacuahuitlSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('mage_macuahuitl_slash'), 
        '', 
        images.armouryItems.mageMacuahuitl
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const rapierSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('rapier_slash'), 
        '', 
        images.armouryItems.rapier
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedRapierSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('rapier_slash'), 
        '', 
        images.armouryItems.rapier
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const sabreSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sabre_slash'), 
        '', 
        images.armouryItems.sabre
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedSabreSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sabre_slash'), 
        '', 
        images.armouryItems.sabre
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const battlePistolSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_pistol_slash'), 
        '', 
        images.armouryItems.battlePistol
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedBattlePistolSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_pistol_slash'), 
        '', 
        images.armouryItems.battlePistol
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const battleRevolverSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_revolver_slash'), 
        '', 
        images.armouryItems.battleRevolver
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedBattleRevolverSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_revolver_slash'), 
        '', 
        images.armouryItems.battleRevolver
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const battleRifleSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_rifle_slash'), 
        '', 
        images.armouryItems.battleRifle
    ], 
    {Stamina: 2},
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
);

const affiliatedBattleRifleSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_rifle_slash'), 
        '', 
        images.armouryItems.battleRifle
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
);

const battleMageRifleSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_slash'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Stamina: 2},
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
);

const battleMageRifleWindSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_wind_slash'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Stamina: 2, Mana: 2},
    {[DamageType.physicalSlashing]: 4},
    [1, 70]
);

const affiliatedBattleMageRifleSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('battle_mage_rifle_slash'), 
        '', 
        images.armouryItems.battleMageRifle
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
);

const physicalSlashing = {
    axeSlash,
    battleAxeSlash,
    affiliatedBattleAxeSlash,
    battleMageAxeSlash,
    battleMageAxeWindSlash,
    affiliatedBattleMageAxeSlash,
    doubleAxeSlash,
    affiliatedDoubleAxeSlash,
    swordSlash,
    affiliatedSwordSlash,
    dualSwordsSlash,
    chakramSlash,
    affiliatedChakramSlash,
    steelGreataxeSlash,
    runicGreataxeSlash,
    steelGreatswordSlash,
    runicGreatswordSlash,

    cyberClawSlash,
    treeCutterSlash,
    leftClawSlash,
    rightClawSlash,
    bothClawsSlash,
    raptorJump,

    dragonBoneBladeSlash,
    affiliatedDragonBoneBladeSlash,
    mageDragonBoneBladeSlash,
    affiliatedMageDragonBoneBladeSlash,
    glaiveSlash,
    affiliatedGlaiveSlash,
    mageGlaiveSlash,
    mageGlaiveWindSlash,
    affiliatedMageGlaiveSlash,
    halberdSlash,
    affiliatedHalberdSlash,
    mageHalberdSlash,
    affiliatedMageHalberdSlash,
    katanaSlash,
    affiliatedKatanaSlash,
    khopeshSlash,
    affiliatedKhopeshSlash,
    mageKhopeshSlash,
    affiliatedMageKhopeshSlash,
    macuahuitlSlash,
    affiliatedMacuahuitlSlash,
    mageMacuahuitlSlash,
    affiliatedMageMacuahuitlSlash,
    rapierSlash,
    affiliatedRapierSlash,
    sabreSlash,
    affiliatedSabreSlash,

    battlePistolSlash,
    affiliatedBattlePistolSlash,
    battleRevolverSlash,
    affiliatedBattleRevolverSlash,
    battleRifleSlash,
    affiliatedBattleRifleSlash,
    battleMageRifleSlash,
    battleMageRifleWindSlash,
    affiliatedBattleMageRifleSlash
}

export default physicalSlashing
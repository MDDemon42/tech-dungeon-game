import { createArmouryItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import abilities from "../../../general/abilities";
import images from "../../../images/images";
import academyMasteries from "../../Academy/masteries";
import airMasteries from "../../AirSite/masteries";
import fireMasteries from "../../FireSite/masteries";
import guildMasteries from "../../Guild/masteries";
import coldMasteries from "../../IceSite/masteries";
import crafts from "../crafts";

const battleMageAxe = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_mage_axe'), 
        chrome.i18n.getMessage('battle_mage_axe_item_description'),
        images.armouryItems.battleMageAxe
    ],
    [
        3, 
        [
            InventoryPlace.rightHand,
            InventoryPlace.leftHand,
            InventoryPlace.extraLeftHand,
            InventoryPlace.extraRightHand,
            InventoryPlace.telekinesisLeftHand,
            InventoryPlace.telekinesisRightHand
        ], 
        1
    ],
    [
        '', 1,
        crafts.mageWeapons.craftBattleMageAxe
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.battleMageAxeSlash
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ], 
    [
        {
            linkedMastery: academyMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedBattleMageAxeSlash
        },
        {
            linkedMastery: fireMasteries.fireAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.battleMageAxeFireSlash
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.battleMageAxeColdSlash
        },
        {
            linkedMastery: airMasteries.windAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.battleMageAxeWindSlash
        }
    ]
);

const mageDragonBoneBlade = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_dragon_bone_blade'), 
        chrome.i18n.getMessage('mage_dragon_bone_blade_item_description'),
        images.armouryItems.mageDragonBoneBlade
    ],
    [
        3, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.mageWeapons.craftMageDragonBoneBlade
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.mageDragonBoneBladeSlash
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedMageDragonBoneBladeSlash
        },
        {
            linkedMastery: fireMasteries.fireAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.mageDragonBoneBladeFireSlash
        },
    ]
);

const mageGlaive = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_glaive'), 
        chrome.i18n.getMessage('mage_glaive_item_description'),
        images.armouryItems.mageGlaive
    ],
    [
        3, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.mageWeapons.craftMageGlaive
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.mageGlaiveSlash,
        abilities.battleAbilities.melee.physicalPiercing.mageGlaivePierce
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: academyMasteries.spearAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedMageGlaiveSlash
        },
        {
            linkedMastery: academyMasteries.spearAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalPiercing.affiliatedMageGlaivePierce
        },
        {
            linkedMastery: airMasteries.windAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.mageGlaiveWindSlash
        },
    ]
);

const mageHalberd = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_halberd'), 
        chrome.i18n.getMessage('mage_halberd_item_description'),
        images.armouryItems.mageHalberd
    ],
    [
        3, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.mageWeapons.craftMageHalberd
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.mageHalberdSlash
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: academyMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedMageHalberdSlash
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.mageHalberdColdSlash
        },
    ]
);

const mageKhopesh = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_khopesh'), 
        chrome.i18n.getMessage('mage_khopesh_item_description'),
        images.armouryItems.mageKhopesh
    ],
    [
        3, [InventoryPlace.rightHand], 1
    ],
    [
        '', 1,
        crafts.mageWeapons.craftMageKhopesh
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.mageKhopeshSlash
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedMageKhopeshSlash
        },
        {
            linkedMastery: fireMasteries.fireAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.mageKhopeshFireSlash
        },
    ]
);

const mageMacuahuitl = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_macuahuitl'), 
        chrome.i18n.getMessage('mage_macuahuitl_item_description'),
        images.armouryItems.mageMacuahuitl
    ],
    [
        3, [InventoryPlace.rightHand], 1
    ],
    [
        '', 1,
        crafts.mageWeapons.craftMageMacuahuitl
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.mageMacuahuitlSlash
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedMageMacuahuitlSlash
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.mageMacuahuitlColdSlash
        },
    ]
);

const mageMusket = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_musket'),
        chrome.i18n.getMessage('mage_musket_item_description'),
        images.armouryItems.mageMusket
    ],
    [
        3, [InventoryPlace.bothHands], 1
    ],
    [
        '', 1,
        crafts.mageWeapons.craftMageMusket
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.mageMusketShot
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ], 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterMageMusketShot
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.cold.frost
        },
    ]
);

const battleMageMusket = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_mage_musket'),
        chrome.i18n.getMessage('battle_mage_musket_item_description'),
        images.armouryItems.battleMageMusket
    ],
    [
        4, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.mageWeapons.craftBattleMageMusket
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.battleMageMusketShot,
        abilities.battleAbilities.melee.physicalPiercing.battleMageMusketPierce
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterBattleMageMusketShot
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.cold.frost
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.battleMageMusketColdPierce
        }
    ]
);

const mageRifle = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_rifle'),
        chrome.i18n.getMessage('mage_rifle_item_description'),
        images.armouryItems.mageRifle
    ],
    [
        4, [InventoryPlace.bothHands], 1
    ],
    [
        '', 1,
        crafts.mageWeapons.craftMageRifle
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.mageRifleDoubleShot
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterMageRifleDoubleShot
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.cold.frost
        },
        {
            linkedMastery: fireMasteries.fireAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.fire.flame
        },
        {
            linkedMastery: airMasteries.windAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.physicalSmashing.windBlow
        }
    ]
);

const battleMageRifle = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_mage_rifle'),
        chrome.i18n.getMessage('battle_mage_rifle_item_description'),
        images.armouryItems.battleMageRifle
    ],
    [
        5, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.mageWeapons.craftBattleMageRifle
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.battleMageRifleDoubleShot,
        abilities.battleAbilities.melee.physicalSlashing.battleMageRifleSlash
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterBattleMageMusketShot
        },
        {
            linkedMastery: academyMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedBattleMageRifleSlash
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.cold.frost
        },
        {
            linkedMastery: fireMasteries.fireAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.fire.flame
        },
        {
            linkedMastery: airMasteries.windAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.physicalSmashing.windBlow
        },
        {
            linkedMastery: coldMasteries.coldAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.battleMageRifleColdSlash
        },
        {
            linkedMastery: fireMasteries.fireAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.mixed.battleMageRifleFireSlash
        },
        {
            linkedMastery: airMasteries.windAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.battleMageRifleWindSlash
        }
    ]
);

const mageWand = createArmouryItem(
    [
        chrome.i18n.getMessage('mage_wand'), 
        chrome.i18n.getMessage('mage_wand_item_description'),
        images.armouryItems.mageWand
    ],
    [
        2, 
        [
            InventoryPlace.rightHand,
            InventoryPlace.leftHand
        ], 
        1
    ],
    [
        fireMasteries.fireAffiliation.name, 0,
        crafts.mageWeapons.craftMageWand
    ],
    [
        abilities.battleAbilities.ranged.fire.flame
    ], 
    [
        abilities.passiveAbilities.weapons.mageWeapon
    ],  
    null
);

const mageWeapons = {
    battleMageAxe,
    mageDragonBoneBlade,
    mageGlaive,
    mageHalberd,
    mageKhopesh,
    mageMacuahuitl,
    mageMusket,
    battleMageMusket,
    mageRifle,
    battleMageRifle,
    mageWand
}

export default mageWeapons
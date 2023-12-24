import { createArmouryItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import abilities from "../../../general/abilities";
import images from "../../../images/images";
import academyMasteries from "../../Academy/masteries";
import crafts from "../crafts";
import mansionMasteries from "../masteries";

const battleAxeRightHand = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_axe'), 
        chrome.i18n.getMessage('battle_axe_item_description'),
        images.armouryItems.battleAxe
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftBattleAxe
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.battleAxeSlash
    ], 
    null, 
    [
        {
            linkedMastery: mansionMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedBattleAxeSlash
        }
    ]
);

const battleAxeLeftHand = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_axe'), 
        chrome.i18n.getMessage('battle_axe_item_description'),
        images.armouryItems.battleAxe
    ],
    [
        2, InventoryPlace.leftHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftBattleAxe
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.battleAxeSlash
    ], 
    null, 
    [
        {
            linkedMastery: mansionMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedBattleAxeSlash
        }
    ]
);

const dragonBoneBlade = createArmouryItem(
    [
        chrome.i18n.getMessage('dragon_bone_blade'), 
        chrome.i18n.getMessage('dragon_bone_blade_item_description'),
        images.armouryItems.dragonBoneBlade
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftDragonBoneBlade
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.dragonBoneBladeSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedDragonBoneBladeSlash
        }
    ]
);

const glaive = createArmouryItem(
    [
        chrome.i18n.getMessage('glaive'), 
        chrome.i18n.getMessage('glaive_item_description'),
        images.armouryItems.glaive
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        '', 3,
        crafts.battleWeapons.craftGlaive
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.glaiveSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.spearAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedGlaiveSlash
        }
    ]
);

const halberd = createArmouryItem(
    [
        chrome.i18n.getMessage('halberd'), 
        chrome.i18n.getMessage('halberd_item_description'),
        images.armouryItems.halberd
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        '', 3,
        crafts.battleWeapons.craftHalberd
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.halberdSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.spearAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedHalberdSlash
        }
    ]
);

const katana = createArmouryItem(
    [
        chrome.i18n.getMessage('katana'), 
        chrome.i18n.getMessage('katana_item_description'),
        images.armouryItems.katana
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftKatana
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.katanaSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedKatanaSlash
        }
    ]
);

const khopesh = createArmouryItem(
    [
        chrome.i18n.getMessage('khopesh'), 
        chrome.i18n.getMessage('khopesh_item_description'),
        images.armouryItems.khopesh
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftKhopesh
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.khopeshSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedKhopeshSlash
        }
    ]
);

const macuahuitl = createArmouryItem(
    [
        chrome.i18n.getMessage('macuahuitl'), 
        chrome.i18n.getMessage('macuahuitl_item_description'),
        images.armouryItems.macuahuitl
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftMacuahuitl
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.macuahuitlSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedMacuahuitlSlash
        }
    ]
);

const rapier = createArmouryItem(
    [
        chrome.i18n.getMessage('rapier'), 
        chrome.i18n.getMessage('rapier_item_description'),
        images.armouryItems.rapier
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftRapier
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.rapierSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedRapierSlash
        }
    ]
);

const sabre = createArmouryItem(
    [
        chrome.i18n.getMessage('sabre'), 
        chrome.i18n.getMessage('sabre_item_description'),
        images.armouryItems.sabre
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '', 0,
        crafts.battleWeapons.craftSabre
    ],
    [
        abilities.battleAbilities.melee.physicalSlashing.sabreSlash
    ], 
    null, 
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedSabreSlash
        }
    ]
);

const battleWeapons = {
    battleAxeLeftHand,
    battleAxeRightHand,
    dragonBoneBlade,
    glaive,
    halberd,
    katana,
    khopesh,
    macuahuitl,
    rapier,
    sabre
}

export default battleWeapons
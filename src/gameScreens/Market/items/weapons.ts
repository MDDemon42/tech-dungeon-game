import { createItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";
import academyMasteries from "../../Academy/masteries";

const item_axeRightHand = createItem(
    [
        chrome.i18n.getMessage('axe'), 
        chrome.i18n.getMessage('axe_item_description'),
        images.normalItems.axe
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', 
        [abilities.battleAbilities.melee.physicalSlashing.axeSlash],
        academyMasteries.mastery_axeAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSlashing.affiliatedAxeSlash],
        null
    ]
)

const item_axeLeftHand = createItem(
    [
        chrome.i18n.getMessage('axe'), 
        chrome.i18n.getMessage('axe_item_description'),
        images.normalItems.axe
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        '', 
        [abilities.battleAbilities.melee.physicalSlashing.axeSlash],
        academyMasteries.mastery_axeAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSlashing.affiliatedAxeSlash],
        null
    ]
)

const item_steelSwordRightHand = createItem(
    [
        chrome.i18n.getMessage('steel_sword'), 
        chrome.i18n.getMessage('steel_sword_item_description'),
        images.normalItems.steelSword
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', 
        [
            abilities.battleAbilities.melee.physicalSlashing.swordSlash,
            abilities.battleAbilities.melee.physicalPiercing.swordStab
        ],
        academyMasteries.mastery_swordAffiliation.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.affiliatedSwordSlash,
            abilities.battleAbilities.melee.physicalPiercing.affiliatedSwordStab
        ],
        null
    ]
)

const item_steelSwordLeftHand = createItem(
    [
        chrome.i18n.getMessage('steel_sword'), 
        chrome.i18n.getMessage('steel_sword_item_description'),
        images.normalItems.steelSword
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        academyMasteries.mastery_dualSwords.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.swordSlash,
            abilities.battleAbilities.melee.physicalPiercing.swordStab
        ],
        academyMasteries.mastery_swordAffiliation.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.affiliatedSwordSlash,
            abilities.battleAbilities.melee.physicalPiercing.affiliatedSwordStab
        ],
        null
    ]
)

const item_steelMace = createItem(
    [
        chrome.i18n.getMessage('steel_mace'), 
        chrome.i18n.getMessage('steel_mace_item_description'),
        images.normalItems.steelMace
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    [
        '',
        [abilities.battleAbilities.melee.physicalSmashing.maceSmash],
        academyMasteries.mastery_maceAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSmashing.affiliatedMaceSmash],
        null
    ]
)

const item_spear = createItem(
    [
        chrome.i18n.getMessage('spear'), 
        chrome.i18n.getMessage('spear_item_description'),
        images.normalItems.spear
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', 
        [abilities.battleAbilities.melee.physicalPiercing.spearPierce],
        academyMasteries.mastery_spearAffiliation.name, 
        [abilities.battleAbilities.melee.physicalPiercing.affiliatedSpearPierce],
        null
    ]
)

const item_steelGreataxe = createItem(
    [
        chrome.i18n.getMessage('steel_greataxe'), 
        chrome.i18n.getMessage('steel_greataxe_item_description'),
        images.normalItems.steelGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        academyMasteries.mastery_brutalForce.name,
        [abilities.battleAbilities.melee.physicalSlashing.steelGreataxeSlash],
        '', null, null
    ]
)

const item_steelGreathammer = createItem(
    [
        chrome.i18n.getMessage('steel_greathammer'), 
        chrome.i18n.getMessage('steel_greathammer_item_description'),
        images.normalItems.steelGreathammer
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        academyMasteries.mastery_brutalForce.name,
        [abilities.battleAbilities.melee.physicalSmashing.steelGreathammerSmash],
        '', null, null
    ]
)

const item_steelGreatsword = createItem(
    [
        chrome.i18n.getMessage('steel_greatsword'), 
        chrome.i18n.getMessage('steel_greatsword_item_description'),
        images.normalItems.steelGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        academyMasteries.mastery_brutalForce.name,
        [abilities.battleAbilities.melee.physicalSlashing.steelGreatswordSlash],
        '', null, null
    ]
)

const item_oakBow = createItem(
    [
        chrome.i18n.getMessage('oak_bow'), 
        chrome.i18n.getMessage('oak_bow_item_description'),
        images.normalItems.oakBow
    ], 
    [
        1, InventoryPlace.bothHands, 1
    ],
    [
        '', 
        [abilities.battleAbilities.ranged.physicalPiercing.oakBowShot],
        academyMasteries.mastery_bowAffiliation.name,
        [abilities.battleAbilities.ranged.physicalPiercing.affiliatedOakBowShot],
        null
    ]
)

const pickaxe = createItem(
    [
        chrome.i18n.getMessage('pickaxe'), 
        chrome.i18n.getMessage('pickaxe_item_description'),
        images.misc.pickaxe
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '',
        [abilities.battleAbilities.melee.physicalPiercing.pickaxePick],
        '', null, null
    ]
)

const weapons = {
    item_axeRightHand,
    item_axeLeftHand,
    item_steelGreataxe,
    item_steelGreathammer,
    item_steelGreatsword,
    item_steelMace,
    item_spear,
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_oakBow,
    pickaxe
}

export default weapons
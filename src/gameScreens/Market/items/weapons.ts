import { createItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";
import academyMasteries from "../../Academy/masteries";

const steelSwordRightHand = createItem(
    [
        chrome.i18n.getMessage('steel_sword'), 
        chrome.i18n.getMessage('steel_sword_item_description'),
        images.normalItems.steelSword
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    '', 
    [
        abilities.battleAbilities.melee.physicalSlashing.swordSlash,
        abilities.battleAbilities.melee.physicalPiercing.swordStab
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedSwordSlash
        },
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalPiercing.affiliatedSwordStab
        }
    ]
);

const steelSwordLeftHand = createItem(
    [
        chrome.i18n.getMessage('steel_sword'), 
        chrome.i18n.getMessage('steel_sword_item_description'),
        images.normalItems.steelSword
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    academyMasteries.dualSwords.name,
    [
        abilities.battleAbilities.melee.physicalSlashing.swordSlash,
        abilities.battleAbilities.melee.physicalPiercing.swordStab
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedSwordSlash
        },
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalPiercing.affiliatedSwordStab
        }
    ]
);

const steelMace = createItem(
    [
        chrome.i18n.getMessage('steel_mace'), 
        chrome.i18n.getMessage('steel_mace_item_description'),
        images.normalItems.steelMace
    ],
    [
        2, InventoryPlace.rightHand, 1
    ],
    '',
    [
        abilities.battleAbilities.melee.physicalSmashing.maceSmash
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.maceAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSmashing.affiliatedMaceSmash
        }
    ]
);

const spear = createItem(
    [
        chrome.i18n.getMessage('spear'), 
        chrome.i18n.getMessage('spear_item_description'),
        images.normalItems.spear
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    '', 
    [
        abilities.battleAbilities.melee.physicalPiercing.spearPierce
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.spearAffiliation.name, 
            masterAbility: abilities.battleAbilities.melee.physicalPiercing.affiliatedSpearPierce
        }
    ]
);

const steelGreataxe = createItem(
    [
        chrome.i18n.getMessage('steel_greataxe'), 
        chrome.i18n.getMessage('steel_greataxe_item_description'),
        images.normalItems.steelGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    academyMasteries.brutalForce.name,
    [
        abilities.battleAbilities.melee.physicalSlashing.steelGreataxeSlash
    ],
    null, null
);

const steelGreathammer = createItem(
    [
        chrome.i18n.getMessage('steel_greathammer'), 
        chrome.i18n.getMessage('steel_greathammer_item_description'),
        images.normalItems.steelGreathammer
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    academyMasteries.brutalForce.name,
    [
        abilities.battleAbilities.melee.physicalSmashing.steelGreathammerSmash
    ],
    null, null
);

const steelGreatsword = createItem(
    [
        chrome.i18n.getMessage('steel_greatsword'), 
        chrome.i18n.getMessage('steel_greatsword_item_description'),
        images.normalItems.steelGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    academyMasteries.brutalForce.name,
    [
        abilities.battleAbilities.melee.physicalSlashing.steelGreatswordSlash
    ],
    null, null
);

const oakBow = createItem(
    [
        chrome.i18n.getMessage('oak_bow'), 
        chrome.i18n.getMessage('oak_bow_item_description'),
        images.normalItems.oakBow
    ], 
    [
        1, InventoryPlace.bothHands, 1
    ],
    '', 
    [
        abilities.battleAbilities.ranged.physicalPiercing.oakBowShot
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.bowAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.affiliatedOakBowShot
        }
    ]
);

const axe = createItem(
    [
        chrome.i18n.getMessage('axe'), 
        chrome.i18n.getMessage('axe_item_description'),
        images.normalItems.axe
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    '',
    [
        abilities.battleAbilities.melee.physicalSlashing.axeSlash
    ],
    null, null
);

const pickaxe = createItem(
    [
        chrome.i18n.getMessage('pickaxe'), 
        chrome.i18n.getMessage('pickaxe_item_description'),
        images.normalItems.pickaxe
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    '',
    [
        abilities.battleAbilities.melee.physicalPiercing.pickaxePick
    ],
    null, null
);

const weapons = {
    steelGreataxe,
    steelGreathammer,
    steelGreatsword,
    steelMace,
    spear,
    steelSwordRightHand,
    steelSwordLeftHand,
    oakBow,
    axe,
    pickaxe
}

export default weapons
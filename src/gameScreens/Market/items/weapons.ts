import { createItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";
import academyMasteries from "../../Academy/masteries";

const steelSword = createItem(
    [
        chrome.i18n.getMessage('steel_sword'), 
        chrome.i18n.getMessage('steel_sword_item_description'),
        images.normalItems.steelSword
    ],
    [
        1, 
        [
            InventoryPlace.leftHipItem,
            InventoryPlace.rightHipItem,
            InventoryPlace.rightHand,
            InventoryPlace.leftHand,
            InventoryPlace.extraLeftHand,
            InventoryPlace.extraRightHand,
            InventoryPlace.telekinesisLeftHand,
            InventoryPlace.telekinesisRightHand
        ], 
        1
    ],
    '', 1,
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
        2, 
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
    '', 2,
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

const pierceStick = createItem(
    [
        chrome.i18n.getMessage('pierce_stick'), 
        chrome.i18n.getMessage('pierce_stick_item_description'),
        images.normalItems.pierceStick
    ],
    [
        1, [InventoryPlace.bothHands], 1
    ],
    '', 0,
    [
        abilities.battleAbilities.melee.physicalPiercing.stickPierce
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.spearAffiliation.name, 
            masterAbility: abilities.battleAbilities.melee.physicalPiercing.affiliatedStickPierce
        },
        {
            linkedMastery: academyMasteries.spearAffiliation.name, 
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.pierceStickThrow
        }
    ]
);

const steelSpear = createItem(
    [
        chrome.i18n.getMessage('steel_spear'), 
        chrome.i18n.getMessage('steel_spear_item_description'),
        images.normalItems.steelSpear
    ],
    [
        1, [InventoryPlace.bothHands], 1
    ],
    '', 2,
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
        2, [InventoryPlace.bothHands], 1
    ],
    academyMasteries.brutalForce.name, 2,
    [
        abilities.battleAbilities.melee.physicalSlashing.steelGreataxeSlash
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.axeAffiliation.name, 
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedSteelGreataxeSlash
        }
    ]
);

const steelGreathammer = createItem(
    [
        chrome.i18n.getMessage('steel_greathammer'), 
        chrome.i18n.getMessage('steel_greathammer_item_description'),
        images.normalItems.steelGreathammer
    ],
    [
        2, [InventoryPlace.bothHands], 1
    ],
    academyMasteries.brutalForce.name, 3,
    [
        abilities.battleAbilities.melee.physicalSmashing.steelGreathammerSmash
    ],
    null, 
    [
        {
            linkedMastery: academyMasteries.maceAffiliation.name, 
            masterAbility: abilities.battleAbilities.melee.physicalSmashing.affiliatedSteelGreathammerSlash
        }
    ]
);

const steelGreatsword = createItem(
    [
        chrome.i18n.getMessage('steel_greatsword'), 
        chrome.i18n.getMessage('steel_greatsword_item_description'),
        images.normalItems.steelGreatsword
    ],
    [
        2, 
        [
            InventoryPlace.backItem,
            InventoryPlace.bothHands
        ], 
        1
    ],
    academyMasteries.brutalForce.name, 2,
    [
        abilities.battleAbilities.melee.physicalSlashing.steelGreatswordSlash
    ],
    null,
    [
        {
            linkedMastery: academyMasteries.swordAffiliation.name, 
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedSteelGreatswordSlash
        }
    ]
);

const oakBow = createItem(
    [
        chrome.i18n.getMessage('oak_bow'), 
        chrome.i18n.getMessage('oak_bow_item_description'),
        images.normalItems.oakBow
    ], 
    [
        1, 
        [
            InventoryPlace.shouldersItem,
            InventoryPlace.bothHands
        ], 
        1
    ],
    '', 0,
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
        chrome.i18n.getMessage('axe_item_description', 
            ['1', chrome.i18n.getMessage('wood')]
        ),
        images.normalItems.axe
    ],
    [
        1, 
        [
            InventoryPlace.extraLeftHand, InventoryPlace.extraRightHand,
            InventoryPlace.rightHand, InventoryPlace.leftHand,
            InventoryPlace.telekinesisLeftHand, InventoryPlace.telekinesisRightHand
        ], 
        1
    ],
    '', 0,
    [
        abilities.battleAbilities.melee.physicalSlashing.axeSlash
    ],
    null, 
    [
        {
            linkedMastery: academyMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedAxeSlash
        }
    ]    
);

const pickaxe = createItem(
    [
        chrome.i18n.getMessage('pickaxe'), 
        chrome.i18n.getMessage('pickaxe_item_description',
            ['1', chrome.i18n.getMessage('ore')]
        ),
        images.normalItems.pickaxe
    ],
    [
        1, 
        [
            InventoryPlace.extraLeftHand, InventoryPlace.extraRightHand,
            InventoryPlace.rightHand, InventoryPlace.leftHand,
            InventoryPlace.telekinesisLeftHand, InventoryPlace.telekinesisRightHand
        ],  
        1
    ],
    '', 0,
    [
        abilities.battleAbilities.melee.physicalPiercing.pickaxePick
    ],
    null, null
);

const weapons = {
    axe,
    oakBow,
    pickaxe,
    pierceStick,
    steelGreataxe,
    steelGreathammer,
    steelGreatsword,
    steelMace,
    steelSpear,
    steelSword    
}

export default weapons
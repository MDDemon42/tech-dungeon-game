import { createItem } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";
import masteries from "../../masteries/masteries";

const item_apprenticeRod = createItem(
    [
        chrome.i18n.getMessage('apprentice_rod'), 
        chrome.i18n.getMessage('apprentice_rod_item_description'),
        images.wizardItems.apprenticeRod
    ],
    [
        1, InventoryPlace.bothHands, 1
    ],
    [
        masteries.mastery_scholarship.name,
        null, '', null
    ],
    null
)

const item_magisterScepter = createItem(
    [
        chrome.i18n.getMessage('magister_scepter'), 
        chrome.i18n.getMessage('magister_scepter_item_description'),
        images.wizardItems.magisterScepter
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        masteries.mastery_magisterDegree.name,
        null, '', null
    ],
    null
)

const item_steelAxeRightHand = createItem(
    [
        chrome.i18n.getMessage('steel_axe'), 
        chrome.i18n.getMessage('steel_axe_item_description'),
        images.normalItems.steelAxe
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_axeSlash,
        masteries.mastery_axeAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedAxeSlash]
    ],
    null
)

const item_steelAxeLeftHand = createItem(
    [
        chrome.i18n.getMessage('steel_axe'), 
        chrome.i18n.getMessage('steel_axe_item_description'),
        images.normalItems.steelAxe
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_axeSlash,
        masteries.mastery_axeAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedAxeSlash]
    ],
    null
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
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_swordSlash,
        masteries.mastery_swordAffiliation.name,
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedSwordSlash,]
    ],
    null
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
        masteries.mastery_dualSwords.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_swordSlash,
        masteries.mastery_swordAffiliation.name,
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedSwordSlash,]
    ],
    null
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
        '', abilities.battleAbilities.melee.physicalSmashing.battleAbility_maceSmash,
        masteries.mastery_maceAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSmashing.battleAbility_affiliatedMaceSmash]
    ],
    null
)

const item_steelSpear = createItem(
    [
        chrome.i18n.getMessage('steel_spear'), 
        chrome.i18n.getMessage('steel_spear_item_description'),
        images.normalItems.steelSpear
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalPiercing.battleAbility_spearPierce,
        masteries.mastery_spearAffiliation.name, 
        [abilities.battleAbilities.melee.physicalPiercing.battleAbility_affiliatedSpearPierce]
    ],
    null
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
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_steelGreataxeSlash,
        '', null
    ],
    null
)

const item_runicGreataxe = createItem(
    [
        chrome.i18n.getMessage('runic_greataxe'), 
        chrome.i18n.getMessage('runic_greataxe_item_description'),
        images.guildianLearnings.runicGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreataxeSlash,
        masteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreataxeSlash,
            abilities.battleAbilities.melee.cold.battleAbility_runicGreataxeSlash
        ]
    ],
    null
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
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_steelGreatswordSlash,
        '', null
    ],
    null
)

const item_runicGreatsword = createItem(
    [
        chrome.i18n.getMessage('runic_greatsword'), 
        chrome.i18n.getMessage('runic_greatsword_item_description'),
        images.guildianLearnings.runicGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreatswordSlash,
        masteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreatswordSlash,
            abilities.battleAbilities.melee.fire.battleAbility_runicGreatswordSlash
        ]
    ],
    null
)

const item_oakBow = createItem(
    [
        chrome.i18n.getMessage('oak_bow'), 
        chrome.i18n.getMessage('oak_bow_item_description'),
        images.normalItems.bow
    ], 
    [
        1, InventoryPlace.bothHands, 1
    ],
    [
        '', abilities.battleAbilities.ranged.physicalPiercing.battleAbility_oakBowShot,
        masteries.mastery_bowAffiliation.name,
        [abilities.battleAbilities.ranged.physicalPiercing.battleAbility_affiliatedOakBowShot]
    ],
    null
)

const item_oakCrossow = createItem(
    [
        chrome.i18n.getMessage('oak_crossbow'), 
        chrome.i18n.getMessage('oak_crossbow_item_description'),
        images.normalItems.crossbow
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        '', abilities.battleAbilities.ranged.physicalPiercing.battleAbility_crossbowShot,
        masteries.mastery_marksmanship.name,
        [abilities.battleAbilities.ranged.physicalPiercing.battleAbility_masterCrossbowShot]
    ],
    null
)

const item_steelChakram = createItem(
    [
        chrome.i18n.getMessage('steel_chakram'), 
        chrome.i18n.getMessage('steel_chakram_item_description'),
        images.guildianLearnings.chakram
    ],
    [
        2, InventoryPlace.leftHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_chakramSlash,
        masteries.mastery_chakramAffiliation.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedChakramSlash,
            abilities.battleAbilities.ranged.physicalSlashing.battleAbility_chakramThrow
        ]
    ],
    null
)

const item_acidBomd = createItem(
    [
        chrome.i18n.getMessage('acid_bomb'), 
        chrome.i18n.getMessage('acid_bomb_item_description'),
        images.normalItems.acidBomb
    ],
    [
        1, InventoryPlace.rightPocket, 1
    ],
    [
        '', abilities.battleAbilities.ranged.acid.battleAbility_acidBombThrow,
        masteries.mastery_bombThrowing.name, 
        [abilities.battleAbilities.ranged.acid.battleAbility_masterAcidBombThrow]
    ],
    null
)

const weapons = {
    item_apprenticeRod,
    item_magisterScepter,
    item_steelAxeRightHand,
    item_steelAxeLeftHand,
    item_steelGreataxe,
    item_steelGreatsword,
    item_steelMace,
    item_steelSpear,
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_runicGreataxe,
    item_runicGreatsword,
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_acidBomd
}

export default weapons
import { createItem } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";
import masteries from "../../masteries/masteries";

const item_apprenticeHat = createItem(
    [
        chrome.i18n.getMessage('apprentice_hat'),
        chrome.i18n.getMessage('apprentice_hat_item_description'),
        images.wizardItems.apprenticeHat
    ], 
    [
        1, InventoryPlace.hat, 1
    ],
    [
        masteries.mastery_scholarship.name,
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_apprenticeHat
)

const item_flyingCape = createItem(
    [
        chrome.i18n.getMessage('flying_cape'),
        chrome.i18n.getMessage('flying_cape_item_description'),
        images.wizardItems.flyingCape
    ],
    [
        2, InventoryPlace.back, 2
    ],
    [
        '', null, '', null
    ],
    null
)

const item_magisterHat = createItem(
    [
        chrome.i18n.getMessage('magister_hat'),
        chrome.i18n.getMessage('magister_hat_item_description'),
        images.wizardItems.magisterHat
    ],
    [
        2, InventoryPlace.hat, 2
    ],
    [
        masteries.mastery_magisterDegree.name,
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_magisterHat
)

const item_magisterRobe = createItem(
    [
        chrome.i18n.getMessage('magister_robe'),
        chrome.i18n.getMessage('magister_robe_item_description'),
        images.wizardItems.magisterRobe
    ],
    [
        2, InventoryPlace.armor, 2
    ],
    [
        masteries.mastery_magisterDegree.name,
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_magisterRobe
)

const item_leatherArmor = createItem(
    [
        chrome.i18n.getMessage('leather_armor'),
        chrome.i18n.getMessage('leather_armor_item_description'),
        images.normalItems.leatherArmor
    ],
    [
        1, InventoryPlace.armor, 1
    ],
    [
        '', null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_leatherArmor
)

const item_steelArmor = createItem(
    [
        chrome.i18n.getMessage('steel_armor'),
        chrome.i18n.getMessage('steel_armor_item_description'),
        images.normalItems.steelArmor
    ], 
    [
        2, InventoryPlace.armor, 2
    ],
    [
        masteries.mastery_brutalForce.name, 
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_steelArmor
)

const item_steelShield = createItem(
    [
        chrome.i18n.getMessage('steel_shield'),
        chrome.i18n.getMessage('steel_shield_item_description'),
        images.normalItems.steelShield
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        '', null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_steelShield
)

const armors = {
    item_apprenticeHat,
    item_flyingCape,
    item_magisterHat,
    item_magisterRobe,
    item_leatherArmor,
    item_steelArmor,
    item_steelShield
}

export default armors
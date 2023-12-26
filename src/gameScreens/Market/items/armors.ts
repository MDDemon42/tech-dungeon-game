import { createItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";
import academyMasteries from "../../Academy/masteries";

const leatherArmor = createItem(
    [
        chrome.i18n.getMessage('leather_armor'),
        chrome.i18n.getMessage('leather_armor_item_description'),
        images.normalItems.leatherArmor
    ],
    [
        1, [InventoryPlace.armor], 1
    ],
    '', null,
    [
        abilities.passiveAbilities.armor.leatherArmor
    ],
    null
)

const steelArmor = createItem(
    [
        chrome.i18n.getMessage('steel_armor'),
        chrome.i18n.getMessage('steel_armor_item_description'),
        images.normalItems.steelArmor
    ], 
    [
        2, [InventoryPlace.armor], 2
    ],
    academyMasteries.brutalForce.name,
    null,
    [
        abilities.passiveAbilities.armor.steelArmor
    ],
    null
)

const steelShield = createItem(
    [
        chrome.i18n.getMessage('steel_shield'),
        chrome.i18n.getMessage('steel_shield_item_description'),
        images.normalItems.steelShield
    ],
    [
        1, [InventoryPlace.leftHand], 1
    ],
    '', null,
    [abilities.passiveAbilities.armor.steelShield],
    null
)

const woodenShield = createItem(
    [
        chrome.i18n.getMessage('wooden_shield'),
        chrome.i18n.getMessage('wooden_shield_item_description'),
        images.normalItems.woodenShield
    ],
    [
        1, [InventoryPlace.leftHand], 1
    ],
    '', null,
    [
        abilities.passiveAbilities.armor.woodenShield
    ],
    null
)

const armors = {
    leatherArmor,
    steelArmor,
    steelShield,
    woodenShield
}

export default armors
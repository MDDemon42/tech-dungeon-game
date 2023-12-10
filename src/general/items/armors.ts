import { createItem } from ".";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import images from "../../images/images";
import abilities from "../abilities";
import masteries from "../masteries/masteries";

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
        '', null, '', null,
        abilities.passiveAbilities.armor.passiveAbility_leatherArmor
    ]
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
        null, '', null,
        abilities.passiveAbilities.armor.passiveAbility_steelArmor
    ]
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
        '', null, '', null,
        abilities.passiveAbilities.armor.passiveAbility_steelShield
    ]
)

const item_woodenShield = createItem(
    [
        chrome.i18n.getMessage('wooden_shield'),
        chrome.i18n.getMessage('wooden_shield_item_description'),
        images.normalItems.woodenShield
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        '', null, '', null,
        abilities.passiveAbilities.armor.passiveAbility_woodenShield
    ]
)

const armors = {
    item_leatherArmor,
    item_steelArmor,
    item_steelShield,
    item_woodenShield
}

export default armors
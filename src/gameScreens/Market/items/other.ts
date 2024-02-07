import { createItem } from ".";
import { InventoryPlace, InventorySlotCategory } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const healingPotion = createItem(
    [
        chrome.i18n.getMessage('healing_potion'), 
        chrome.i18n.getMessage('healing_potion_item_description'),
        images.normalItems.healingPotion
    ], 
    [
        1, 
        [
            InventoryPlace.leftPocket, 
            InventoryPlace.rightPocket
        ], 
        1
    ],
    '', 0, null, null, null
);

const sheath = createItem(
    [
        chrome.i18n.getMessage('sheath'), 
        chrome.i18n.getMessage('sheath_item_description'),
        images.normalItems.sheath
    ], 
    [
        0, 
        [
            InventoryPlace.leftHip, 
            InventoryPlace.rightHip
        ], 
        1
    ],
    '', 0, null, null, null
);

const greatSheath = createItem(
    [
        chrome.i18n.getMessage('great_sheath'), 
        chrome.i18n.getMessage('great_sheath_item_description'),
        images.normalItems.greatSheath
    ], 
    [
        0, [InventoryPlace.back], 1
    ],
    '', 0, null, null, null
);

const quiver = createItem(
    [
        chrome.i18n.getMessage('quiver'), 
        chrome.i18n.getMessage('quiver_item_description'),
        images.normalItems.quiver
    ], 
    [
        0, [InventoryPlace.shoulders], 1
    ],
    '', 0, null, null, null
);

const food = createItem(
    [
        chrome.i18n.getMessage('food'), 
        chrome.i18n.getMessage('food_item_description'),
        images.normalItems.food
    ], 
    [
        1, [InventoryPlace.belt], 1
    ],
    '', 0, null, null, null, null, 
    InventorySlotCategory.resource
);

const mutaGene = createItem(
    [
        chrome.i18n.getMessage('muta_gene'), 
        chrome.i18n.getMessage('muta_gene_item_description'),
        images.normalItems.mutaGene
    ], 
    [
        2, [InventoryPlace.belt], 1
    ],
    '', 0, null, null, null, null, 
    InventorySlotCategory.resource
);

const mechaCore = createItem(
    [
        chrome.i18n.getMessage('mecha_core'), 
        chrome.i18n.getMessage('mecha_core_item_description'),
        images.normalItems.mechaCore
    ], 
    [
        2, [InventoryPlace.belt], 1
    ],
    '', 0, null, null, null, null, 
    InventorySlotCategory.resource
);

const other = {
    food,
    greatSheath,
    healingPotion,
    mechaCore,
    mutaGene,
    quiver,
    sheath
}

export default other
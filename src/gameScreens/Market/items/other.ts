import { createItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
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

const other = {
    healingPotion,
    sheath
}

export default other
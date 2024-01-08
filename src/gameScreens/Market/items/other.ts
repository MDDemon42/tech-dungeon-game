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
)

const other = {
    healingPotion
}

export default other
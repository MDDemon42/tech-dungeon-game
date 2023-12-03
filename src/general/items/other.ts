import { createItem } from ".";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import images from "../../images/images";

const item_healingPotion = createItem(
    [
        chrome.i18n.getMessage('healing_potion'), 
        chrome.i18n.getMessage('healing_potion_item_description'),
        images.normalItems.healingPotion
    ], 
    [
        1, InventoryPlace.leftPocket, 1
    ],
    [
        '', null, '', null, null
    ]    
)

const other = {
    item_healingPotion
}

export default other
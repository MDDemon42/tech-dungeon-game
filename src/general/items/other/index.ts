import { createItem } from "..";
import images from "../../../images/images";
import { InventoryPlaces } from "../../../interfaces/interfaces";

const item_healingPotion = createItem(
    [
        'Healing potion', 
        'Drink of herbs',
        images.normalItems.healingPotion
    ], 
    [
        1, InventoryPlaces.leftPocket, 1
    ],
    [
        null, null, null, null
    ]
)

const other = {
    item_healingPotion
}

export default other
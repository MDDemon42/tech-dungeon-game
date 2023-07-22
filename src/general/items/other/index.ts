import { createItem } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const item_healingPotion = createItem(
    [
        'Healing potion', 
        'Drink of herbs',
        images.normalItems.healingPotion
    ], 
    [
        1, InventoryPlace.leftPocket, 1
    ],
    [
        null, null, null, null
    ]
)

const other = {
    item_healingPotion
}

export default other
import { createItem } from "..";
import images from "../../../images/images";
import { InventoryPlaces } from "../../../types/interfaces";

const item_healingPotion = createItem(
    'Healing potion', 'Drink of herbs',
    images.normalItems.healingPotion, 
    1, InventoryPlaces.leftPocket,
    null, null, null, null, 1
)

const other = {
    item_healingPotion
}

export default other
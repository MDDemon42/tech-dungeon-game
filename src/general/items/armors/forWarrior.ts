import { createItem } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"
import masteries from "../../masteries/masteries"

const item_leatherArmor = createItem(
    'Leather armor', 'Usual leather armor',
    images.normalItems.leatherArmor,
    1, InventoryPlaces.armor,
    null, null, null, null, 1
)

const item_steelArmor = createItem(
    'Steel armor', 'Massive steel armor',
    images.normalItems.steelArmor, 
    2, InventoryPlaces.armor,
    masteries.mastery_brutalForce, null, 
    null, null, 2
)

const item_steelShield = createItem(
    'Steel shield', 'Usual steel shield',
    images.normalItems.shield,
    1, InventoryPlaces.leftHand,
    null, null, null, null, 1
)

const forWarrior = {
    item_leatherArmor,
    item_steelArmor,
    item_steelShield
}

export default forWarrior
import items from "../general/items/items";
import mutations from "../general/mutations/mutations";
import { emptyInventory, placeAsKey } from "../redux/slices/generalUser";
import store from "../redux/store";
import { BodyParts, IInventorySlot, InventoryPlaces } from "../types/interfaces";

function checkPriority(
    slot: IInventorySlot,
    position: InventoryPlaces | BodyParts
) {
    const name_new = slot.name;
    const priority_new = slot.priority;

    const inventory = store.getState().generalUser.inventory || emptyInventory();
    const name_old = inventory[placeAsKey(position)].name;
    const priority_old = inventory[placeAsKey(position)].priority;

    if (
        (
            position === InventoryPlaces.leftHand ||
            position === InventoryPlaces.rightHand ||
            name_new === items.item_oakBow.name
        ) && inventory.bothHands.name === mutations.mutation_claws.name
    ) {
        return priority_new > mutations.mutation_claws.priority
    } 
    
    if (position === InventoryPlaces.bothHands) {
        if (
            inventory.leftHand.priority > priority_new ||
            inventory.rightHand.priority > priority_new ||
            inventory.bothHands.priority > priority_new ||
            name_new === name_old
        ) {
            return false
        } else {
            return true
        }
    } 
    
    return priority_new > priority_old
}

function prioritisationChecker(slot: IInventorySlot) {
    const ip = slot.inventoryPlace ? slot.inventoryPlace : null;
    const bp = slot.bodyPart ? slot.bodyPart : null;

    const position = ip || bp || InventoryPlaces.belt;

    return checkPriority(slot, position)
}

export default prioritisationChecker
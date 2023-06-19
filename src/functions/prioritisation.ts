import items from "../general/items/items";
import mutations from "../general/mutations/mutations";
import { emptyInventory, placeAsKey } from "../redux/slices/generalUser";
import store from "../redux/store";
import { IInventorySlot, InventoryPlaces } from "../types/interfaces";

function checkPriority(
    slot: IInventorySlot,
    position: InventoryPlaces
) {
    
}

function prioritisationChecker(slot: IInventorySlot) {
    const position = slot.inventoryPlace;

    const name_new = slot.name;
    const priority_new = slot.priority;

    const inventory = store.getState().generalUser.inventory || emptyInventory();
    const name_old = inventory[placeAsKey(position)].name;
    const priority_old = inventory[placeAsKey(position)].priority;

    const result = name_old !== name_new && priority_new >= priority_old;

    if (position === InventoryPlaces.bothHands) {
        return result &&
            priority_new >= inventory[placeAsKey(InventoryPlaces.leftHand)].priority &&
            priority_new >= inventory[placeAsKey(InventoryPlaces.rightHand)].priority
    }
    
    return result
}

export default prioritisationChecker
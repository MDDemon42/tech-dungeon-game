import { emptyInventory } from "../general/characters/characters";
import { placeAsKey } from "../redux/slices/gameSquad";
import store from "../redux/store";
import { IInventorySlot, InventoryPlaces } from "../types/interfaces";

function priorityChecker(slot: IInventorySlot) {
    const position = slot.inventoryPlace;

    const name_new = slot.name;
    const priority_new = slot.priority;

    const index = store.getState().gameSquad.currentlyWatched;
    const inventory = store.getState().gameSquad.squadMembers[index]?.general.inventory || emptyInventory();
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

export default priorityChecker
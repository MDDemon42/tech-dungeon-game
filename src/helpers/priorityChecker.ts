import { createEmptyInventory } from "./emptyEssencesCreators";
import { placeAsKey } from "../redux/slices/gameSquad";
import store from "../redux/store";
import { IInventorySlot } from "../enums-and-interfaces/interfaces";
import { InventoryPlace } from "../enums-and-interfaces/enums";

function priorityChecker(slot: IInventorySlot) {
    const position = slot.inventoryPlace;

    const name_new = slot.name;
    const priority_new = slot.priority;

    const index = store.getState().gameSquad.currentlyWatched;
    const inventory = store.getState().gameSquad.squadMembers[index]?.general.inventory || createEmptyInventory();
    const name_old = inventory[placeAsKey(position)].name;
    const priority_old = inventory[placeAsKey(position)].priority;

    const result = name_old !== name_new && priority_new >= priority_old;

    if (position === InventoryPlace.bothHands) {
        return result &&
            priority_new >= inventory.leftHand.priority &&
            priority_new >= inventory.rightHand.priority
    }

    if (
        position === InventoryPlace.leftHand ||
        position === InventoryPlace.rightHand
    ) {
        return result && priority_new >= inventory.bothHands.priority
    }
    
    return result
}

export default priorityChecker
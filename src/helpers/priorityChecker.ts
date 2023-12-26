import { createEmptyInventory } from "./emptyEssencesCreators";
import { placeAsKey } from "../redux/slices/gameSquad";
import store from "../redux/store";
import { IInventorySlot } from "../enums-and-interfaces/interfaces";
import { InventoryPlace } from "../enums-and-interfaces/enums";

function priorityChecker(slot: IInventorySlot) {
    let result = false;

    const possiblePositions = slot.inventoryPlaces;
    const name_new = slot.name;
    const priority_new = slot.priority;
    const index = store.getState().gameSquad.currentlyWatched;
    const inventory = store.getState().gameSquad.squadMembers[index].general.inventory || createEmptyInventory();

    if (possiblePositions.length === 1) {
        const position = possiblePositions[0];
        const name_old = inventory[placeAsKey(position)]?.name || '';
        const priority_old = inventory[placeAsKey(position)]?.priority || 0;

        result = name_old !== name_new && priority_new >= priority_old;
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
    } else {
        const handsOptions: (InventoryPlace.leftHand | InventoryPlace.extraLeftHand |
        InventoryPlace.rightHand | InventoryPlace.extraRightHand)[] = [
            InventoryPlace.leftHand, InventoryPlace.extraLeftHand,
            InventoryPlace.rightHand, InventoryPlace.extraRightHand
        ];

        for (const option of handsOptions) {
            if (possiblePositions.includes(option)) {
                const name_option = inventory[placeAsKey(option)]?.name || '';
                const priority_option = inventory[placeAsKey(option)]?.priority || 0;

                result = result || (name_option !== name_new && 
                    priority_option <= priority_new);

                if (
                    option === InventoryPlace.leftHand ||
                    option === InventoryPlace.rightHand
                ) {
                    result = result && priority_new >= inventory.bothHands.priority
                }
            }
        }
    }    
    
    return result
}

export default priorityChecker
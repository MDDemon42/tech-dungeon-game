import { createEmptyInventory } from "./emptyEssencesCreators";
import { placeAsKey } from "../redux/slices/gameSquad";
import store from "../redux/store";
import { IInventorySlot, IItem } from "../enums-and-interfaces/interfaces";
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
            InventoryPlace.telekinesisLeftHand | InventoryPlace.telekinesisRightHand |
            InventoryPlace.rightHand | InventoryPlace.extraRightHand)[] = 
        [
            InventoryPlace.leftHand, InventoryPlace.extraLeftHand,
            InventoryPlace.rightHand, InventoryPlace.extraRightHand,
            InventoryPlace.telekinesisLeftHand, InventoryPlace.telekinesisRightHand
        ];

        for (const option of handsOptions) {
            if (possiblePositions.includes(option)) {
                const thisOptionItem = {...inventory[placeAsKey(option)]} as IItem | null;
                if (!thisOptionItem) {
                    continue;
                }
                
                result = result || (thisOptionItem.name !== name_new && 
                    thisOptionItem.priority <= priority_new);

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
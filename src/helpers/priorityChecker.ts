import { createEmptyInventory } from "./emptyEssencesCreators";
import store from "../redux/store";
import { IInventorySlot, IItem } from "../enums-and-interfaces/interfaces";
import { InventoryPlace } from "../enums-and-interfaces/enums";

function priorityChecker(slot: IInventorySlot) {
    let result = false;

    const possiblePositions = slot.inventoryPlaces;
    const name_new = slot.name;
    const priority_new = slot.priority;
    const index = store.getState().gameSquad.currentlyWatched;
    const inventory = store.getState().gameSquad.squadMembers[index].general.inventory 
        || createEmptyInventory();

    const handsOptions: 
    (   
        InventoryPlace.rightHipItem | InventoryPlace.leftHipItem |
        InventoryPlace.leftHand | InventoryPlace.extraLeftHand |
        InventoryPlace.telekinesisLeftHand | InventoryPlace.telekinesisRightHand |
        InventoryPlace.rightHand | InventoryPlace.extraRightHand
    )[] = 
    [
        InventoryPlace.rightHipItem, InventoryPlace.leftHipItem,
        InventoryPlace.leftHand, InventoryPlace.extraLeftHand,
        InventoryPlace.rightHand, InventoryPlace.extraRightHand,
        InventoryPlace.telekinesisLeftHand, InventoryPlace.telekinesisRightHand
    ];

    const hipOptions: 
    (
        InventoryPlace.leftHip | InventoryPlace.rightHip
    )[] = 
    [
        InventoryPlace.leftHip, InventoryPlace.rightHip
    ];

    const doubleBackOptions: 
    (
        InventoryPlace.backItem | 
        InventoryPlace.bothHands |
        InventoryPlace.shouldersItem
    )[] = 
    [
        InventoryPlace.backItem, 
        InventoryPlace.shouldersItem,
        InventoryPlace.bothHands
    ];

    if (possiblePositions.length === 1) {
        const position = possiblePositions[0];
        const name_old = inventory[position]?.name || '';
        const priority_old = inventory[position]?.priority || 0;

        result = name_old !== name_new && priority_new >= priority_old;
        if (position === InventoryPlace.bothHands) {
            return result &&
                priority_new >= inventory.Left_hand.priority &&
                priority_new >= inventory.Right_hand.priority
        }

        if (
            position === InventoryPlace.leftHand ||
            position === InventoryPlace.rightHand
        ) {
            return result && priority_new >= inventory.Both_hands.priority
        }
        // @ts-expect-error
    } else if (handsOptions.includes(possiblePositions[0])) {
        for (const option of handsOptions) {
            if (possiblePositions.includes(option)) {
                const thisOptionItem = {...inventory[option]} as IItem | null;
                if (!thisOptionItem) {
                    continue;
                }
                
                result = result || (thisOptionItem.name !== name_new && 
                    thisOptionItem.priority <= priority_new);

                if (
                    option === InventoryPlace.leftHand ||
                    option === InventoryPlace.rightHand
                ) {
                    result = result && priority_new >= inventory.Both_hands.priority
                }
            }
        }
        // @ts-expect-error
    } else if (hipOptions.includes(possiblePositions[0])) {
        for (const option of hipOptions) {
            if (possiblePositions.includes(option)) {
                const thisOptionItem = {...inventory[option]} as IItem | null;
                if (!thisOptionItem) {
                    continue;
                }
                
                result = result || (thisOptionItem.name !== name_new && 
                    thisOptionItem.priority <= priority_new);
            }
        }
        // @ts-expect-error
    } else if (doubleBackOptions.includes(possiblePositions[0])) {
        for (const option of doubleBackOptions) {
            if (possiblePositions.includes(option)) {
                const thisOptionItem = {...inventory[option]} as IItem | null;
                if (!thisOptionItem) {
                    continue;
                }

                if (option === InventoryPlace.bothHands) {
                    const name_old = inventory[option].name;
                    const priority_old = inventory[option].priority;

                    result = result || (name_old !== name_new && priority_new >= priority_old);

                    return result &&
                        priority_new >= inventory.Left_hand.priority &&
                        priority_new >= inventory.Right_hand.priority
                }
                
                result = result || (thisOptionItem.name !== name_new && 
                    thisOptionItem.priority <= priority_new);
            }
        }
    }
    
    return result
}

export default priorityChecker
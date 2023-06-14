import cybers from "../general/cybers/cybers";
import items from "../general/items/items";
import mutations from "../general/mutations/mutations";
import { emptyInventory, noItem, placeAsKey } from "../redux/slices/generalUser";
import store from "../redux/store";
import { BodyParts, IHandSlot, InventoryPlaces } from "../types/interfaces";

const leftHandSlotChain = [
    noItem.name,
    items.item_steelShield.name,
    items.item_runicSword.name, 
    cybers.cyber_laser.name
];

const rightHandSlotChain = [
    noItem.name, 
    items.item_steelSword.name, 
    cybers.cyber_powerFist.name, 
    cybers.cyber_energyWhip.name
];

function checkChain(
    slot_new: string,
    position: InventoryPlaces | BodyParts
) {
    let index_old;
    let index_new;

    const inventory = store.getState().generalUser.inventory || emptyInventory();
    const slot_old = inventory[placeAsKey(position)].name;
    
    if (position === InventoryPlaces.leftHand) {
        index_old = leftHandSlotChain.indexOf(slot_old);
        index_new = leftHandSlotChain.indexOf(slot_new);
        if (index_new > index_old) {
            return true
        } else {
            return false
        }
    } else if (position === InventoryPlaces.rightHand) {
        index_old = rightHandSlotChain.indexOf(slot_old);
        index_new = rightHandSlotChain.indexOf(slot_new);
        if (index_new > index_old) {
            return true
        } else {
            return false
        }
    } else if (position === InventoryPlaces.bothHands) {
        if (
            inventory.leftHand.name === cybers.cyber_laser.name ||
            inventory.rightHand.name === cybers.cyber_powerFist.name ||
            inventory.rightHand.name === cybers.cyber_energyWhip.name ||
            inventory.bothHands.name === mutations.mutation_claws.name ||
            slot_new === slot_old
        ) {
            return false
        } else {
            return true
        }
    }
}

function handsSlotsChainsChecker(slot: IHandSlot) {
    const ip = slot.inventoryPlace ? slot.inventoryPlace : null;
    const bp = slot.bodyPart ? slot.bodyPart : null;

    const position = ip || bp || InventoryPlaces.belt;

    return checkChain(slot.name, position)
}

export default handsSlotsChainsChecker
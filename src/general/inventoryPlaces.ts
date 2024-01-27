import { InventoryPlace } from "../enums-and-interfaces/enums"

const inventoryPlaces: Record<InventoryPlace, string> = {
    [InventoryPlace.armor]: chrome.i18n.getMessage('inventory_place_armor'),
    [InventoryPlace.back]: chrome.i18n.getMessage('inventory_place_back'),
    [InventoryPlace.belt]: chrome.i18n.getMessage('inventory_place_belt'),
    [InventoryPlace.bothHands]: chrome.i18n.getMessage('inventory_place_both_hands'),
    [InventoryPlace.chin]: chrome.i18n.getMessage('inventory_place_chin'),
    [InventoryPlace.extraLeftHand]: chrome.i18n.getMessage('inventory_place_extra_left_hand'),
    [InventoryPlace.extraRightHand]: chrome.i18n.getMessage('inventory_place_extra_right_hand'),
    [InventoryPlace.eyes]: chrome.i18n.getMessage('inventory_place_eyes'),
    [InventoryPlace.hat]: chrome.i18n.getMessage('inventory_place_hat'),
    [InventoryPlace.head]: chrome.i18n.getMessage('inventory_place_head'),
    [InventoryPlace.leftHand]: chrome.i18n.getMessage('inventory_place_left_hand'),
    [InventoryPlace.leftHip]: chrome.i18n.getMessage('inventory_place_left_hip'),
    [InventoryPlace.leftHipItem]: chrome.i18n.getMessage('inventory_place_left_hip_item'),
    [InventoryPlace.leftPocket]: chrome.i18n.getMessage('inventory_place_left_pocket'),
    [InventoryPlace.legs]: chrome.i18n.getMessage('inventory_place_legs'),
    [InventoryPlace.rightHand]: chrome.i18n.getMessage('inventory_place_right_hand'),
    [InventoryPlace.rightHip]: chrome.i18n.getMessage('inventory_place_right_hip'),
    [InventoryPlace.rightHipItem]: chrome.i18n.getMessage('inventory_place_right_hip_item'),
    [InventoryPlace.rightPocket]: chrome.i18n.getMessage('inventory_place_right_pocket'),
    [InventoryPlace.shoulders]: chrome.i18n.getMessage('inventory_place_shoulders'),
    [InventoryPlace.skin]: chrome.i18n.getMessage('inventory_place_skin'),
    [InventoryPlace.tail]: chrome.i18n.getMessage('inventory_place_tail'),
    [InventoryPlace.telekinesisLeftHand]: chrome.i18n.getMessage('inventory_place_telekinesis_left_hand'),
    [InventoryPlace.telekinesisRightHand]: chrome.i18n.getMessage('inventory_place_telekinesis_right_hand')
}

export default inventoryPlaces
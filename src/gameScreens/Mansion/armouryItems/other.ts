import { createArmouryItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const holster = createArmouryItem(
    [
        chrome.i18n.getMessage('holster'), 
        chrome.i18n.getMessage('holster_item_description'),
        images.armouryItems.holster
    ],
    [
        1, 
        [
            InventoryPlace.leftHip, 
            InventoryPlace.rightHip,
        ], 
        1
    ],
    [
        '', 0
    ],
    null, null, null
);

const other = {
    holster
}

export default other
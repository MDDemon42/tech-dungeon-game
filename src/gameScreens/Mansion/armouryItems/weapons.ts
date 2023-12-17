import { createArmouryItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import crafts from "../crafts";

const musket = createArmouryItem(
    [
        chrome.i18n.getMessage('musket'),
        chrome.i18n.getMessage('musket_item_description'),
        images.armouryItems.musket
    ],
    [
        0, InventoryPlace.bothHands, 1
    ],
    [
        '', null, '', null, null
    ],
    0,
    crafts.craftMusket
);

const weapons = {
    musket
}

export default weapons
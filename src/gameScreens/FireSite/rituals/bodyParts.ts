import { InventoryPlace, InventorySlotCategory } from "../../../enums-and-interfaces/enums";
import { createRitualBodyPart } from "../../../general/rituals/bodyParts";
import images from "../../../images/images";

const fireElementalLegs = createRitualBodyPart(
    [
        chrome.i18n.getMessage('fire_elemental_legs'),
        chrome.i18n.getMessage('fire_elemental_legs_description'),
        images.elementBendings.fireElementalLegs
    ],
    [
        0,
        [InventoryPlace.legs],
        5
    ],
    [
        null, null
    ],
    null, 
    InventorySlotCategory.unchangeable
);

const fireElementalTorso = createRitualBodyPart(
    [
        chrome.i18n.getMessage('fire_elemental_torso'),
        chrome.i18n.getMessage('fire_elemental_torso_description'),
        images.elementBendings.fireElementalTorso
    ],
    [
        0,
        [InventoryPlace.skin],
        5
    ],
    [
        null, null
    ],
    null, 
    InventorySlotCategory.unchangeable
);

export const fireElementalBodyParts = {
    fireElementalLegs,
    fireElementalTorso
};
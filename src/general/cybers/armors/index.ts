import { createCyber } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";

const cyber_nanoVest = createCyber(
    [
        chrome.i18n.getMessage('nano_vest'), 
        chrome.i18n.getMessage('nano_vest_item_description'),
        images.cyborgDetails.nanoVest
    ],
    [
        1, InventoryPlace.skin, 2
    ],
    [
        null, '', null
    ],
    '',
    abilities.passiveAbilities.armor.passiveAbility_nanoVest
)

const cyber_nanoMatrix = createCyber(
    [
        chrome.i18n.getMessage('nano_matrix'), 
        chrome.i18n.getMessage('nano_matrix_item_description'),
        images.cyborgDetails.nanoMatrix
    ],
    [
        2, InventoryPlace.skin, 3
    ],
    [
        null, '', null
    ],
    cyber_nanoVest.name,
    abilities.passiveAbilities.armor.passiveAbility_nanoMatrix
)

const armors = {
    cyber_nanoMatrix,
    cyber_nanoVest
}

export default armors
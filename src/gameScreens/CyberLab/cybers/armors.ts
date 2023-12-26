import { createCyber } from ".";
import weapons from "./weapons";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";

const energyShield = createCyber(
    [
        chrome.i18n.getMessage('energy_shield'), 
        chrome.i18n.getMessage('energy_shield_cyber_description'),
        images.cyborgDetails.energyShield
    ],
    [
        1, [InventoryPlace.leftHand], 5
    ],
    [
        null, 
        [abilities.passiveAbilities.armor.energyShield]
    ],
    weapons.cyberFist.name    
)

const nanoVest = createCyber(
    [
        chrome.i18n.getMessage('nano_vest'), 
        chrome.i18n.getMessage('nano_vest_cyber_description'),
        images.cyborgDetails.nanoVest
    ],
    [
        1, [InventoryPlace.skin], 2
    ],
    [
        null, 
        [abilities.passiveAbilities.cyber.nanoVest]
    ],
    ''    
)

const nanoMatrix = createCyber(
    [
        chrome.i18n.getMessage('nano_matrix'), 
        chrome.i18n.getMessage('nano_matrix_cyber_description'),
        images.cyborgDetails.nanoMatrix
    ],
    [
        2, [InventoryPlace.skin], 3
    ],
    [
        null, 
        [abilities.passiveAbilities.cyber.nanoMatrix]
    ],
    nanoVest.name
)

const armors = {
    energyShield,
    nanoMatrix,
    nanoVest
}

export default armors
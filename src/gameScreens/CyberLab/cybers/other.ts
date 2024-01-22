import { createCyber } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import guildMasteries from "../../Guild/masteries";

const reactiveFeet = createCyber(
    [
        chrome.i18n.getMessage('reactive_feet'), 
        chrome.i18n.getMessage('reactive_feet_cyber_description'),
        images.cyborgDetails.reactiveFeet
    ],
    [
        1, [InventoryPlace.legs], 2
    ],
    [
        null, null
    ],
    ''
)

const cyberEyes = createCyber(
    [
        chrome.i18n.getMessage('cyber_eyes'), 
        chrome.i18n.getMessage('cyber_eyes_cyber_description'),
        images.cyborgDetails.cyberEyes
    ],
    [
        1, [InventoryPlace.eyes], 2
    ],
    [
        null, null
    ],
    '', 0,
    guildMasteries.marksmanship
)

const other = {
    cyberEyes,
    reactiveFeet
}

export default other
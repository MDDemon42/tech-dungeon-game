import { createCyber } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const cyber_energyFist = createCyber(
    [
        chrome.i18n.getMessage('energy_fist'), 
        chrome.i18n.getMessage('energy_fist_cyber_description'),
        images.cyborgDetails.energyFist
    ],
    [
        1, InventoryPlace.rightHand, 5
    ],
    [
        null, '', null
    ], 
    '', null
)

const cyber_energyWhip = createCyber(
    [
        chrome.i18n.getMessage('energy_whip'), 
        chrome.i18n.getMessage('energy_whip_cyber_description'),
        images.cyborgDetails.energyWhip
    ],
    [
        2, InventoryPlace.rightHand, 6
    ],
    [
        null, '', null
    ],
    cyber_energyFist.name, null
)

const cyber_laser = createCyber(
    [
        chrome.i18n.getMessage('laser'), 
        chrome.i18n.getMessage('laser_cyber_description'),
        images.cyborgDetails.laser
    ],
    [
        1, InventoryPlace.leftHand, 5
    ],
    [
        null, '', null
    ],
    '', null
)

const cyber_rocketLauncher = createCyber(
    [
        chrome.i18n.getMessage('rocket_launcher'), 
        chrome.i18n.getMessage('rocket_launcher_cyber_description'),
        images.cyborgDetails.rocketLauncher
    ],
    [
        1, InventoryPlace.shoulders, 2
    ],
    [
        null, '', null
    ],
    '', null
)

const weapons = {
    cyber_energyWhip,
    cyber_laser,
    cyber_energyFist,
    cyber_rocketLauncher
}

export default weapons
import { createCyber } from ".";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import images from "../../images/images";

const cyber_energyFistRightHand = createCyber(
    [
        chrome.i18n.getMessage('energy_fist_right_hand'), 
        chrome.i18n.getMessage('energy_fist_cyber_description'),
        images.cyborgDetails.energyFistRightHand
    ],
    [
        1, InventoryPlace.rightHand, 5
    ],
    [
        null, null
    ], 
    ''
)

const cyber_cyberClaw = createCyber(
    [
        chrome.i18n.getMessage('cyber_claw'), 
        chrome.i18n.getMessage('cyber_claw_cyber_description'),
        images.cyborgDetails.cyberClaw
    ],
    [
        1, InventoryPlace.rightHand, 5
    ],
    [
        null, null
    ], 
    cyber_energyFistRightHand.name
)

const cyber_energyFistLeftHand = createCyber(
    [
        chrome.i18n.getMessage('energy_fist_left_hand'), 
        chrome.i18n.getMessage('energy_fist_cyber_description'),
        images.cyborgDetails.energyFistLeftHand
    ],
    [
        1, InventoryPlace.leftHand, 5
    ],
    [
        null, null
    ], 
    ''
)

const cyber_energyWhip = createCyber(
    [
        chrome.i18n.getMessage('energy_whip'), 
        chrome.i18n.getMessage('energy_whip_cyber_description'),
        images.cyborgDetails.energyWhip
    ],
    [
        1, InventoryPlace.rightHand, 5
    ],
    [
        null, null
    ],
    cyber_energyFistRightHand.name
)

const cyber_heatSaber = createCyber(
    [
        chrome.i18n.getMessage('heat_saber'), 
        chrome.i18n.getMessage('heat_saber_cyber_description'),
        images.cyborgDetails.heatSaber
    ],
    [
        1, InventoryPlace.rightHand, 5
    ],
    [
        null, null
    ],
    cyber_energyFistRightHand.name
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
        null, null
    ],
    ''
)

const cyber_acidizer = createCyber(
    [
        chrome.i18n.getMessage('acidizer'), 
        chrome.i18n.getMessage('acidizer_cyber_description'),
        images.cyborgDetails.acidizer
    ],
    [
        1, InventoryPlace.leftHand, 5
    ],
    [
        null, null
    ], 
    ''
)


const cyber_freezer = createCyber(
    [
        chrome.i18n.getMessage('freezer'), 
        chrome.i18n.getMessage('freezer_cyber_description'),
        images.cyborgDetails.freezer
    ],
    [
        1, InventoryPlace.leftHand, 5
    ],
    [
        null, null
    ], 
    ''
)

const cyber_slasherator = createCyber(
    [
        chrome.i18n.getMessage('slasherator'), 
        chrome.i18n.getMessage('slasherator_cyber_description'),
        images.cyborgDetails.slasherator
    ],
    [
        1, InventoryPlace.leftHand, 5
    ],
    [
        null, null
    ], 
    ''
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
        null, null
    ],
    ''
)

const weapons = {
    cyber_acidizer,
    cyber_cyberClaw,
    cyber_energyFistRightHand,
    cyber_energyFistLeftHand,
    cyber_energyWhip,
    cyber_freezer,
    cyber_heatSaber,    
    cyber_laser,
    cyber_rocketLauncher,
    cyber_slasherator
}

export default weapons
import { createCyber } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";

const cyberFist = createCyber(
    [
        chrome.i18n.getMessage('cyber_fist_right_hand'), 
        chrome.i18n.getMessage('cyber_fist_cyber_description'),
        images.cyborgDetails.cyberFist
    ],
    [
        1, [InventoryPlace.rightHand, InventoryPlace.leftHand], 5
    ],
    [
        [abilities.battleAbilities.melee.physicalSmashing.cyberFistSmash],
        [abilities.passiveAbilities.cybers.cyberFist]
    ], 
    ''
);

const cyberClaw = createCyber(
    [
        chrome.i18n.getMessage('cyber_claw'), 
        chrome.i18n.getMessage('cyber_claw_cyber_description'),
        images.cyborgDetails.cyberClaw
    ],
    [
        1, [InventoryPlace.rightHand], 5
    ],
    [
        [abilities.battleAbilities.melee.physicalSlashing.cyberClawSlash],
        [abilities.passiveAbilities.cybers.cyberClaw]
    ], 
    cyberFist.name
);

const taserWhip = createCyber(
    [
        chrome.i18n.getMessage('taser_whip'), 
        chrome.i18n.getMessage('taser_whip_cyber_description'),
        images.cyborgDetails.taserWhip
    ],
    [
        1, [InventoryPlace.rightHand], 5
    ],
    [
        [abilities.battleAbilities.melee.electrical.taserWhiplash], 
        null
    ],
    cyberFist.name
);

const heatSaber = createCyber(
    [
        chrome.i18n.getMessage('heat_saber'), 
        chrome.i18n.getMessage('heat_saber_cyber_description'),
        images.cyborgDetails.heatSaber
    ],
    [
        1, [InventoryPlace.rightHand], 5
    ],
    [
        [abilities.battleAbilities.melee.fire.heatSaberSlash], 
        null
    ],
    cyberFist.name
);

const laser = createCyber(
    [
        chrome.i18n.getMessage('laser'), 
        chrome.i18n.getMessage('laser_cyber_description'),
        images.cyborgDetails.laser
    ],
    [
        1, [InventoryPlace.leftHand], 5
    ],
    [
        [abilities.battleAbilities.ranged.fire.laserShot], 
        null
    ],
    ''
);

const acidizer = createCyber(
    [
        chrome.i18n.getMessage('acidizer'), 
        chrome.i18n.getMessage('acidizer_cyber_description'),
        images.cyborgDetails.acidizer
    ],
    [
        1, [InventoryPlace.leftHand], 5
    ],
    [
        [abilities.battleAbilities.ranged.acid.acidizerSpill], 
        null
    ], 
    ''
);

const freezer = createCyber(
    [
        chrome.i18n.getMessage('freezer'), 
        chrome.i18n.getMessage('freezer_cyber_description'),
        images.cyborgDetails.freezer
    ],
    [
        1, [InventoryPlace.leftHand], 5
    ],
    [
        [abilities.battleAbilities.ranged.cold.freezerShot], 
        null
    ], 
    ''
);

const treeCutter = createCyber(
    [
        chrome.i18n.getMessage('tree_cutter'), 
        chrome.i18n.getMessage('treeCutter_cyber_description'),
        images.cyborgDetails.treeCutter
    ],
    [
        1, [InventoryPlace.leftHand], 5
    ],
    [
        [abilities.battleAbilities.melee.physicalSlashing.treeCutterSlash], 
        null
    ], 
    ''
);

const rocketLauncher = createCyber(
    [
        chrome.i18n.getMessage('rocket_launcher'), 
        chrome.i18n.getMessage('rocket_launcher_cyber_description'),
        images.cyborgDetails.rocketLauncher
    ],
    [
        1, [InventoryPlace.shoulders], 2
    ],
    [
        [abilities.battleAbilities.ranged.fire.rocketLaunch], 
        null
    ],
    ''
);

const weapons = {
    acidizer,
    cyberClaw,
    cyberFist,
    taserWhip,
    freezer,
    heatSaber,    
    laser,
    rocketLauncher,
    treeCutter
}

export default weapons
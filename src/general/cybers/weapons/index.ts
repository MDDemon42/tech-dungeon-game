import { createCyber } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const cyber_powerFist = createCyber(
    [
        'Power fist', 
        'Cyber to give ultimate punches',
        images.cyborgDetails.powerFist
    ],
    [
        1, InventoryPlace.rightHand, 5
    ],
    [
        null, '', null
    ], 
    ''
)

const cyber_energyWhip = createCyber(
    [
        'Energy whip', 
        'Cyber to deal pain and sufferings',
        images.cyborgDetails.energyWhip
    ],
    [
        2, InventoryPlace.rightHand, 6
    ],
    [
        null, '', null
    ],
    cyber_powerFist.name
)

const cyber_laser = createCyber(
    [
        'Laser', 
        'Cyber to burn with focused light',
        images.cyborgDetails.laser
    ],
    [
        1, InventoryPlace.leftHand, 5
    ],
    [
        null, '', null
    ],
    ''
)

const cyber_rocket = createCyber(
    [
        'Rocket', 
        'Cyber to destroy everything in an area',
        images.cyborgDetails.rocket
    ],
    [
        1, InventoryPlace.shoulders, 2
    ],
    [
        null, '', null
    ],
    ''
)

const weapons = {
    cyber_energyWhip,
    cyber_laser,
    cyber_powerFist,
    cyber_rocket
}

export default weapons
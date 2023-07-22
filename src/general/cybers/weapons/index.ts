import { createCyber } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../interfaces/interfaces"

const cyber_energyWhip = createCyber(
    [
        'Energy whip', 
        'Cyber to deal pain and sufferings',
        images.cyborgDetails.energyWhip
    ],
    [
        2, InventoryPlaces.rightHand, 6
    ],
    [
        null, null, null
    ]
)

const cyber_laser = createCyber(
    [
        'Laser', 
        'Cyber to burn with focused light',
        images.cyborgDetails.laser
    ],
    [
        1, InventoryPlaces.leftHand, 5
    ],
    [
        null, null, null
    ]
)

const cyber_powerFist = createCyber(
    [
        'Power fist', 
        'Cyber to give ultimate punches',
        images.cyborgDetails.powerFist
    ],
    [
        1, InventoryPlaces.rightHand, 5
    ],
    [
        null, null, null
    ]
)

const cyber_rocket = createCyber(
    [
        'Rocket', 
        'Cyber to destroy everything in an area',
        images.cyborgDetails.rocket
    ],
    [
        1, InventoryPlaces.shoulders, 2
    ],
    [
        null, null, null
    ]
)

const weapons = {
    cyber_energyWhip,
    cyber_laser,
    cyber_powerFist,
    cyber_rocket
}

export default weapons
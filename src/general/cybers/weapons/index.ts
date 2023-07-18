import { createCyber } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"

const cyber_energyWhip = createCyber(
    'Energy whip', 'Cyber to deal pain and sufferings',
    2, InventoryPlaces.rightHand,
    images.cyborgDetails.energyWhip, 6
)

const cyber_laser = createCyber(
    'Laser', 'Cyber to burn with focused light',
    1, InventoryPlaces.leftHand,
    images.cyborgDetails.laser, 5
)

const cyber_powerFist = createCyber(
    'Power fist', 'Cyber to give ultimate punches',
    1, InventoryPlaces.rightHand,
    images.cyborgDetails.powerFist, 5
)

const cyber_rocket = createCyber(
    'Rocket', 'Cyber to destroy everything in an area',
    1, InventoryPlaces.shoulders,
    images.cyborgDetails.rocket, 2
)

const weapons = {
    cyber_energyWhip,
    cyber_laser,
    cyber_powerFist,
    cyber_rocket
}

export default weapons
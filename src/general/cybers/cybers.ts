import { InventoryPlaces, ICyber } from "../../types/interfaces";
import images from "../../images/images";

function createCyber(
    name: string,
    description: string,
    cost: number,
    inventoryPlace: InventoryPlaces,
    image: string,
    priority: number
): ICyber {
    return {
        name,
        description,
        cost,
        inventoryPlace,
        image,
        priority,
        linkedMastery: null,
        masterAbilities: null
    }
}

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

const cyber_nanoMatrix = createCyber(
    'Nano matrix', 'Cyber to deflect almost any damage',
    2, InventoryPlaces.skin,
    images.cyborgDetails.nanoMatrix, 3
)

const cyber_nanoVest = createCyber(
    'Nano vest', 'Cyber to boost your survival rate',
    1, InventoryPlaces.skin,
    images.cyborgDetails.nanoVest, 2
)

const cyber_powerFist = createCyber(
    'Power fist', 'Cyber to give ultimate punches',
    1, InventoryPlaces.rightHand,
    images.cyborgDetails.powerFist, 5
)

const cyber_reactiveFeet = createCyber(
    'Reactive feet', 'Cyber to fly in short distances',
    1, InventoryPlaces.legs,
    images.cyborgDetails.reactiveFeet, 2
)

const cyber_rocket = createCyber(
    'Rocket', 'Cyber to destroy everything in an area',
    1, InventoryPlaces.shoulders,
    images.cyborgDetails.rocket, 2
)

const cybers = {
    cyber_powerFist,
    cyber_energyWhip,
    cyber_rocket,
    cyber_laser,
    cyber_nanoVest,
    cyber_nanoMatrix,
    cyber_reactiveFeet,
}

export default cybers
import { createCyber } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../interfaces/interfaces"

const cyber_nanoMatrix = createCyber(
    [
        'Nano matrix', 
        'Cyber to deflect almost any damage',
        images.cyborgDetails.nanoMatrix
    ],
    [
        2, InventoryPlaces.skin, 3
    ],
    [
        null, null, null
    ]
)

const cyber_nanoVest = createCyber(
    [
        'Nano vest', 
        'Cyber to boost your survival rate',
        images.cyborgDetails.nanoVest
    ],
    [
        1, InventoryPlaces.skin, 2
    ],
    [
        null, null, null
    ]
)

const armors = {
    cyber_nanoMatrix,
    cyber_nanoVest
}

export default armors
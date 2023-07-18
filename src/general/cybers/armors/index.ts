import { createCyber } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"

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

const armors = {
    cyber_nanoMatrix,
    cyber_nanoVest
}

export default armors
import { createCyber } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const cyber_nanoVest = createCyber(
    [
        'Nano vest', 
        'Cyber to boost your survival rate',
        images.cyborgDetails.nanoVest
    ],
    [
        1, InventoryPlace.skin, 2
    ],
    [
        null, '', null
    ],
    ''
)

const cyber_nanoMatrix = createCyber(
    [
        'Nano matrix', 
        'Cyber to deflect almost any damage',
        images.cyborgDetails.nanoMatrix
    ],
    [
        2, InventoryPlace.skin, 3
    ],
    [
        null, '', null
    ],
    cyber_nanoVest.name
)

const armors = {
    cyber_nanoMatrix,
    cyber_nanoVest
}

export default armors
import { createCyber } from "..";
import images from "../../../images/images";
import { InventoryPlaces } from "../../../interfaces/interfaces";

const cyber_reactiveFeet = createCyber(
    [
        'Reactive feet', 
        'Cyber to fly in short distances',
        images.cyborgDetails.reactiveFeet
    ],
    [
        1, InventoryPlaces.legs, 2
    ],
    [
        null, null, null
    ]
)

const other = {
    cyber_reactiveFeet
}

export default other
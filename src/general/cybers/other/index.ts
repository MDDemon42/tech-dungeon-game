import { createCyber } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const cyber_reactiveFeet = createCyber(
    [
        'Reactive feet', 
        'Cyber to fly in short distances',
        images.cyborgDetails.reactiveFeet
    ],
    [
        1, InventoryPlace.legs, 2
    ],
    [
        null, '', null
    ],
    '', null
)

const other = {
    cyber_reactiveFeet
}

export default other
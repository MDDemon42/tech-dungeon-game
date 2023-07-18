import { createCyber } from "..";
import images from "../../../images/images";
import { InventoryPlaces } from "../../../types/interfaces";

const cyber_reactiveFeet = createCyber(
    'Reactive feet', 'Cyber to fly in short distances',
    1, InventoryPlaces.legs,
    images.cyborgDetails.reactiveFeet, 2
)

const other = {
    cyber_reactiveFeet
}

export default other
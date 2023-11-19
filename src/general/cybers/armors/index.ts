import { createCyber } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";

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
    '',
    abilities.passiveAbilities.armor.passiveAbility_nanoVest
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
    cyber_nanoVest.name,
    abilities.passiveAbilities.armor.passiveAbility_nanoMatrix
)

const armors = {
    cyber_nanoMatrix,
    cyber_nanoVest
}

export default armors
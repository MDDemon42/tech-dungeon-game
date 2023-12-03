import { createMutation } from ".";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import images from "../../images/images";
import abilities from "../abilities";

const mutation_scales = createMutation(
    [
        chrome.i18n.getMessage('scales'),
        chrome.i18n.getMessage('scales_mutation_description'), 
        images.mutantEvolvings.scales
    ],
    [
        1, InventoryPlace.skin, 1
    ],
    [
        null, abilities.passiveAbilities.armor.passiveAbility_scales
    ]    
)

const mutation_fur = createMutation(
    [
        chrome.i18n.getMessage('fur'), 
        chrome.i18n.getMessage('fur_mutation_description'),
        images.mutantEvolvings.fur
    ],
    [
        1, InventoryPlace.skin, 1
    ],
    [
        null, abilities.passiveAbilities.armor.passiveAbility_fur
    ]    
)

const armors = {
    mutation_scales,
    mutation_fur
}

export default armors
import { createMutation } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";

const scales = createMutation(
    [
        chrome.i18n.getMessage('scales'),
        chrome.i18n.getMessage('scales_mutation_description'), 
        images.mutantEvolvings.scales
    ],
    [
        1, [InventoryPlace.skin], 1
    ],
    [
        null, 
        [abilities.passiveAbilities.armor.scales]
    ]    
)

const fur = createMutation(
    [
        chrome.i18n.getMessage('fur'), 
        chrome.i18n.getMessage('fur_mutation_description'),
        images.mutantEvolvings.fur
    ],
    [
        1, [InventoryPlace.skin], 1
    ],
    [
        null, 
        [abilities.passiveAbilities.armor.fur]
    ]    
)

const armors = {
    scales,
    fur
}

export default armors
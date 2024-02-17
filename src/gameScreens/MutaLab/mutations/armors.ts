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
        [abilities.passiveAbilities.mutations.scales]
    ]    
);

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
        [abilities.passiveAbilities.mutations.fur]
    ]    
);

const spikedShell = createMutation(
    [
        chrome.i18n.getMessage('spiked_shell'), 
        chrome.i18n.getMessage('spiked_shell_mutation_description'),
        images.mutantEvolvings.spikedShell
    ],
    [
        1, [InventoryPlace.back], 1
    ],
    [
        [abilities.battleAbilities.melee.mixed.spikedShellRush], 
        [abilities.passiveAbilities.mutations.spikedShell]
    ]    
);

const armors = {
    fur,
    scales,
    spikedShell    
}

export default armors
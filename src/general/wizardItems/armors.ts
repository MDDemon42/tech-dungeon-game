import { InventoryPlace } from "../../enums-and-interfaces/enums";
import images from "../../images/images";
import abilities from "../abilities";
import { createWizardItem } from ".";

const wizardItem_apprenticeHat = createWizardItem(
    [
        chrome.i18n.getMessage('apprentice_hat'),
        chrome.i18n.getMessage('apprentice_hat_item_description'),
        images.wizardItems.apprenticeHat
    ], 
    [
        1, InventoryPlace.hat, 1
    ],
    [
        null,
        abilities.passiveAbilities.armor.passiveAbility_apprenticeHat
    ]    
)

const wizardItem_magisterHat = createWizardItem(
    [
        chrome.i18n.getMessage('magister_hat'),
        chrome.i18n.getMessage('magister_hat_item_description'),
        images.wizardItems.magisterHat
    ],
    [
        2, InventoryPlace.hat, 2
    ],
    [
        null,
        abilities.passiveAbilities.armor.passiveAbility_magisterHat
    ]    
)

const wizardItem_magisterRobe = createWizardItem(
    [
        chrome.i18n.getMessage('magister_robe'),
        chrome.i18n.getMessage('magister_robe_item_description'),
        images.wizardItems.magisterRobe
    ],
    [
        2, InventoryPlace.armor, 2
    ],
    [
        null,
        abilities.passiveAbilities.armor.passiveAbility_magisterRobe
    ]    
)

const armors = {
    wizardItem_apprenticeHat,
    wizardItem_magisterHat,
    wizardItem_magisterRobe
}

export default armors
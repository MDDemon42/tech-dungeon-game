import { createWizardItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const wizardItem_apprenticeRod = createWizardItem(
    [
        chrome.i18n.getMessage('apprentice_rod'), 
        chrome.i18n.getMessage('apprentice_rod_item_description'),
        images.wizardItems.apprenticeRod
    ],
    [
        1, InventoryPlace.bothHands, 1
    ],
    [
        null, null
    ]
)

const wizardItem_magisterScepter = createWizardItem(
    [
        chrome.i18n.getMessage('magister_scepter'), 
        chrome.i18n.getMessage('magister_scepter_item_description'),
        images.wizardItems.magisterScepter
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        null, null
    ]
)

const weapons = {
    wizardItem_apprenticeRod,
    wizardItem_magisterScepter
}

export default weapons
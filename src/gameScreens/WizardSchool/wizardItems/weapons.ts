import { createWizardItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const apprenticeRod = createWizardItem(
    [
        chrome.i18n.getMessage('apprentice_rod'), 
        chrome.i18n.getMessage('apprentice_rod_item_description'),
        images.wizardItems.apprenticeRod
    ],
    [
        1, [InventoryPlace.bothHands], 1
    ],
    [
        null, null
    ]
)

const magisterScepter = createWizardItem(
    [
        chrome.i18n.getMessage('magister_scepter'), 
        chrome.i18n.getMessage('magister_scepter_item_description'),
        images.wizardItems.magisterScepter
    ],
    [
        2, [InventoryPlace.bothHands], 1
    ],
    [
        null, null
    ]
)

const weapons = {
    apprenticeRod,
    magisterScepter
}

export default weapons
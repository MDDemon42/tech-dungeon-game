import { createWizardItem } from ".";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import images from "../../images/images";

const wizardItem_flyingCape = createWizardItem(
    [
        chrome.i18n.getMessage('flying_cape'),
        chrome.i18n.getMessage('flying_cape_item_description'),
        images.wizardItems.flyingCape
    ],
    [
        2, InventoryPlace.back, 2
    ],
    [
        null, null
    ]
)

const other = {
    wizardItem_flyingCape
}

export default other
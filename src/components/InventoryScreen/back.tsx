import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";
import items from "../../gameScreens/Market/items";

function getBackImage(backName: string) {
    let result = null;

    switch (backName) {
        case mutations.other.skinWings.name:
            result = <img src={images.bodyElements.skinWings} alt={chrome.i18n.getMessage('skin_wings')} />;
            break;
        case mutations.other.featherWings.name:
            result = <img src={images.bodyElements.featherWings} alt={chrome.i18n.getMessage('feather_wings')} />;
            break;
        case mutations.armors.spikedShell.name:
            result = <img src={images.bodyElements.spikedShell} alt={chrome.i18n.getMessage('spiked_shell')} />;
            break;
        case wizardItems.other.wizardItem_flyingCape.name:
            result = <img src={images.bodyElements.flyingCape} alt={chrome.i18n.getMessage('flying_cape')} />;
            break;
        case items.other.greatSheath.name:
            result = <img src={images.bodyElements.greatSheath} alt={chrome.i18n.getMessage('great_sheath')} />;
            break;
        default:
            break;
    }

    return result
}

export default getBackImage
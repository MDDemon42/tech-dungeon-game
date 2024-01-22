import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

function getBackImage(backName: string) {
    let result = null;

    switch (backName) {
        case mutations.other.skinWings.name:
            result = <img src={images.bodyElements.skinWings} alt={chrome.i18n.getMessage('skin_wings')} />;
            break;
        case mutations.other.featherWings.name:
            result = <img src={images.bodyElements.featherWings} alt={chrome.i18n.getMessage('feather_wings')} />;
            break;
        case wizardItems.other.wizardItem_flyingCape.name:
            result = <img src={images.bodyElements.flyingCape} alt={chrome.i18n.getMessage('flying_cape')} />;
            break;
        default:
            break;
    }

    return result
}

export default getBackImage
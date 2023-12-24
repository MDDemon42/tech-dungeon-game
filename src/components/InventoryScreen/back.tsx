import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

function getBackImage(backName: string) {
    let result = null;

    switch (backName) {
        case mutations.other.wings.name:
            result = <img src={images.bodyElements.wings} alt={chrome.i18n.getMessage('wings')} />;
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
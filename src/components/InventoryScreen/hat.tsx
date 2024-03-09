import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

function getHatImage(hatName: string) {
    let result = null;
    
    switch (hatName) {
        case wizardItems.armors.magisterHat.name:
            result = <img src={images.bodyElements.hats.magister} alt={chrome.i18n.getMessage('magister_hat')} />;
            break;
        case wizardItems.armors.apprenticeHat.name:
            result = <img src={images.bodyElements.hats.apprentice} alt={chrome.i18n.getMessage('apprentice_hat')} />;
            break;
        default:
            break;
    }

    return result
}

export default getHatImage
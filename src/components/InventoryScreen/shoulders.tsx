import cybers from "../../gameScreens/CyberLab/cybers";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getShouldersImage(shouldersName: string) {
    let result = null;

    switch (shouldersName) {
        case cybers.weapons.rocketLauncher.name:
            result = <img src={images.bodyElements.rocketLauncher} alt={chrome.i18n.getMessage('rocket_launcher')} />;
            break;
        case mutations.weapons.pincers.name:
            result = <img src={images.bodyElements.pincers} alt={chrome.i18n.getMessage('pincers')} />;
            break;
        default:
            break;
    }

    return result
}

export default getShouldersImage
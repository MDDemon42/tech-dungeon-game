import cybers from "../../gameScreens/CyberLab/cybers";
import items from "../../gameScreens/Market/items";
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
        case mutations.other.extraArms.name:
            result = <img src={images.bodyElements.extraArms} alt={chrome.i18n.getMessage('extra_arms')} />;
            break;  
        case items.other.quiver.name:
            result = <img src={images.bodyElements.quiver} alt={chrome.i18n.getMessage('quiver')} />;
            break;
        default:
            break;
    }

    return result
}

export default getShouldersImage
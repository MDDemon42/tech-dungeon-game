import cybers from "../../gameScreens/CyberLab/cybers";
import powers from "../../gameScreens/FocusSite/powers";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getShouldersImage(
    shouldersName: string,
    powersUserNames: string[]
) {
    let result = null;

    switch (shouldersName) {
        case cybers.weapons.rocketLauncher.name:
            result = <img src={images.bodyElements.cybers.rocketLauncher} alt={chrome.i18n.getMessage('rocket_launcher')} />;
            break;
        case mutations.weapons.pincers.name:
            result = <img src={images.bodyElements.mutations.pincers} alt={chrome.i18n.getMessage('pincers')} />;
            break;
        case mutations.other.extraArms.name:
            result = [<img src={images.bodyElements.mutations.extraArms} alt={chrome.i18n.getMessage('extra_arms')} />];
            if (powersUserNames.includes(powers.weapons.voidCrash.name)) {
                result.push(<img src={images.bodyElements.tattoes.voidCrash} alt={chrome.i18n.getMessage('void_crash')} />)
            }
            break;  
        case items.other.quiver.name:
            result = <img src={images.bodyElements.ammunition.quiver} alt={chrome.i18n.getMessage('quiver')} />;
            break;
        default:
            break;
    }

    return result
}

export default getShouldersImage
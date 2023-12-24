import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getLeftPocketImage(leftPocketName: string) {
    let result = null;

    switch (leftPocketName) {
        case items.other.healingPotion.name:
            result = <img src={images.bodyElements.healingPotion} alt={chrome.i18n.getMessage('healing_potion')} />;
            break;
        default:
            break;
    }

    return result
}

export default getLeftPocketImage
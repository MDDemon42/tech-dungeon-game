import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getBeltsImage(
    leftHipName: string, 
    rightHipName: string,
    backName: string,
    shouldersName: string
) {
    const result = [];

    if (leftHipName === items.other.sheath.name) {
        result.push(<img src={images.bodyElements.belts.sheathLeft} alt={chrome.i18n.getMessage('sheath')} />);
    }

    if (rightHipName === items.other.sheath.name) {
        result.push(<img src={images.bodyElements.belts.sheathRight} alt={chrome.i18n.getMessage('sheath')} />);
    }

    if (backName === items.other.greatSheath.name) {
        result.push(<img src={images.bodyElements.belts.greatSheath} alt={chrome.i18n.getMessage('great_sheath')} />);
    }

    if (shouldersName === items.other.quiver.name) {
        result.push(<img src={images.bodyElements.belts.quiver} alt={chrome.i18n.getMessage('quiver')} />);
    }

    if (result.length === 0) {
        return null
    } 

    return result
}

export default getBeltsImage
import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getBeltsImage(leftHipName: string, rightHipName: string) {
    const result = [];

    if (leftHipName === items.other.sheath.name) {
        result.push(<img src={images.bodyElements.beltSheathLeft} alt={chrome.i18n.getMessage('sheath')} />);
    }

    if (rightHipName === items.other.sheath.name) {
        result.push(<img src={images.bodyElements.beltSheathRight} alt={chrome.i18n.getMessage('sheath')} />);
    }

    if (result.length === 0) {
        return null
    } 

    return result
}

export default getBeltsImage
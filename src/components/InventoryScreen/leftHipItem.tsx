import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";

function getLeftHipItemImage(leftHipItem: string) {
    let result = null;

    switch (leftHipItem) {
        case armouryItems.guns.pistol.name:
            result = <img src={images.bodyElements.leftHipItem.pistol} alt={chrome.i18n.getMessage('pistol')} />;
            break;
        case armouryItems.guns.revolver.name:
            result = <img src={images.bodyElements.leftHipItem.revolver} alt={chrome.i18n.getMessage('revolver')} />;
            break;
        default:
            break;
    }

    return result
}

export default getLeftHipItemImage
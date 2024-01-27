import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";

function getRightHipItemImage(rightHipItem: string) {
    let result = null;

    switch (rightHipItem) {
        case armouryItems.guns.pistol.name:
            result = <img src={images.bodyElements.rightHipItem.pistol} alt={chrome.i18n.getMessage('pistol')} />;
            break;
        case armouryItems.guns.revolver.name:
            result = <img src={images.bodyElements.rightHipItem.revolver} alt={chrome.i18n.getMessage('revolver')} />;
            break;
        default:
            break;
    }

    return result
}

export default getRightHipItemImage
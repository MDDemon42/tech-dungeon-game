import armouryItems from "../../gameScreens/Mansion/armouryItems";
import items from "../../gameScreens/Market/items";
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
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSword.sheathRight} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        default:
            break;
    }

    return result
}

export default getRightHipItemImage
import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getShouldersItemImage(shouldersItem: string) {
    let result = null;

    switch (shouldersItem) {
        case items.weapons.oakBow.name:
            result = <img src={images.bodyElements.bowQuiver} alt={chrome.i18n.getMessage('oak_bow')} />;
            break;
        default:
            break;
    }

    return result
}

export default getShouldersItemImage
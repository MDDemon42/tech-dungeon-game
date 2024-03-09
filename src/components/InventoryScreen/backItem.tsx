import guildItems from "../../gameScreens/Guild/guildItems";
import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getBackItemImage(backItem: string) {
    let result = null;

    switch (backItem) {
        case items.weapons.steelGreatsword.name:
            result = <img src={images.bodyElements.ammunition.greatSwordGreatSheath} alt={chrome.i18n.getMessage('steel_greatsword')} />;
            break;
        case guildItems.weapons.runicGreatsword.name:
            result = <img src={images.bodyElements.ammunition.greatSwordGreatSheath} alt={chrome.i18n.getMessage('runic_greatsword')} />;
            break;
        default:
            break;
    }

    return result
}

export default getBackItemImage
import guildItems from "../../gameScreens/Guild/guildItems";
import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getRightPocketImage(rightPocketImage: string) {
    let result = null;

    switch (rightPocketImage) {
        case guildItems.weapons.acidBomd.name:
            result = <img src={images.bodyElements.pocket.acidBombRight} alt={chrome.i18n.getMessage('acid_bomb')} />;
            break;
        case items.other.healingPotion.name:
            result = <img src={images.bodyElements.pocket.healingPotionRight} alt={chrome.i18n.getMessage('healing_potion')} />;
            break;
        default:
            break;
    }

    return result
}

export default getRightPocketImage
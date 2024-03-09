import guildItems from "../../gameScreens/Guild/guildItems";
import items from "../../gameScreens/Market/items";
import images from "../../images/images";

function getLeftPocketImage(leftPocketName: string) {
    let result = null;

    switch (leftPocketName) {
        case items.other.healingPotion.name:
            result = <img src={images.bodyElements.pocket.healingPotionLeft} alt={chrome.i18n.getMessage('healing_potion')} />;
            break;
        case guildItems.weapons.acidBomd.name:
            result = <img src={images.bodyElements.pocket.acidBombLeft} alt={chrome.i18n.getMessage('acid_bomb')} />;
            break;
        default:
            break;
    }

    return result
}

export default getLeftPocketImage
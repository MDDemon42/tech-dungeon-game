import guildItems from "../../gameScreens/Guild/guildItems";
import images from "../../images/images";

function getRightPocketImage(rightPocketImage: string) {
    let result = null;

    switch (rightPocketImage) {
        case guildItems.weapons.acidBomd.name:
            result = <img src={images.bodyElements.acidBomb} alt={chrome.i18n.getMessage('acid_bomb')} />;
            break;
        default:
            break;
    }

    return result
}

export default getRightPocketImage
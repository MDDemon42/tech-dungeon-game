import armouryItems from "../../gameScreens/Mansion/armouryItems";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getExtraRightHandImage(
    extraRightHandName: string,
    mutationShouldersName: string
) {
    let result = null;

    if (mutationShouldersName !== mutations.other.extraArms.name) {
        return null
    }

    switch (extraRightHandName) {
        case mutations.weapons.claw.name:
            result = <img src={images.bodyElements.clawExtraRight} alt={chrome.i18n.getMessage('claw')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMaceExtraRightHand} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSwordExtraRightHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case armouryItems.battleWeapons.battleAxe.name:
            result = <img src={images.bodyElements.battleAxeExtraRightHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katanaExtraRightHand} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxe.name:
            result = <img src={images.bodyElements.battleMageAxeExtraRightHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        default:
            result = <img src={images.bodyElements.extraRightHand} alt='extraRightHand' />;
            break;
    }

    return result
}

export default getExtraRightHandImage
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getExtraLeftHandImage(
    extraLeftHandName: string,
    shouldersName: string
) {
    let result = null;

    if (shouldersName !== mutations.other.extraArms.name) {
        return null
    }

    switch (extraLeftHandName) {
        case mutations.weapons.claw.name:
            result = <img src={images.bodyElements.clawExtraLeft} alt={chrome.i18n.getMessage('claw')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMaceExtraLeftHand} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSwordExtraLeftHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case armouryItems.battleWeapons.battleAxe.name:
            result = <img src={images.bodyElements.battleAxeExtraLeftHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katanaExtraLeftHand} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxe.name:
            result = <img src={images.bodyElements.battleMageAxeExtraLeftHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        default:
            result = <img src={images.bodyElements.extraLeftHand} alt='extraLeftHand' />;
            break;
    }

    return result
}

export default getExtraLeftHandImage
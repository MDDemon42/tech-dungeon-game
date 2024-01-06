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
        case items.weapons.axe.name:
            result = <img src={images.bodyElements.axe.extraRightHand} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case items.weapons.pickaxe.name:
            result = <img src={images.bodyElements.pickaxe.extraRightHand} alt={chrome.i18n.getMessage('pickaxe')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMace.extraRightHand} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSword.extraRightHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case armouryItems.battleWeapons.battleAxe.name:
            result = <img src={images.bodyElements.battleAxe.extraRightHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katana.extraRightHand} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.battleWeapons.macuahuitl.name:
            result = <img src={images.bodyElements.macuahuitl.extraRightHand} alt={chrome.i18n.getMessage('macuahuitl')} />;
            break;
        case armouryItems.battleWeapons.rapier.name:
            result = <img src={images.bodyElements.rapier.extraRightHand} alt={chrome.i18n.getMessage('rapier')} />;
            break;
        case armouryItems.battleWeapons.sabre.name:
            result = <img src={images.bodyElements.sabre.extraRightHand} alt={chrome.i18n.getMessage('sabre')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxe.name:
            result = <img src={images.bodyElements.battleMageAxe.extraRightHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        default:
            result = <img src={images.bodyElements.extraRightHand} alt='extraRightHand' />;
            break;
    }

    return result
}

export default getExtraRightHandImage
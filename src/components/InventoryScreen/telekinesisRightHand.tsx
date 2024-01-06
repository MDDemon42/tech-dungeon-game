import items from "../../gameScreens/Market/items";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";

function getTelekinesisRightHandImage(
    telekinesisRightHandName: string,
    gotTelekinesis: boolean
) {
    if (!gotTelekinesis) {
        return null
    }

    let result = null;

    switch (telekinesisRightHandName) {
        case items.weapons.axe.name:
            result = <img src={images.bodyElements.axe.telekinesisRightHand} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case items.weapons.pickaxe.name:
            result = <img src={images.bodyElements.pickaxe.telekinesisRightHand} alt={chrome.i18n.getMessage('pickaxe')} />;
            break;
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSword.telekinesisRightHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMace.telekinesisRightHand} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case armouryItems.battleWeapons.battleAxe.name:
            result = <img src={images.bodyElements.battleAxe.telekinesisRightHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxe.name:
            result = <img src={images.bodyElements.battleMageAxe.telekinesisRightHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katana.telekinesisRightHand} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.battleWeapons.macuahuitl.name:
            result = <img src={images.bodyElements.macuahuitl.telekinesisRightHand} alt={chrome.i18n.getMessage('macuahuitl')} />;
            break;
        case armouryItems.battleWeapons.rapier.name:
            result = <img src={images.bodyElements.rapier.telekinesisRightHand} alt={chrome.i18n.getMessage('rapier')} />;
            break;
        case armouryItems.battleWeapons.sabre.name:
            result = <img src={images.bodyElements.sabre.telekinesisRightHand} alt={chrome.i18n.getMessage('sabre')} />;
            break;
        default:
            break;
    }

    return result
}

export default getTelekinesisRightHandImage
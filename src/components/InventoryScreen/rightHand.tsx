import cybers from "../../gameScreens/CyberLab/cybers";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";

function getRightHandImage(
    rightHandName: string,
    skinName: string
) {
    let result = null;

    switch (rightHandName) {
        case cybers.weapons.cyberClaw.name:
            result = <img src={images.bodyElements.cybers.claw} alt={chrome.i18n.getMessage('cyber_claw')} />;
            break;
        case cybers.weapons.heatSaber.name:
            result = <img src={images.bodyElements.cybers.heatSaber} alt={chrome.i18n.getMessage('heat_saber')} />;
            break;
        case cybers.weapons.taserWhip.name:
            result = <img src={images.bodyElements.cybers.taserWhip} alt={chrome.i18n.getMessage('taser_whip')} />;
            break;
        case cybers.weapons.cyberFist.name:
            result = <img src={images.bodyElements.cybers.fistRightHand} alt={chrome.i18n.getMessage('cyber_fist_right_hand')} />;
            break;
        case mutations.weapons.claw.name:
            switch (skinName) {
                case mutations.armors.scales.name:
                    result = <img src={images.bodyElements.claws.scalesRight} alt={chrome.i18n.getMessage('claws')} />;
                    break;
                case mutations.armors.fur.name:
                    result = <img src={images.bodyElements.claws.furRight} alt={chrome.i18n.getMessage('claws')} />;
                    break;
                default:
                    result = <img src={images.bodyElements.claws.usualRight} alt={chrome.i18n.getMessage('claws')} />;
                    break;
            } 
            break;
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSword.rightHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case armouryItems.battleWeapons.battleAxe.name:
            result = <img src={images.bodyElements.battleAxe.rightHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMace.rightHand} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case items.weapons.pickaxe.name:
            result = <img src={images.bodyElements.pickaxe.rightHand} alt={chrome.i18n.getMessage('pickaxe')} />;
            break;
        case armouryItems.guns.pistol.name:
            result = <img src={images.bodyElements.pistols.pistol} alt={chrome.i18n.getMessage('pistol')} />;
            break;
        case armouryItems.guns.battlePistol.name:
            result = <img src={images.bodyElements.pistols.battlePistol} alt={chrome.i18n.getMessage('battle_pistol')} />;
            break;
        case armouryItems.guns.revolver.name:
            result = <img src={images.bodyElements.pistols.revolverRightHand} alt={chrome.i18n.getMessage('revolver')} />;
            break;
        case armouryItems.guns.battleRevolver.name:
            result = <img src={images.bodyElements.pistols.battleRevolverRightHand} alt={chrome.i18n.getMessage('battle_revolver')} />;
            break;
        case items.weapons.axe.name:
            result = <img src={images.bodyElements.axe.rightHand} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katana.rightHand} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.battleWeapons.khopesh.name:
            result = <img src={images.bodyElements.khopesh} alt={chrome.i18n.getMessage('khopesh')} />;
            break;
        case armouryItems.battleWeapons.macuahuitl.name:
            result = <img src={images.bodyElements.macuahuitl.rightHand} alt={chrome.i18n.getMessage('macuahuitl')} />;
            break;
        case armouryItems.battleWeapons.rapier.name:
            result = <img src={images.bodyElements.rapier.rightHand} alt={chrome.i18n.getMessage('rapier')} />;
            break;
        case armouryItems.battleWeapons.sabre.name:
            result = <img src={images.bodyElements.sabre.rightHand} alt={chrome.i18n.getMessage('sabre')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxe.name:
            result = <img src={images.bodyElements.battleMageAxe.rightHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        default:
            break;
    }

    return result
}

export default getRightHandImage
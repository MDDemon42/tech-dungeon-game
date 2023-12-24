import cybers from "../../gameScreens/CyberLab/cybers";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";

function getRightHandImage(rightHandName: string) {
    let result = null;

    switch (rightHandName) {
        case cybers.weapons.cyberClaw.name:
            result = <img src={images.bodyElements.cyberClaw} alt={chrome.i18n.getMessage('cyber_claw')} />;
            break;
        case cybers.weapons.heatSaber.name:
            result = <img src={images.bodyElements.heatSaber} alt={chrome.i18n.getMessage('heat_saber')} />;
            break;
        case cybers.weapons.taserWhip.name:
            result = <img src={images.bodyElements.taserWhip} alt={chrome.i18n.getMessage('taser_whip')} />;
            break;
        case cybers.weapons.cyberFistRightHand.name:
            result = <img src={images.bodyElements.cyberFistRightHand} alt={chrome.i18n.getMessage('cyber_fist_right_hand')} />;
            break;
        case mutations.weapons.clawRight.name:
            result = <img src={images.bodyElements.clawRight} alt={chrome.i18n.getMessage('claws')} />;
            break;
        case items.weapons.steelSwordRightHand.name:
            result = <img src={images.bodyElements.steelSwordRightHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case armouryItems.battleWeapons.battleAxeRightHand.name:
            result = <img src={images.bodyElements.battleAxeRightHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMace} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case items.weapons.spear.name:
            result = <img src={images.bodyElements.spear} alt={chrome.i18n.getMessage('spear')} />;
            break;
        case items.weapons.pickaxe.name:
            result = <img src={images.bodyElements.pickaxe} alt={chrome.i18n.getMessage('pickaxe')} />;
            break;
        case armouryItems.guns.pistol.name:
            result = <img src={images.bodyElements.pistol} alt={chrome.i18n.getMessage('pistol')} />;
            break;
        case armouryItems.guns.battlePistol.name:
            result = <img src={images.bodyElements.battlePistol} alt={chrome.i18n.getMessage('battle_pistol')} />;
            break;
        case armouryItems.guns.revolverRightHand.name:
            result = <img src={images.bodyElements.revolverRightHand} alt={chrome.i18n.getMessage('revolver')} />;
            break;
        case armouryItems.guns.battleRevolverRightHand.name:
            result = <img src={images.bodyElements.battleRevolverRightHand} alt={chrome.i18n.getMessage('battle_revolver')} />;
            break;
        case items.weapons.axe.name:
            result = <img src={images.bodyElements.axe} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case armouryItems.battleWeapons.dragonBoneBlade.name:
            result = <img src={images.bodyElements.dragonBoneBlade} alt={chrome.i18n.getMessage('dragon_bone_blade')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katana} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.battleWeapons.khopesh.name:
            result = <img src={images.bodyElements.khopesh} alt={chrome.i18n.getMessage('khopesh')} />;
            break;
        case armouryItems.battleWeapons.macuahuitl.name:
            result = <img src={images.bodyElements.macuahuitl} alt={chrome.i18n.getMessage('macuahuitl')} />;
            break;
        case armouryItems.battleWeapons.rapier.name:
            result = <img src={images.bodyElements.rapier} alt={chrome.i18n.getMessage('rapier')} />;
            break;
        case armouryItems.battleWeapons.sabre.name:
            result = <img src={images.bodyElements.sabre} alt={chrome.i18n.getMessage('sabre')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxeRightHand.name:
            result = <img src={images.bodyElements.battleMageAxeRightHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        case armouryItems.mageWeapons.mageDragonBoneBlade.name:
            result = <img src={images.bodyElements.mageDragonBoneBlade} alt={chrome.i18n.getMessage('mage_dragon_bone_blade')} />;
            break;
        default:
            break;
    }

    return result
}

export default getRightHandImage
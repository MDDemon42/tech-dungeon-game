import cybers from "../../gameScreens/CyberLab/cybers";
import guildItems from "../../gameScreens/Guild/guildItems";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";

function getLeftHandImage(
    leftHandName: string,
    skinName: string
) {
    let result = null;

    switch (leftHandName) {
        case cybers.weapons.acidizer.name:
            result = <img src={images.bodyElements.cybers.acidizer} alt={chrome.i18n.getMessage('acidizer')} />;
            break;
        case cybers.armors.energyShield.name:
            result = <img src={images.bodyElements.cybers.energyShield} alt={chrome.i18n.getMessage('energy_shield')} />;
            break;
        case cybers.weapons.freezer.name:
            result = <img src={images.bodyElements.cybers.freezer} alt={chrome.i18n.getMessage('freezer')} />;
            break;
        case cybers.weapons.treeCutter.name:
            result = <img src={images.bodyElements.cybers.treeCutter} alt={chrome.i18n.getMessage('tree_cutter')} />;
            break;
        case cybers.weapons.cyberFist.name:
            result = <img src={images.bodyElements.cybers.fistLeftHand} alt={chrome.i18n.getMessage('cyber_fist_left_hand')} />;
            break;
        case cybers.weapons.laser.name:
            result = <img src={images.bodyElements.cybers.laser} alt={chrome.i18n.getMessage('laser')} />;
            break;
        case mutations.weapons.claw.name:
            switch (skinName) {
                case mutations.armors.scales.name:
                    result = <img src={images.bodyElements.claws.scalesLeft} alt={chrome.i18n.getMessage('claws')} />;
                    break;
                case mutations.armors.fur.name:
                    result = <img src={images.bodyElements.claws.furLeft} alt={chrome.i18n.getMessage('claws')} />;
                    break;
                default:
                    result = <img src={images.bodyElements.claws.usualLeft} alt={chrome.i18n.getMessage('claws')} />;
                    break;
            }            
            break;
        case items.weapons.axe.name:
            result = <img src={images.bodyElements.axe.leftHand} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case items.weapons.pickaxe.name:
            result = <img src={images.bodyElements.pickaxe.leftHand} alt={chrome.i18n.getMessage('pickaxe')} />;
            break;
        case items.weapons.steelSword.name:
            result = <img src={images.bodyElements.steelSword.leftHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case items.weapons.steelMace.name:
            result = <img src={images.bodyElements.steelMace.leftHand} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case armouryItems.battleWeapons.battleAxe.name:
            result = <img src={images.bodyElements.battleAxe.leftHand} alt={chrome.i18n.getMessage('battle_axe')} />;
            break;
        case items.armors.steelShield.name:
            result = <img src={images.bodyElements.shield.steel} alt={chrome.i18n.getMessage('steel_shield')} />;
            break;
        case items.armors.woodenShield.name:
            result = <img src={images.bodyElements.shield.wooden} alt={chrome.i18n.getMessage('wooden_shield')} />;
            break;
        case guildItems.weapons.steelChakram.name:
            result = <img src={images.bodyElements.chakram} alt={chrome.i18n.getMessage('steel_chakram')} />;
            break;
        case armouryItems.mageWeapons.battleMageAxe.name:
            result = <img src={images.bodyElements.battleMageAxe.leftHand} alt={chrome.i18n.getMessage('battle_mage_axe')} />;
            break;
        case armouryItems.battleWeapons.katana.name:
            result = <img src={images.bodyElements.katana.leftHand} alt={chrome.i18n.getMessage('katana')} />;
            break;
        case armouryItems.battleWeapons.macuahuitl.name:
            result = <img src={images.bodyElements.macuahuitl.leftHand} alt={chrome.i18n.getMessage('macuahuitl')} />;
            break;
        case armouryItems.battleWeapons.rapier.name:
            result = <img src={images.bodyElements.rapier.leftHand} alt={chrome.i18n.getMessage('rapier')} />;
            break;
        case armouryItems.battleWeapons.sabre.name:
            result = <img src={images.bodyElements.sabre.leftHand} alt={chrome.i18n.getMessage('sabre')} />;
            break;
        case armouryItems.guns.revolver.name:
            result = <img src={images.bodyElements.pistols.revolverLeftHand} alt={chrome.i18n.getMessage('revolver')} />;
            break;
        case armouryItems.guns.battleRevolver.name:
            result = <img src={images.bodyElements.pistols.battleRevolverLeftHand} alt={chrome.i18n.getMessage('battle_revolver')} />;
            break;
        default:
            break;
    }

    return result
}

export default getLeftHandImage
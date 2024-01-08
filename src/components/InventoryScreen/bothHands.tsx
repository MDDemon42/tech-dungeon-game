import guildItems from "../../gameScreens/Guild/guildItems";
import items from "../../gameScreens/Market/items";
import { createNoItem } from "../../helpers/emptyEssencesCreators";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

function getBothHandsImage(
    bothHandsName: string,
    rightHandName: string,
    leftHandName: string
) {
    let result = null;

    switch (bothHandsName) {
        case items.weapons.pierceStick.name:
            result = [
                <img src={images.bodyElements.pierceStick} alt={chrome.i18n.getMessage('pierce_stick')} />
            ]
            break;
        case items.weapons.steelSpear.name:
            result = [
                <img src={images.bodyElements.steelSpear} alt={chrome.i18n.getMessage('steel_spear')} />
            ]
            break;
        case guildItems.weapons.runicGreataxe.name:
            result = [
                <img src={images.bodyElements.runicGreataxe} alt={chrome.i18n.getMessage('runic_greataxe')} />,
            ];
            break;
        case items.weapons.steelGreataxe.name:
            result = [
                <img src={images.bodyElements.steelGreataxe} alt={chrome.i18n.getMessage('steel_greataxe')} />,
                <img src={images.bodyElements.rightHand} alt='rightHand' />
            ];
            break;
        case wizardItems.weapons.magisterScepter.name:
            result = [
                <img src={images.bodyElements.magisterScepter} alt={chrome.i18n.getMessage('magister_scepter')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case wizardItems.weapons.apprenticeRod.name:
            result = [
                <img src={images.bodyElements.apprenticeRod} alt={chrome.i18n.getMessage('apprentice_rod')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case items.weapons.oakBow.name:
            result = [
                <img src={images.bodyElements.oakBow} alt={chrome.i18n.getMessage('oak_bow')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case guildItems.weapons.oakCrossow.name:
            result = [
                <img src={images.bodyElements.oakCrossbow} alt={chrome.i18n.getMessage('oak_crossbow')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case guildItems.weapons.runicGreathammer.name:
            result = [
                <img src={images.bodyElements.runicGreathammer} alt={chrome.i18n.getMessage('runic_greatsword')} />,
            ];
            break;
        case items.weapons.steelGreathammer.name:
            result = [
                <img src={images.bodyElements.steelGreathammer} alt={chrome.i18n.getMessage('steel_greatsword')} />,
            ];
            break;
        case guildItems.weapons.runicGreatsword.name:
            result = [
                <img src={images.bodyElements.runicGreatsword} alt={chrome.i18n.getMessage('runic_greatsword')} />,
            ];
            break;
        case items.weapons.steelGreatsword.name:
            result = [
                <img src={images.bodyElements.steelGreatsword} alt={chrome.i18n.getMessage('steel_greatsword')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case armouryItems.guns.musket.name:
            result = [
                <img src={images.bodyElements.musket} alt={chrome.i18n.getMessage('musket')} />
            ];
            break;
        case armouryItems.guns.rifle.name:
            result = [
                <img src={images.bodyElements.rifle} alt={chrome.i18n.getMessage('rifle')} />
            ];
            break;
        case armouryItems.guns.battleMusket.name:
            result = [
                <img src={images.bodyElements.battleMusket} alt={chrome.i18n.getMessage('battle_musket')} />
            ];
            break;
        case armouryItems.guns.battleRifle.name:
            result = [
                <img src={images.bodyElements.battleRifle} alt={chrome.i18n.getMessage('battle_rifle')} />
            ];
            break;
        case armouryItems.mageWeapons.mageMusket.name:
            result = [
                <img src={images.bodyElements.mageMusket} alt={chrome.i18n.getMessage('mage_musket')} />
            ];
            break;
        case armouryItems.mageWeapons.mageRifle.name:
            result = [
                <img src={images.bodyElements.mageRifle} alt={chrome.i18n.getMessage('mage_rifle')} />
            ];
            break;
        case armouryItems.battleWeapons.glaive.name:
            result = [
                <img src={images.bodyElements.glaive} alt={chrome.i18n.getMessage('glaive')} />
            ];
            break;
        case armouryItems.mageWeapons.mageGlaive.name:
            result = [
                <img src={images.bodyElements.mageGlaive} alt={chrome.i18n.getMessage('mage_glaive')} />
            ];
            break;
        case armouryItems.battleWeapons.halberd.name:
            result = [
                <img src={images.bodyElements.halberd} alt={chrome.i18n.getMessage('halberd')} />
            ];
            break;
        case armouryItems.mageWeapons.mageHalberd.name:
            result = [
                <img src={images.bodyElements.mageHalberd} alt={chrome.i18n.getMessage('mage_halberd')} />
            ];
            break;
        case armouryItems.mageWeapons.battleMageMusket.name:
            result = [
                <img src={images.bodyElements.battleMageMusket} alt={chrome.i18n.getMessage('battle_mage_musket')} />
            ];
            break;
        case armouryItems.mageWeapons.battleMageRifle.name:
            result = [
                <img src={images.bodyElements.battleMageRifle} alt={chrome.i18n.getMessage('battle_mage_rifle')} />
            ];
            break;
        case armouryItems.battleWeapons.dragonBoneBlade.name:
            result = [
                <img src={images.bodyElements.dragonBoneBlade} alt={chrome.i18n.getMessage('dragon_bone_blade')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case armouryItems.mageWeapons.mageDragonBoneBlade.name:
            result = [
                <img src={images.bodyElements.mageDragonBoneBlade} alt={chrome.i18n.getMessage('mage_dragon_bone_blade')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        default:
            result = [];
            if (rightHandName === createNoItem().name) {
                result.push(<img src={images.bodyElements.rightHand} alt='rightHand' />);
            }
            if (leftHandName === createNoItem().name) {
                result.push(<img src={images.bodyElements.leftHand} alt='leftHand' />);
            }            
            break;
    }

    return result
}

export default getBothHandsImage
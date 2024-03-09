import guildItems from "../../gameScreens/Guild/guildItems";
import items from "../../gameScreens/Market/items";
import { createNoItem } from "../../helpers/emptyEssencesCreators";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

function getBothHandsImage(
    bothHandsName: string,
    rightHandName: string,
    leftHandName: string,
    backItemName: string
) {
    let result = null;

    switch (bothHandsName) {
        case items.weapons.pierceStick.name:
            result = [
                <img src={images.bodyElements.bothHands.pierceStick} alt={chrome.i18n.getMessage('pierce_stick')} />
            ]
            break;
        case items.weapons.steelSpear.name:
            result = [
                <img src={images.bodyElements.bothHands.steelSpear} alt={chrome.i18n.getMessage('steel_spear')} />
            ]
            break;
        case guildItems.weapons.runicGreataxe.name:
            result = [
                <img src={images.bodyElements.bothHands.runicGreataxe} alt={chrome.i18n.getMessage('runic_greataxe')} />,
            ];
            break;
        case items.weapons.steelGreataxe.name:
            result = [
                <img src={images.bodyElements.bothHands.steelGreataxe} alt={chrome.i18n.getMessage('steel_greataxe')} />,
                <img src={images.bodyElements.bothHands.rightHand} alt='rightHand' />
            ];
            break;
        case wizardItems.weapons.magisterScepter.name:
            result = [
                <img src={images.bodyElements.bothHands.magisterScepter} alt={chrome.i18n.getMessage('magister_scepter')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        case wizardItems.weapons.apprenticeRod.name:
            result = [
                <img src={images.bodyElements.bothHands.apprenticeRod} alt={chrome.i18n.getMessage('apprentice_rod')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        case items.weapons.oakBow.name:
            result = [
                <img src={images.bodyElements.bothHands.oakBow} alt={chrome.i18n.getMessage('oak_bow')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        case guildItems.weapons.oakCrossow.name:
            result = [
                <img src={images.bodyElements.bothHands.oakCrossbow} alt={chrome.i18n.getMessage('oak_crossbow')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        case guildItems.weapons.runicGreathammer.name:
            result = [
                <img src={images.bodyElements.bothHands.runicGreathammer} alt={chrome.i18n.getMessage('runic_greatsword')} />,
            ];
            break;
        case items.weapons.steelGreathammer.name:
            result = [
                <img src={images.bodyElements.bothHands.steelGreathammer} alt={chrome.i18n.getMessage('steel_greatsword')} />,
            ];
            break;
        case guildItems.weapons.runicGreatsword.name:
            result = [
                <img src={images.bodyElements.bothHands.runicGreatsword} alt={chrome.i18n.getMessage('runic_greatsword')} />,
            ];
            break;
        case items.weapons.steelGreatsword.name:
            result = [
                <img src={images.bodyElements.bothHands.steelGreatsword} alt={chrome.i18n.getMessage('steel_greatsword')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        case armouryItems.guns.musket.name:
            result = [
                <img src={images.bodyElements.bothHands.musket} alt={chrome.i18n.getMessage('musket')} />
            ];
            break;
        case armouryItems.guns.rifle.name:
            result = [
                <img src={images.bodyElements.bothHands.rifle} alt={chrome.i18n.getMessage('rifle')} />
            ];
            break;
        case armouryItems.guns.battleMusket.name:
            result = [
                <img src={images.bodyElements.bothHands.battleMusket} alt={chrome.i18n.getMessage('battle_musket')} />
            ];
            break;
        case armouryItems.guns.battleRifle.name:
            result = [
                <img src={images.bodyElements.bothHands.battleRifle} alt={chrome.i18n.getMessage('battle_rifle')} />
            ];
            break;
        case armouryItems.mageWeapons.mageMusket.name:
            result = [
                <img src={images.bodyElements.bothHands.mageMusket} alt={chrome.i18n.getMessage('mage_musket')} />
            ];
            break;
        case armouryItems.mageWeapons.mageRifle.name:
            result = [
                <img src={images.bodyElements.bothHands.mageRifle} alt={chrome.i18n.getMessage('mage_rifle')} />
            ];
            break;
        case armouryItems.battleWeapons.glaive.name:
            result = [
                <img src={images.bodyElements.bothHands.glaive} alt={chrome.i18n.getMessage('glaive')} />
            ];
            break;
        case armouryItems.mageWeapons.mageGlaive.name:
            result = [
                <img src={images.bodyElements.bothHands.mageGlaive} alt={chrome.i18n.getMessage('mage_glaive')} />
            ];
            break;
        case armouryItems.battleWeapons.halberd.name:
            result = [
                <img src={images.bodyElements.bothHands.halberd} alt={chrome.i18n.getMessage('halberd')} />
            ];
            break;
        case armouryItems.mageWeapons.mageHalberd.name:
            result = [
                <img src={images.bodyElements.bothHands.mageHalberd} alt={chrome.i18n.getMessage('mage_halberd')} />
            ];
            break;
        case armouryItems.mageWeapons.battleMageMusket.name:
            result = [
                <img src={images.bodyElements.bothHands.battleMageMusket} alt={chrome.i18n.getMessage('battle_mage_musket')} />
            ];
            break;
        case armouryItems.mageWeapons.battleMageRifle.name:
            result = [
                <img src={images.bodyElements.bothHands.battleMageRifle} alt={chrome.i18n.getMessage('battle_mage_rifle')} />
            ];
            break;
        case armouryItems.battleWeapons.dragonBoneBlade.name:
            result = [
                <img src={images.bodyElements.bothHands.dragonBoneBlade} alt={chrome.i18n.getMessage('dragon_bone_blade')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        case armouryItems.mageWeapons.mageDragonBoneBlade.name:
            result = [
                <img src={images.bodyElements.bothHands.mageDragonBoneBlade} alt={chrome.i18n.getMessage('mage_dragon_bone_blade')} />,
                <img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />
            ];
            break;
        default:
            result = [];
            if (rightHandName === createNoItem().name) {
                result.push(<img src={images.bodyElements.bothHands.rightHand} alt='rightHand' />);
            }
            if (leftHandName === createNoItem().name) {
                if (backItemName === guildItems.weapons.runicGreatsword.name) {
                    result.push(<img src={images.bodyElements.bothHands.runicGreatswordGlove} alt='leftHand' />);
                } else {
                    result.push(<img src={images.bodyElements.bothHands.leftHand} alt='leftHand' />);
                }
            }            
            break;
    }

    return result
}

export default getBothHandsImage
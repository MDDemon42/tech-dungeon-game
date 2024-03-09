import items from "../../gameScreens/Market/items";
import images from "../../images/images";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

function getArmorImage(armorName: string) {
    let result = null;

    switch (armorName) {
        case wizardItems.armors.magisterRobe.name:
            result = <img src={images.bodyElements.armor.magisterRobe} alt={chrome.i18n.getMessage('magister_robe')} />;
            break;
        case items.armors.steelArmor.name:
            result = <img src={images.bodyElements.armor.steelArmor} alt={chrome.i18n.getMessage('steel_armor')} />;
            break;
        case items.armors.leatherArmor.name:
            result = <img src={images.bodyElements.armor.leatherArmor} alt={chrome.i18n.getMessage('leather_armor')} />;
            break;
        default:
            break;
    }

    return result
}

export default getArmorImage
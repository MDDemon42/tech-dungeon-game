import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getTailImage(tailName: string) {
    let result = null;

    switch (tailName) {
        case mutations.weapons.tailWithBlunt.name:
            result = <img src={images.bodyElements.tailWithBlunt} alt={chrome.i18n.getMessage('tail_with_blunt')} />;
            break;
        case mutations.weapons.tailWithSting.name:
            result = <img src={images.bodyElements.tailWithSting} alt={chrome.i18n.getMessage('tail_with_sting')} />;
            break;
        default:
            break;
    }

    return result
}

export default getTailImage
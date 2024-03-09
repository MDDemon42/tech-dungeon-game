import cybers from "../../gameScreens/CyberLab/cybers";
import powers from "../../gameScreens/FocusSite/powers";
import rituals from "../../gameScreens/Guild/rituals";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getSkinImage(
    ritualsUserNames: string[],
    powersUserNames: string[],
    userStrength: number,
    skinName: string
) {
    let result = [];
    
    switch (skinName) {
        case cybers.armors.nanoMatrix.name:
            result.push(<img src={images.bodyElements.torso.nanoMatrix} alt={chrome.i18n.getMessage('nano_matrix')} />);
            break;
        case cybers.armors.nanoVest.name:
            result.push(<img src={images.bodyElements.torso.nanoVest} alt={chrome.i18n.getMessage('nano_vest')} />);
            break;
        case mutations.armors.scales.name:
            result.push(<img src={images.bodyElements.torso.scales} alt={chrome.i18n.getMessage('scales')} />);
            break;
        case mutations.armors.fur.name:
            result.push(<img src={images.bodyElements.torso.fur} alt={chrome.i18n.getMessage('fur')} />);
            break;
        default:
            result = [
                ritualsUserNames.includes(rituals.titanSkin.name) ?
                    <img src={images.bodyElements.torso.titan} alt='titanTorso' /> :
                    userStrength >= 3 ?
                        <img src={images.bodyElements.torso.brutal} alt='brutalTorso' /> :
                        <img src={images.bodyElements.torso.usual} alt='torso' />,
                powersUserNames.includes(powers.armors.guardianAura.name) ?
                    <img src={images.bodyElements.tattoes.guardianAura} alt={chrome.i18n.getMessage('guardian_aura')} /> :
                    powersUserNames.includes(powers.armors.guardianField.name) ?
                        <img src={images.bodyElements.tattoes.guardianField} alt={chrome.i18n.getMessage('guardian_field')} /> : null,
                powersUserNames.includes(powers.weapons.psiBlade.name) ?
                    <img src={images.bodyElements.tattoes.psiBlade} alt={chrome.i18n.getMessage('psi_blade')} /> : null,
                powersUserNames.includes(powers.weapons.psiJavelin.name) ?
                    <img src={images.bodyElements.tattoes.psiJavelin} alt={chrome.i18n.getMessage('psi_javelin')} /> : null,
                powersUserNames.includes(powers.weapons.psiLightning.name) ?
                    <img src={images.bodyElements.tattoes.psiLightning} alt={chrome.i18n.getMessage('psi_lightning')} /> : null
            ];
            break;
    }
    result.push(<img src={images.bodyElements.belts.standart} alt='belt' />);

    return result
}

export default getSkinImage
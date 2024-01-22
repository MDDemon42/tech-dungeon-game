import cybers from "../../gameScreens/CyberLab/cybers";
import powers from "../../gameScreens/FocusSite/powers";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getHeadImage(
    powersUserNames: string[],
    chinName: string,
    eyesName: string,
    headName: string
) {
    let result = [
        <img src={images.bodyElements.head} alt='head' />
    ];
    
    switch (chinName) {
        case mutations.weapons.acidSpit.name:
            result.push(<img src={images.bodyElements.acidSpit} alt={chrome.i18n.getMessage('acid_spit')} />);
            break;
        case mutations.weapons.fireBreath.name:
            result.push(<img src={images.bodyElements.fireBreath} alt={chrome.i18n.getMessage('fire_breath')} />);
            break;
        case mutations.weapons.lowerFangs.name:
            result.push(<img src={images.bodyElements.lowerFangs} alt={chrome.i18n.getMessage('lower_fangs')} />);
            break;
        default:
            break;
    }

    if (powersUserNames.includes(powers.other.telekinesis.name)) {
        result.push(<img src={images.bodyElements.telekinesis} alt={chrome.i18n.getMessage('telekinesis')} />);
    }
    if (powersUserNames.includes(powers.other.hypnosis.name)) {
        result.push(<img src={images.bodyElements.hypnosis} alt={chrome.i18n.getMessage('hypnosis')} />);
    }
    switch (eyesName) {
        case mutations.other.dragonEyes.name:
            result.push(<img src={images.bodyElements.dragonEyes} alt={chrome.i18n.getMessage('dragon_eyes')} />);
            break;
        case cybers.other.cyberEyes.name:
            result.push(<img src={images.bodyElements.cyberEyes} alt={chrome.i18n.getMessage('cyber_eyes')} />);
            break;
        default:
            result.push(<img src={images.bodyElements.eyes} alt='eyes' />);
            break;
    }
    if (powersUserNames.includes(powers.other.intuition.name)) {
        result.push(<img src={images.bodyElements.intuition} alt={chrome.i18n.getMessage('intuition')} />);
    }
    switch (headName) {
        case mutations.weapons.horns.name:
            result.push(<img src={images.bodyElements.horns} alt={chrome.i18n.getMessage('horns')} />);
            break;
        default:
            break;
    }

    return result
}

export default getHeadImage
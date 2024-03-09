import cybers from "../../gameScreens/CyberLab/cybers";
import powers from "../../gameScreens/FocusSite/powers";
import mutations from "../../gameScreens/MutaLab/mutations";
import { raceNames } from "../../general/races/races";
import images from "../../images/images";

function getHeadImage(
    userRace: string,
    powersUserNames: string[],
    chinName: string,
    eyesName: string,
    headName: string
) {
    switch (userRace) {
        case raceNames.Ankylosaurus:
            return <img src={images.bodyElements.heads.ankylosaurus} alt={chrome.i18n.getMessage('race_ankylosaurus')} />;

        case raceNames.Dragon:
            return <img src={images.bodyElements.heads.dragon} alt={chrome.i18n.getMessage('race_dragon')} />;

        case raceNames.Gnoll:
            return <img src={images.bodyElements.heads.gnoll} alt={chrome.i18n.getMessage('race_gnoll')} />;

        case raceNames.Naga:
            return <img src={images.bodyElements.heads.naga} alt={chrome.i18n.getMessage('race_naga')} />;

        case raceNames.Raptor:
            return <img src={images.bodyElements.heads.raptor} alt={chrome.i18n.getMessage('race_raptor')} />;
        
        case raceNames.Satyr:
            return <img src={images.bodyElements.heads.satyr} alt={chrome.i18n.getMessage('race_satyr')} />;
        
        case raceNames.Taur:
            return <img src={images.bodyElements.heads.taur} alt={chrome.i18n.getMessage('race_taur')} />;
        
        default: 
            break;
    }

    let result = [
        <img src={images.bodyElements.heads.usual} alt='head' />
    ];
    
    switch (chinName) {
        case mutations.weapons.acidSpit.name:
            result.push(<img src={images.bodyElements.mutations.acidSpit} alt={chrome.i18n.getMessage('acid_spit')} />);
            break;
        case mutations.weapons.fireBreath.name:
            result.push(<img src={images.bodyElements.mutations.fireBreath} alt={chrome.i18n.getMessage('fire_breath')} />);
            break;
        case mutations.weapons.lowerFangs.name:
            result.push(<img src={images.bodyElements.mutations.lowerFangs} alt={chrome.i18n.getMessage('lower_fangs')} />);
            break;
        default:
            break;
    }

    if (powersUserNames.includes(powers.other.telekinesis.name)) {
        result.push(<img src={images.bodyElements.tattoes.telekinesis} alt={chrome.i18n.getMessage('telekinesis')} />);
    }
    if (powersUserNames.includes(powers.other.hypnosis.name)) {
        result.push(<img src={images.bodyElements.tattoes.hypnosis} alt={chrome.i18n.getMessage('hypnosis')} />);
    }
    switch (eyesName) {
        case mutations.other.dragonEyes.name:
            result.push(<img src={images.bodyElements.mutations.dragonEyes} alt={chrome.i18n.getMessage('dragon_eyes')} />);
            break;
        case cybers.other.cyberEyes.name:
            result.push(<img src={images.bodyElements.cybers.eyes} alt={chrome.i18n.getMessage('cyber_eyes')} />);
            break;
        default:
            result.push(<img src={images.bodyElements.heads.eyes} alt='eyes' />);
            break;
    }
    if (powersUserNames.includes(powers.other.intuition.name)) {
        result.push(<img src={images.bodyElements.tattoes.intuition} alt={chrome.i18n.getMessage('intuition')} />);
    }
    switch (headName) {
        case mutations.weapons.horns.name:
            result.push(<img src={images.bodyElements.mutations.horns} alt={chrome.i18n.getMessage('horns')} />);
            break;
        default:
            break;
    }

    return result
}

export default getHeadImage
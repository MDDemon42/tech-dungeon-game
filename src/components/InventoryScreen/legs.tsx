import cybers from "../../gameScreens/CyberLab/cybers";
import powers from "../../gameScreens/FocusSite/powers";
import rituals from "../../gameScreens/Guild/rituals";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getLegsImage(
    legsName: string,
    skinName: string,
    ritualsUserNames: string[],
    powersUserNames: string[],
    userStrength: number
) {
    let result = [];

    switch (legsName) {
        case mutations.other.hooves.name:
            result.push(<img src={images.bodyElements.hooves} alt={chrome.i18n.getMessage('hooves')} />);
            break;
        case mutations.weapons.raptorLegs.name:
            result.push(<img src={images.bodyElements.raptorLegs} alt={chrome.i18n.getMessage('raptor_legs')} />);
            break;
        default:
            result = [
                ritualsUserNames.includes(rituals.titanSkin.name) ?
                    <img src={images.bodyElements.titanLegs} alt='titanLegs' /> :
                    userStrength >= 3 ?
                        <img src={images.bodyElements.brutalLegs} alt='brutalLegs' /> :
                        <img src={images.bodyElements.legs} alt='legs' />,
                powersUserNames.includes(powers.other.levitation.name) ?
                    <img src={images.bodyElements.levitation} alt={chrome.i18n.getMessage('levitation')} /> : null,
                skinName === cybers.armors.nanoMatrix.name ?
                    <img src={images.bodyElements.nanoMatrixLegs} alt='nanoMatrixLegs' /> :
                    skinName === cybers.armors.nanoVest.name ?
                        <img src={images.bodyElements.nanoVestLegs} alt='nanoVestLegs' /> : null,
                legsName === cybers.other.reactiveFeet.name ?
                    <img src={images.bodyElements.reactiveFeet} alt={chrome.i18n.getMessage('reactive_feet')} /> : null
            ]
            break;
    }

    return result
}

export default getLegsImage
import cybers from "../../gameScreens/CyberLab/cybers";
import powers from "../../gameScreens/FocusSite/powers";
import rituals from "../../general/rituals";
import armouryItems from "../../gameScreens/Mansion/armouryItems";
import items from "../../gameScreens/Market/items";
import mutations from "../../gameScreens/MutaLab/mutations";
import images from "../../images/images";

function getLegsImage(
    leftHipName: string,
    rightHipName: string,
    legsName: string,
    skinName: string,
    ritualsUserNames: string[],
    powersUserNames: string[],
    userStrength: number
) {
    if (ritualsUserNames.includes(rituals.fireRituals.fireElemental.name)) {
        return [
            <img src={images.bodyElements.legs.usual} alt='legs' />,
            <img src={images.bodyElements.legs.flameLegs} alt='flameLegs' />
        ]
    }

    let result = [];

    switch (legsName) {
        case mutations.other.hooves.name:
            result.push(<img src={images.bodyElements.legs.hooves} alt={chrome.i18n.getMessage('hooves')} />);
            break;
        case mutations.weapons.raptorLegs.name:
            result.push(<img src={images.bodyElements.legs.raptor} alt={chrome.i18n.getMessage('raptor_legs')} />);
            break;
        default:
            result = [
                ritualsUserNames.includes(rituals.guildRituals.titanSkin.name) ?
                    <img src={images.bodyElements.legs.titan} alt='titanLegs' /> :
                    userStrength >= 3 ?
                        <img src={images.bodyElements.legs.brutal} alt='brutalLegs' /> :
                        <img src={images.bodyElements.legs.usual} alt='legs' />,
                powersUserNames.includes(powers.other.levitation.name) ?
                    <img src={images.bodyElements.tattoes.levitation} alt={chrome.i18n.getMessage('levitation')} /> : null,
                skinName === cybers.armors.nanoMatrix.name ?
                    <img src={images.bodyElements.legs.nanoMatrix} alt='nanoMatrixLegs' /> :
                    skinName === cybers.armors.nanoVest.name ?
                        <img src={images.bodyElements.legs.nanoVest} alt='nanoVestLegs' /> : 
                        skinName === mutations.armors.fur.name ?
                            <img src={images.bodyElements.legs.fur} alt='furLegs' /> :
                            skinName === mutations.armors.scales.name ?
                                <img src={images.bodyElements.legs.scales} alt='scalesLegs' /> : null,
                leftHipName === armouryItems.other.holster.name ?
                    <img src={images.bodyElements.ammunition.holsterLeft} alt={chrome.i18n.getMessage('holster')} /> : 
                    leftHipName === items.other.sheath.name ?
                        <img src={images.bodyElements.ammunition.sheathLeft} alt={chrome.i18n.getMessage('sheath')} /> : null,
                rightHipName === armouryItems.other.holster.name ?
                    <img src={images.bodyElements.ammunition.holsterRight} alt={chrome.i18n.getMessage('holster')} /> : 
                    rightHipName === items.other.sheath.name ?
                        <img src={images.bodyElements.ammunition.sheathRight} alt={chrome.i18n.getMessage('sheath')} /> : null,
                legsName === cybers.other.reactiveFeet.name ?
                    <img src={images.bodyElements.legs.reactiveFeet} alt={chrome.i18n.getMessage('reactive_feet')} /> : null
            ]
            break;
    }

    return result
}

export default getLegsImage
import { IPassiveAbility, IRitual } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";
import abilities from "../abilities";
import masteries from "../masteries/masteries";

function createRitual(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        passiveAbility: IPassiveAbility
    ]
): IRitual {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        passiveAbility: abilityInfo[1]
    }
}

const ritual_titanSkin = createRitual(
    [
        chrome.i18n.getMessage('titan_skin'),
        chrome.i18n.getMessage('titan_skin_ritual_description'),
        images.guildianLearnings.titanSkinRitual
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.passiveAbilities.armor.passiveAbility_titanSkin
    ]
)

const rituals = {
    ritual_titanSkin
} 

export default rituals
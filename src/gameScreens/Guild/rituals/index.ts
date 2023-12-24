import { IPassiveAbility, IRitual } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";
import abilities from "../../../general/abilities";
import academyMasteries from "../../Academy/masteries";

function createRitual(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        passiveAbilities: IPassiveAbility[]
    ]
): IRitual {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        passiveAbilities: abilityInfo[1]
    }
}

const titanSkin = createRitual(
    [
        chrome.i18n.getMessage('titan_skin'),
        chrome.i18n.getMessage('titan_skin_ritual_description'),
        images.guildianLearnings.titanSkinRitual
    ],
    [
        academyMasteries.brutalForce.name,
        [abilities.passiveAbilities.armor.titanSkin]
    ]
)

const rituals = {
    titanSkin
} 

export const guildRitualOptions: Record<string, IRitual[]> = {
    0: [],
    1: [rituals.titanSkin]
};

export default rituals
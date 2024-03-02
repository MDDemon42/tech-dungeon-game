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
    ritualInfo: [
        healthCost: number,
        requiredMastery: string,
        passiveAbilities: IPassiveAbility[]
    ]
): IRitual {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        healthCost: ritualInfo[0],
        requiredMastery: ritualInfo[1],
        passiveAbilities: ritualInfo[2]
    }
}

const titanSkin = createRitual(
    [
        chrome.i18n.getMessage('titan_skin'),
        chrome.i18n.getMessage('titan_skin_ritual_description'),
        images.guildianLearnings.titanSkinRitual
    ],
    [
        3,
        academyMasteries.brutalForce.name,
        [abilities.passiveAbilities.rituals.titanSkin]
    ]
);

const rituals = {
    titanSkin
} 

export const guildRitualOptions: Record<string, IRitual[]> = {
    0: [],
    1: [rituals.titanSkin]
};

export default rituals
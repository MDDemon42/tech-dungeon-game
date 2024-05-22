import images from "../../../images/images";
import abilities from "../../../general/abilities";
import academyMasteries from "../../Academy/masteries";
import { IRitual } from "../../../enums-and-interfaces/interfaces";
import { createRitual } from "../../../general/rituals";

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

const guildRituals = {
    titanSkin
}

export const guildRitualOptions: Record<string, IRitual[]> = {
    0: [],
    2: [guildRituals.titanSkin]
};

export default guildRituals
import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacher } from "../../../enums-and-interfaces/interfaces";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import psionMasteries from "../masteries";
import powers from "../powers";

const psionMoloch = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_psion_moloch');
    character.params.class = UserStartClass.dreamer;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.focus] = 3;
    character.params.currentParams[UserParam.focus] = 3;

    character.general.mind.masteries.push(psionMasteries.meditativeInsights);
    character.general.mind.masteries.push(psionMasteries.empoweredStrikes);

    return character
}

const psionAdun = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_psion_adun');
    character.params.class = UserStartClass.ingenious;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 1;
    character.params.currentParams[UserParam.mana] = 1;

    character.params.maxParams[UserParam.focus] = 2;
    character.params.currentParams[UserParam.focus] = 2;

    character.general.mind.masteries.push(psionMasteries.meditativeInsights);
    character.general.mind.masteries.push(psionMasteries.psiEnergy);
    character.general.mind.powers.push(powers.weapons.psiBlade);

    return character
}

export const psionRoomsOptions: Record<string, ICharacher[]> = {
    0: [],
    1: [psionMoloch(), psionAdun()],
}
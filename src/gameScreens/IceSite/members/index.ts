import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacher } from "../../../enums-and-interfaces/interfaces";
import bending from "../../../general/bending";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import coldMasteries from "../masteries";

const cryomancerSergio = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_cryomancer_sergio');
    character.params.class = UserStartClass.creative;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 4;
    character.params.currentParams[UserParam.mana] = 4;

    character.general.mind.masteries.push(coldMasteries.coldAffiliation);
    character.general.mind.bending.push(bending.cryomancy.iceShard);

    return character
}

const cryomancerVito = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_cryomancer_vito');
    character.params.class = UserStartClass.ingenious;

    character.params.maxParams[UserParam.health] = 4;
    character.params.currentParams[UserParam.health] = 4;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(coldMasteries.coldAffiliation);
    character.general.mind.bending.push(bending.cryomancy.iceShard);

    return character
}

export const cryomancerRoomsOptions: Record<string, ICharacher[]> = {
    0: [],
    1: [cryomancerSergio(), cryomancerVito()],
}
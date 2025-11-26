import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacter } from "../../../enums-and-interfaces/interfaces";
import bending from "../../../general/bending";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import fireMasteries from "../masteries";

const pyrokineticHorst = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_pyrokinetic_horst');
    character.params.class = UserStartClass.creative;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 2;
    character.params.currentParams[UserParam.stamina] = 2;

    character.params.maxParams[UserParam.mana] = 4;
    character.params.currentParams[UserParam.mana] = 4;

    character.general.mind.masteries.push(fireMasteries.fireAffiliation);
    character.general.mind.bending.push(bending.pyrokinesis.flame);

    return character
}

const pyrokineticAugust = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_pyrokinetic_august');
    character.params.class = UserStartClass.ingenious;

    character.params.maxParams[UserParam.health] = 4;
    character.params.currentParams[UserParam.health] = 4;

    character.params.maxParams[UserParam.stamina] = 2;
    character.params.currentParams[UserParam.stamina] = 2;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(fireMasteries.fireAffiliation);
    character.general.mind.bending.push(bending.pyrokinesis.flame);

    return character
}

export const pyrokineticRoomsOptions: Record<string, ICharacter[]> = {
    0: [],
    1: [pyrokineticHorst(), pyrokineticAugust()],
}
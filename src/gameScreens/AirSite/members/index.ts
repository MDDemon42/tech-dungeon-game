import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacter } from "../../../enums-and-interfaces/interfaces";
import { aerotheurgy } from "../bendings";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import airMasteries from "../masteries";

const aerotheurgMackunga = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_aerotheurg_mackunga');
    character.params.class = UserStartClass.creative;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 4;
    character.params.currentParams[UserParam.mana] = 4;

    character.general.mind.masteries.push(airMasteries.windAffiliation);
    character.general.mind.bending.push(aerotheurgy.windBlow);

    return character
}

const aerotheurgDanny = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_aerotheurg_danny');
    character.params.class = UserStartClass.ingenious;

    character.params.maxParams[UserParam.health] = 4;
    character.params.currentParams[UserParam.health] = 4;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(airMasteries.windAffiliation);
    character.general.mind.bending.push(aerotheurgy.windBlow);

    return character
}

export const aerotheurgRoomsOptions: Record<string, ICharacter[]> = {
    0: [],
    1: [aerotheurgMackunga(), aerotheurgDanny()],
}
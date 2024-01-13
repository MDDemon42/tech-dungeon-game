import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacher } from "../../../enums-and-interfaces/interfaces";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import wizardMasteries from "../masteries";
import spells from "../spells";
import wizardItems from "../wizardItems";

const apprenticeBilly = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_apprentice_billy');
    character.params.class = UserStartClass.creative;

    character.params.maxParams[UserParam.health] = 4;
    character.params.currentParams[UserParam.health] = 4;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(wizardMasteries.scholarship);
    character.general.mind.spells.push(spells.magicBolt);

    character.general.inventory.bothHands = wizardItems.weapons.apprenticeRod;
    character.general.inventory.hat = wizardItems.armors.apprenticeHat;

    return character
}

const apprenticeSimon = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_apprentice_mangold');
    character.params.class = UserStartClass.creative;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 4;
    character.params.currentParams[UserParam.mana] = 4;

    character.general.mind.masteries.push(wizardMasteries.scholarship);
    character.general.mind.spells.push(spells.magicBolt);

    character.general.inventory.bothHands = wizardItems.weapons.apprenticeRod;
    character.general.inventory.hat = wizardItems.armors.apprenticeHat;

    return character
}

export const apprenticeRoomsOptions: Record<string, ICharacher[]> = {
    0: [],
    1: [apprenticeBilly(), apprenticeSimon()],
}
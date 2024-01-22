import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacher } from "../../../enums-and-interfaces/interfaces";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import guildItems from "../guildItems";
import guildMasteries from "../masteries";

const guildianZarrack = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_guildian_zarrack');
    character.params.class = UserStartClass.ingenious;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 1;
    character.params.currentParams[UserParam.mana] = 1;

    character.params.maxParams[UserParam.focus] = 1;
    character.params.currentParams[UserParam.focus] = 1;

    character.general.mind.masteries.push(guildMasteries.chakramAffiliation);
    character.general.inventory.leftHand = guildItems.weapons.steelChakram;

    return character
}

const guildianShumashi = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_guildian_shumashi');
    character.params.class = UserStartClass.enduring;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 1;
    character.params.currentParams[UserParam.mana] = 1;

    character.params.maxParams[UserParam.focus] = 1;
    character.params.currentParams[UserParam.focus] = 1;

    character.general.mind.masteries.push(guildMasteries.marksmanship);
    character.general.inventory.bothHands = guildItems.weapons.oakCrossow;

    return character
}

export const guildianRoomsOptions: Record<string, ICharacher[]> = {
    0: [],
    1: [guildianZarrack(), guildianShumashi()],
}
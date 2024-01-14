import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacher } from "../../../enums-and-interfaces/interfaces";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import academyMasteries from "../../Academy/masteries";
import armouryItems from "../../Mansion/armouryItems";
import items from "../items";

const adventurerLeon = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_adventurer_leon');
    character.params.class = UserStartClass.vital;

    character.params.maxParams[UserParam.health] = 4;
    character.params.currentParams[UserParam.health] = 4;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 1;
    character.params.currentParams[UserParam.mana] = 1;

    character.general.mind.masteries.push(academyMasteries.axeAffiliation);
    character.general.inventory.rightHand = items.weapons.axe;

    return character
}

const adventurerLeiShan = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_adventurer_lei_shan');
    character.params.class = UserStartClass.richie;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.general.mind.masteries.push(academyMasteries.bowAffiliation);
    character.general.inventory.bothHands = items.weapons.oakBow;

    return character
}

const adventurerDovakin = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_adventurer_dovakin');
    character.params.class = UserStartClass.tireless;
    character.params.level = 5;

    character.params.maxParams[UserParam.health] = 5;
    character.params.currentParams[UserParam.health] = 5;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(academyMasteries.swordAffiliation);
    character.general.inventory.armor = items.armors.steelArmor;
    character.general.inventory.bothHands = armouryItems.mageWeapons.mageDragonBoneBlade;

    return character
}

export const tavernOptions: Record<string, ICharacher[]> = {
    0: [],
    1: [adventurerLeon(), adventurerLeiShan(), adventurerDovakin()],
}
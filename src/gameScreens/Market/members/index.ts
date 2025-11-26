import { UserParam, UserStartClass } from "../../../enums-and-interfaces/enums";
import { ICharacter } from "../../../enums-and-interfaces/interfaces";
import { raceNames } from "../../../general/races/races";
import createEmptyCharacter from "../../../helpers/emptyEssencesCreators";
import academyMasteries from "../../Academy/masteries";
import armouryItems from "../../Mansion/armouryItems";
import mutations from "../../MutaLab/mutations";
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
    character.general.inventory.Right_hand = items.weapons.axe;

    return character
}

const adventurerLeiShan = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_adventurer_lei_shan');
    character.params.class = UserStartClass.enduring;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.general.mind.masteries.push(academyMasteries.bowAffiliation);
    character.general.inventory.Both_hands = items.weapons.oakBow;

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
    character.general.inventory.Armor = items.armors.steelArmor;
    character.general.inventory.Both_hands = armouryItems.mageWeapons.mageDragonBoneBlade;

    character.general.inventory.Eyes = mutations.other.dragonEyes;

    return character
}

const adventurerGormak = () => {
    const character = createEmptyCharacter();

    character.params.name = chrome.i18n.getMessage('name_adventurer_gormak');
    character.params.class = UserStartClass.enduring;
    character.params.level = 5;
    character.params.race = raceNames.Orc;
    character.params.strength = 3;

    character.params.maxParams[UserParam.health] = 6;
    character.params.currentParams[UserParam.health] = 6;

    character.params.maxParams[UserParam.stamina] = 6;
    character.params.currentParams[UserParam.stamina] = 6;

    character.general.mind.masteries.push(academyMasteries.axeAffiliation);
    character.general.inventory.Left_hand = items.weapons.axe;
    character.general.inventory.Right_hand = items.weapons.axe;

    character.general.inventory.Chin = mutations.weapons.lowerFangs;

    return character
}

export const tavernOptions: Record<string, ICharacter[]> = {
    0: [],
    1: [adventurerLeon(), adventurerLeiShan(), adventurerDovakin(), adventurerGormak()],
}
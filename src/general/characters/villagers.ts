import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import items from "../items";
import masteries from "../masteries/masteries";

const guard = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Guard';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.inventory.armor = items.armors.item_leatherArmor;
    character.general.inventory.rightHand = items.weapons.item_steelSwordRightHand;

    return character
}

const barbarian = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Barbarian';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.mind.masteries.push(masteries.mastery_brutalForce);

    character.general.inventory.bothHands = items.weapons.item_steelGreataxe;

    return character
}

const knight = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Knight';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.general.mind.masteries.push(masteries.mastery_swordsmanship);

    character.general.inventory.rightHand = items.weapons.item_steelSwordRightHand;
    character.general.inventory.armor = items.armors.item_steelArmor;
    character.general.inventory.leftHand = items.armors.item_steelShield;

    return character
}

const paladin = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Paladin';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.general.mind.masteries.push(masteries.mastery_brutalForce);

    character.general.inventory.bothHands = items.weapons.item_steelGreatsword;
    character.general.inventory.armor = items.armors.item_steelArmor;

    return character
}

const apprentice = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Apprentice';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(masteries.mastery_scholarship);

    character.general.inventory.bothHands = items.weapons.item_apprenticeRod;
    character.general.inventory.hat = items.armors.item_apprenticeHat;

    return character
}

const magister = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Magister';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(masteries.mastery_magisterDegree);

    character.general.inventory.bothHands = items.weapons.item_magisterScepter;
    character.general.inventory.hat = items.armors.item_magisterHat;
    character.general.inventory.armor = items.armors.item_magisterRobe;

    return character
}

const villagers = {
    guard,
    barbarian,
    knight,
    paladin,
    apprentice,
    magister
}

export default villagers
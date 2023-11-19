import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import items from "../items";
import masteries from "../masteries/masteries";

const dummy = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Dummy';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    return character
}

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

    character.general.mind.masteries.push(masteries.mastery_swordAffiliation);

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

const mights = {
    dummy,
    guard,
    barbarian,
    knight,
    paladin
}

export default mights
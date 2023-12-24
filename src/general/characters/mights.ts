import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import items from "../../gameScreens/Market/items";
import academyMasteries from "../../gameScreens/Academy/masteries";

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

    character.general.inventory.armor = items.armors.leatherArmor;
    character.general.inventory.rightHand = items.weapons.steelSwordRightHand;

    return character
}

const barbarian = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Barbarian';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.mind.masteries.push(academyMasteries.brutalForce);

    character.general.inventory.bothHands = items.weapons.steelGreataxe;

    return character
}

const knight = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Knight';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.general.mind.masteries.push(academyMasteries.swordAffiliation);

    character.general.inventory.rightHand = items.weapons.steelSwordRightHand;
    character.general.inventory.armor = items.armors.steelArmor;
    character.general.inventory.leftHand = items.armors.steelShield;

    return character
}

const paladin = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Paladin';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 5;
    character.params.currentParams[UserParam.stamina] = 5;

    character.general.mind.masteries.push(academyMasteries.brutalForce);

    character.general.inventory.bothHands = items.weapons.steelGreatsword;
    character.general.inventory.armor = items.armors.steelArmor;

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
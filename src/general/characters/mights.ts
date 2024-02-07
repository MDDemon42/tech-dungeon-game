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

    character.general.inventory.Armor = items.armors.leatherArmor;
    character.general.inventory.Right_hand = items.weapons.steelSword;

    return character
}

const barbarian = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Barbarian';
    character.params.strength = 3;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.mind.masteries.push(academyMasteries.brutalForce);

    character.general.inventory.Both_hands = items.weapons.steelGreataxe;

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

    character.general.inventory.Right_hand = items.weapons.steelSword;
    character.general.inventory.Armor = items.armors.steelArmor;
    character.general.inventory.Left_hand = items.armors.steelShield;

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

    character.general.inventory.Both_hands = items.weapons.steelGreatsword;
    character.general.inventory.Armor = items.armors.steelArmor;

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
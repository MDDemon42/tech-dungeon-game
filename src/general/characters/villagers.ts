import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import items from "../items";

const guard = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Guard';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.armor = items.armors.item_leatherArmor;
    character.general.inventory.leftHand = items.armors.item_steelShield;
    character.general.inventory.rightHand = items.weapons.item_steelSwordRightHand;

    return character
}

const barbarian = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Barbarian';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.bothHands = items.weapons.item_steelGreataxe;

    return character
}

const knight = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Knight';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.rightHand = items.weapons.item_steelSwordRightHand;
    character.general.inventory.armor = items.armors.item_steelArmor;
    character.general.inventory.leftHand = items.armors.item_steelShield;

    return character
}

const villagers = {
    guard,
    barbarian,
    knight
}

export default villagers
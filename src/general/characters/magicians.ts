import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import items from "../items";
import masteries from "../masteries/masteries";
import spells from "../spells/spells";

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
    character.general.mind.spells.push(spells.spell_magicBolt);

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
    character.general.mind.spells.push(spells.spell_magicBolt);
    character.general.mind.spells.push(spells.spell_fireball);

    character.general.inventory.bothHands = items.weapons.item_magisterScepter;
    character.general.inventory.hat = items.armors.item_magisterHat;
    character.general.inventory.armor = items.armors.item_magisterRobe;

    return character
}

const magicians = {
    apprentice,
    magister
}

export default magicians
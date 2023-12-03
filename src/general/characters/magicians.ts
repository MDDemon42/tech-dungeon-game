import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import bending from "../bending";
import elementsMasteries from "../masteries/elements";
import wizardMasteries from "../masteries/wizard";
import spells from "../spells/spells";
import wizardItems from "../wizardItems";

const apprentice = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Apprentice';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(wizardMasteries.mastery_scholarship);
    character.general.mind.spells.push(spells.spell_magicBolt);

    character.general.inventory.bothHands = wizardItems.weapons.wizardItem_apprenticeRod;
    character.general.inventory.hat = wizardItems.armors.wizardItem_apprenticeHat;

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

    character.general.mind.masteries.push(wizardMasteries.mastery_magisterDegree);
    character.general.mind.spells.push(spells.spell_magicBolt);

    character.general.inventory.bothHands = wizardItems.weapons.wizardItem_magisterScepter;
    character.general.inventory.hat = wizardItems.armors.wizardItem_magisterHat;
    character.general.inventory.armor = wizardItems.armors.wizardItem_magisterRobe;
    character.general.inventory.back = wizardItems.other.wizardItem_flyingCape;

    return character
}

const cryomancer = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Cryomancer';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(elementsMasteries.mastery_senseOfCold);
    character.general.mind.bending.push(bending.cryomancy.bending_iceShard);
    character.general.mind.bending.push(bending.cryomancy.bending_iceSpear);
    character.general.mind.bending.push(bending.cryomancy.bending_iceHail);
    character.general.mind.bending.push(bending.cryomancy.bending_coldDeath);

    return character
}

const pyrokinetic = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Pyrokinetic';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(elementsMasteries.mastery_senseOfFlame);
    character.general.mind.bending.push(bending.pyrokinesis.bending_flame);
    character.general.mind.bending.push(bending.pyrokinesis.bending_fireball);
    character.general.mind.bending.push(bending.pyrokinesis.bending_fireWave);

    return character
}

const magicians = {
    apprentice,
    magister,
    cryomancer,
    pyrokinetic
}

export default magicians
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

const cryomancer = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Cryomancer';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(masteries.mastery_senseOfCold);
    character.general.mind.spells.push(spells.spell_iceShard);
    character.general.mind.spells.push(spells.spell_iceSpear);
    character.general.mind.spells.push(spells.spell_iceHail);
    character.general.mind.spells.push(spells.spell_coldDeath);

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

    character.general.mind.masteries.push(masteries.mastery_senseOfFlame);
    character.general.mind.spells.push(spells.spell_flame);
    character.general.mind.spells.push(spells.spell_fireball);
    character.general.mind.spells.push(spells.spell_fireWave);

    return character
}

const aerotheurg = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Aerotheurg';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(masteries.mastery_senseOfWind);
    character.general.mind.spells.push(spells.spell_windBlow);
    character.general.mind.spells.push(spells.spell_thunderPunch);
    character.general.mind.spells.push(spells.spell_airDeprivation);

    return character
}

const magicians = {
    apprentice,
    magister,
    cryomancer,
    pyrokinetic,
    aerotheurg
}

export default magicians
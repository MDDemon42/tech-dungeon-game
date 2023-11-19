import { Race, UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import masteries from "../masteries/masteries";
import mutations from "../mutations";

const satyr = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Satyr';
    character.params.race = Race.satyr;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.head = mutations.weapons.mutation_horns;
    character.general.inventory.legs = mutations.other.mutation_hooves;

    return character
}

const minotaur = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Minotaur';
    character.params.race = Race.minotaur;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.mind.masteries.push(masteries.mastery_brutalForce);

    character.general.inventory.head = mutations.weapons.mutation_horns;
    character.general.inventory.legs = mutations.other.mutation_hooves;

    return character
}

const orc = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Orc';
    character.params.race = Race.orc;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.mind.masteries.push(masteries.mastery_brutalForce);

    character.general.inventory.chin = mutations.weapons.mutation_lowerFangs;

    return character
}

const naga = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Naga';
    character.params.race = Race.naga;

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.skin = mutations.armors.mutation_scales;
    character.general.inventory.tail = mutations.weapons.mutation_tailWithSting;

    return character
}

const demon = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Demon';
    character.params.race = Race.demon;

    character.params.maxParams[UserParam.health] = 6;
    character.params.currentParams[UserParam.health] = 6;

    character.params.maxParams[UserParam.stamina] = 6;
    character.params.currentParams[UserParam.stamina] = 6;

    character.params.maxParams[UserParam.focus] = 6;
    character.params.currentParams[UserParam.focus] = 6;

    character.general.inventory.skin = mutations.armors.mutation_fur;
    character.general.inventory.tail = mutations.weapons.mutation_tailWithSting;
    character.general.inventory.head = mutations.weapons.mutation_horns;
    character.general.inventory.legs = mutations.other.mutation_hooves;
    character.general.inventory.chin = mutations.weapons.mutation_lowerFangs;
    character.general.inventory.bothHands = mutations.weapons.mutation_claws;

    return character
}

const dragon = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Dragon';
    character.params.race = Race.dragon;

    character.params.maxParams[UserParam.health] = 6;
    character.params.currentParams[UserParam.health] = 6;

    character.params.maxParams[UserParam.stamina] = 6;
    character.params.currentParams[UserParam.stamina] = 6;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.inventory.skin = mutations.armors.mutation_scales;
    character.general.inventory.tail = mutations.weapons.mutation_tailWithSting;
    character.general.inventory.head = mutations.weapons.mutation_horns;
    character.general.inventory.back = mutations.other.mutation_wings;
    character.general.inventory.chin = mutations.weapons.mutation_acidSplit;
    character.general.inventory.bothHands = mutations.weapons.mutation_claws;

    return character
}

const ultimate_chimera = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Ultimate chimera';
    character.params.race = Race.dragon;

    character.params.maxParams[UserParam.health] = 8;
    character.params.currentParams[UserParam.health] = 8;

    character.params.maxParams[UserParam.stamina] = 8;
    character.params.currentParams[UserParam.stamina] = 8;

    character.general.inventory.skin = mutations.armors.mutation_fur;
    character.general.inventory.tail = mutations.weapons.mutation_tailWithSting;
    character.general.inventory.head = mutations.weapons.mutation_horns;
    character.general.inventory.back = mutations.other.mutation_wings;
    character.general.inventory.chin = mutations.weapons.mutation_acidSplit;
    character.general.inventory.bothHands = mutations.weapons.mutation_claws;
    character.general.inventory.legs = mutations.other.mutation_hooves;
    character.general.inventory.shoulders = mutations.weapons.mutation_pincers;

    return character
}

const mutants = {
    satyr,
    minotaur,
    orc,
    naga,
    demon,
    dragon,
    ultimate_chimera
}

export default mutants
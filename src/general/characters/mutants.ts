import { Race, UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import academyMasteries from "../../gameScreens/Academy/masteries";
import mutations from "../../gameScreens/MutaLab/mutations";
import { raceNames } from "../races/races";

const satyr = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Satyr';
    character.params.race = raceNames[Race.satyr];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.head = mutations.weapons.horns;
    character.general.inventory.legs = mutations.other.hooves;

    return character
}

const minotaur = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Minotaur';
    character.params.race = raceNames[Race.minotaur];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.mind.masteries.push(academyMasteries.brutalForce);

    character.general.inventory.head = mutations.weapons.horns;
    character.general.inventory.legs = mutations.other.hooves;

    return character
}

const orc = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Orc';
    character.params.race = raceNames[Race.orc];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.mind.masteries.push(academyMasteries.brutalForce);

    character.general.inventory.chin = mutations.weapons.lowerFangs;

    return character
}

const naga = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Naga';
    character.params.race = raceNames[Race.naga];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.skin = mutations.armors.scales;
    character.general.inventory.tail = mutations.weapons.tailWithSting;

    return character
}

const demon = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Demon';
    character.params.race = raceNames[Race.demon];

    character.params.maxParams[UserParam.health] = 6;
    character.params.currentParams[UserParam.health] = 6;

    character.params.maxParams[UserParam.stamina] = 6;
    character.params.currentParams[UserParam.stamina] = 6;

    character.params.maxParams[UserParam.focus] = 6;
    character.params.currentParams[UserParam.focus] = 6;

    character.general.inventory.skin = mutations.armors.fur;
    character.general.inventory.tail = mutations.weapons.tailWithSting;
    character.general.inventory.head = mutations.weapons.horns;
    character.general.inventory.legs = mutations.other.hooves;
    character.general.inventory.chin = mutations.weapons.lowerFangs;
    character.general.inventory.bothHands = mutations.weapons.claws;

    return character
}

const dragon = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Dragon';
    character.params.race = raceNames[Race.dragon];

    character.params.maxParams[UserParam.health] = 6;
    character.params.currentParams[UserParam.health] = 6;

    character.params.maxParams[UserParam.stamina] = 6;
    character.params.currentParams[UserParam.stamina] = 6;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.inventory.skin = mutations.armors.scales;
    character.general.inventory.tail = mutations.weapons.tailWithSting;
    character.general.inventory.head = mutations.weapons.horns;
    character.general.inventory.back = mutations.other.wings;
    character.general.inventory.chin = mutations.weapons.acidSpit;
    character.general.inventory.bothHands = mutations.weapons.claws;

    return character
}

const ultimate_chimera = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Ultimate chimera';
    character.params.race = raceNames[Race.chimera];

    character.params.maxParams[UserParam.health] = 8;
    character.params.currentParams[UserParam.health] = 8;

    character.params.maxParams[UserParam.stamina] = 8;
    character.params.currentParams[UserParam.stamina] = 8;

    character.general.inventory.skin = mutations.armors.fur;
    character.general.inventory.tail = mutations.weapons.tailWithSting;
    character.general.inventory.head = mutations.weapons.horns;
    character.general.inventory.back = mutations.other.wings;
    character.general.inventory.chin = mutations.weapons.acidSpit;
    character.general.inventory.bothHands = mutations.weapons.claws;
    character.general.inventory.legs = mutations.other.hooves;
    character.general.inventory.shoulders = mutations.weapons.pincers;

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
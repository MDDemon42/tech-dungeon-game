import { Race, UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import academyMasteries from "../../gameScreens/Academy/masteries";
import mutations from "../../gameScreens/MutaLab/mutations";
import { raceNames } from "../races/races";
import items from "../../gameScreens/Market/items";

const satyr = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Satyr';
    character.params.race = raceNames[Race.satyr];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.Head = mutations.weapons.horns;
    character.general.inventory.Legs = mutations.other.hooves;

    return character
}

const satyrBeeenny = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Satyr Beeenny';
    character.params.race = raceNames[Race.satyr];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.general.inventory.Head = mutations.weapons.horns;
    character.general.inventory.Legs = mutations.other.hooves;

    character.general.inventory.Left_hand = items.weapons.axe;

    return character
}

const taur = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Minotaur';
    character.params.race = raceNames[Race.taur];

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 4;
    character.params.currentParams[UserParam.stamina] = 4;

    character.general.mind.masteries.push(academyMasteries.brutalForce);

    character.general.inventory.Head = mutations.weapons.horns;
    character.general.inventory.Legs = mutations.other.hooves;

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

    character.general.inventory.Chin = mutations.weapons.lowerFangs;

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

    character.general.inventory.Skin = mutations.armors.scales;
    character.general.inventory.Tail = mutations.weapons.tailWithSting;

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

    character.general.inventory.Skin = mutations.armors.fur;
    character.general.inventory.Tail = mutations.weapons.tailWithSting;
    character.general.inventory.Head = mutations.weapons.horns;
    character.general.inventory.Legs = mutations.other.hooves;
    character.general.inventory.Chin = mutations.weapons.lowerFangs;
    character.general.inventory.Both_hands = mutations.weapons.claws;

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

    character.general.inventory.Skin = mutations.armors.scales;
    character.general.inventory.Tail = mutations.weapons.tailWithSting;
    character.general.inventory.Head = mutations.weapons.horns;
    character.general.inventory.Back = mutations.other.skinWings;
    character.general.inventory.Chin = mutations.weapons.acidSpit;
    character.general.inventory.Both_hands = mutations.weapons.claws;

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

    character.general.inventory.Skin = mutations.armors.fur;
    character.general.inventory.Tail = mutations.weapons.tailWithSting;
    character.general.inventory.Head = mutations.weapons.horns;
    character.general.inventory.Back = mutations.other.skinWings;
    character.general.inventory.Chin = mutations.weapons.acidSpit;
    character.general.inventory.Both_hands = mutations.weapons.claws;
    character.general.inventory.Legs = mutations.other.hooves;
    character.general.inventory.Shoulders = mutations.weapons.pincers;

    return character
}

const mutants = {
    satyr,
    satyrBeeenny,
    taur,
    orc,
    naga,
    demon,
    dragon,
    ultimate_chimera
}

export default mutants
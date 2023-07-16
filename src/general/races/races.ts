import createRace from "./createRace";

const humanRace = createRace([]);
const satyrRace = createRace(['horns', 'hooves']);
const orkRace = createRace(['lowerFangs']);
const nagaRace = createRace(['scales', 'tailWithSting']);
const demonRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'lowerFangs', 'hooves']);
const dragonRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'acidSplit', 'wings']);
const chimeraRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'acidSplit', 'wings', 'pincers', 'hooves'])

const races = {
    humanRace,
    satyrRace,
    orkRace,
    nagaRace,
    demonRace,
    dragonRace,
    chimeraRace
}

export default races
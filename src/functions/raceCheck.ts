import mutations from "../general/mutations/mutations";
import { IInventory, IMutationsRaceCheck, Race } from "../types/interfaces";

function raceCheck(inventory: IInventory, isStrong: boolean) {
    const currentRace: IMutationsRaceCheck = {
        horns: inventory.head.name === mutations.mutation_horns.name,
        hooves: inventory.legs.name === mutations.mutation_hooves.name,
        lowerFangs: inventory.chin.name === mutations.mutation_lowerFangs.name,
        scales: inventory.skin.name === mutations.mutation_scales.name,
        tailWithSting: inventory.tail.name === mutations.mutation_tailWithSting.name,
        claws: inventory.bothHands.name === mutations.mutation_claws.name,
        acidSplit: inventory.chin.name === mutations.mutation_acidSplit.name,
        wings: inventory.back.name === mutations.mutation_wings.name,
        pincers: inventory.shoulders.name === mutations.mutation_twoExtraPincers.name
    }

    const humanRace: IMutationsRaceCheck = {
        horns: false,
        hooves: false,
        lowerFangs: false,
        scales: false,
        tailWithSting: false,
        claws: false,
        acidSplit: false,
        wings: false,
        pincers: false
    }

    const createRace = (mutations: (keyof IMutationsRaceCheck)[]) => {
        const race = {...humanRace};

        mutations.forEach(mutation => {
            race[mutation] = true;
        })

        return race
    }

    const checkRace = (race: IMutationsRaceCheck) => {
        return JSON.stringify(race) === JSON.stringify(currentRace);
    }

    const humanCheck = checkRace(humanRace);

    const satyrRace = createRace(['horns', 'hooves']);
    const satyrCheck = checkRace(satyrRace);

    const minotaurCheck = satyrCheck && isStrong;

    const orkRace = createRace(['lowerFangs']);
    const orkCheck = checkRace(orkRace) && isStrong;

    // const gnollCheck

    const nagaRace = createRace(['scales', 'tailWithSting']);
    const nagaCheck = checkRace(nagaRace);

    const demonRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'lowerFangs', 'hooves']);
    const demonCheck = checkRace(demonRace);

    const dragonRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'acidSplit', 'wings']);
    const dragonCheck = checkRace(dragonRace);

    const chimeraRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'acidSplit', 'wings', 'pincers', 'hooves'])
    const chimeraCheck = checkRace(chimeraRace);

    return (
        (chimeraCheck && Race.chimera) ||
        (dragonCheck && Race.dragon) ||
        (demonCheck && Race.demon) ||
        (nagaCheck && Race.naga) ||
        (orkCheck && Race.orc) ||
        (minotaurCheck && Race.minotaur) ||
        (satyrCheck && Race.satyr) ||
        (humanCheck && Race.human) ||
        Race.unknown
    )
}

export default raceCheck
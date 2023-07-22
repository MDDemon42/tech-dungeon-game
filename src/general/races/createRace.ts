import { IMutationsForRaceCheck } from "../../enums-and-interfaces/interfaces";

function createRace(mutations: (keyof IMutationsForRaceCheck)[]): IMutationsForRaceCheck {
    const race = {
        horns: false,
        hooves: false,
        lowerFangs: false,
        scales: false,
        tailWithSting: false,
        claws: false,
        acidSplit: false,
        wings: false,
        pincers: false
    };

    mutations.forEach(mutation => {
        race[mutation] = true;
    })

    return race
}

export default createRace
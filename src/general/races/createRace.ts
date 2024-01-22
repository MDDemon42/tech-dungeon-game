import { IMutationsForRaceCheck } from "../../enums-and-interfaces/interfaces";

function createRace(mutations: (keyof IMutationsForRaceCheck)[]): IMutationsForRaceCheck {
    const race = {
        horns: false,
        hooves: false,
        lowerFangs: false,
        scales: false,
        fur: false,
        tailWithSting: false,
        extraArms: false,
        claws: false,
        acidSpit: false,
        skinWings: false,
        pincers: false,
        raptorLegs: false,
        fireBreath: false,
        featherWings: false,
        tailWithBlunt: false
    };

    mutations.forEach(mutation => {
        race[mutation] = true;
    })

    return race
}

export default createRace
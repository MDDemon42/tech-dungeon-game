import { IMutationsForRaceCheck } from "../../enums-and-interfaces/interfaces";

function createRace(mutations: (keyof IMutationsForRaceCheck)[]): IMutationsForRaceCheck {
    const race: IMutationsForRaceCheck = {
        horns: false,
        hooves: false,
        lowerFangs: false,
        scales: false,
        fur: false,
        tailWithSting: false,
        extraArms: false,
        dragonEyes: false,
        claws: false,
        acidSpit: false,
        skinWings: false,
        pincers: false,
        raptorLegs: false,
        fireBreath: false,
        featherWings: false,
        tailWithBlunt: false,
        spikedShell: false,
        tailWithCutter: false
    };

    mutations.forEach(mutation => {
        race[mutation] = true;
    })

    return race
}

export default createRace
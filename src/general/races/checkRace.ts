import mutations from "../mutations/mutations";
import races from "./races";
import { IInventory, IMutationsForRaceCheck, Race } from "../../types/interfaces";

function checkRace(inventory: IInventory, isStrong: boolean) {
    const currentRace: IMutationsForRaceCheck = {
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

    const isRace = (race: IMutationsForRaceCheck) => {
        return JSON.stringify(race) === JSON.stringify(currentRace);
    }

    const raceChecks: Record<Race, boolean> = {
        [Race.unknown]: false,
        [Race.human]: isRace(races.humanRace),
        [Race.satyr]: isRace(races.satyrRace),
        [Race.minotaur]: isRace(races.satyrRace) && isStrong,
        [Race.orc]: isRace(races.orkRace) && isStrong,
        [Race.gnoll]: false,
        [Race.naga]: isRace(races.nagaRace),
        [Race.demon]: isRace(races.demonRace),
        [Race.dragon]: isRace(races.dragonRace),
        [Race.chimera]: isRace(races.chimeraRace)
    }
    
    let race = Race.unknown;

    Object.keys(raceChecks).forEach(key => {
        if (raceChecks[key as Race]) {
            race = key as Race
        }
    });

    return race
}

export default checkRace
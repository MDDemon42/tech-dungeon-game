import mutations from "../mutations";
import races from "./races";
import { IInventory, IMutationsForRaceCheck, Race } from "../../interfaces/interfaces";

function checkRace(inventory: IInventory, isStrong: boolean) {
    const currentRace: IMutationsForRaceCheck = {
        horns: inventory.head.name === mutations.weapons.mutation_horns.name,
        hooves: inventory.legs.name === mutations.other.mutation_hooves.name,
        lowerFangs: inventory.chin.name === mutations.weapons.mutation_lowerFangs.name,
        scales: inventory.skin.name === mutations.armors.mutation_scales.name,
        tailWithSting: inventory.tail.name === mutations.weapons.mutation_tail.name,
        claws: inventory.bothHands.name === mutations.weapons.mutation_claws.name,
        acidSplit: inventory.chin.name === mutations.weapons.mutation_acidSplit.name,
        wings: inventory.back.name === mutations.other.mutation_wings.name,
        pincers: inventory.shoulders.name === mutations.weapons.mutation_pincers.name
    }

    const isRace = (race: IMutationsForRaceCheck) => {
        return JSON.stringify(race) === JSON.stringify(currentRace);
    }

    const raceChecks: Record<Race, boolean> = {
        [Race.unknown]: false,
        [Race.human]: isRace(races.humanRace),
        [Race.satyr]: isRace(races.beastRace),
        [Race.minotaur]: isRace(races.beastRace) && isStrong,
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
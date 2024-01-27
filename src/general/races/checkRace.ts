import mutations from "../../gameScreens/MutaLab/mutations";
import races from "./races";
import { IInventory, IMutationsForRaceCheck } from "../../enums-and-interfaces/interfaces";
import { Race } from "../../enums-and-interfaces/enums";

function checkRace(inventory: IInventory, isStrong: boolean): Race {
    const currentRace: IMutationsForRaceCheck = {
        horns: inventory.Head.name === mutations.weapons.horns.name,
        hooves: inventory.Legs.name === mutations.other.hooves.name,
        lowerFangs: inventory.Chin.name === mutations.weapons.lowerFangs.name,
        scales: inventory.Skin.name === mutations.armors.scales.name,
        fur: inventory.Skin.name === mutations.armors.fur.name,
        extraArms: inventory.Shoulders.name === mutations.other.extraArms.name,
        tailWithSting: inventory.Tail.name === mutations.weapons.tailWithSting.name,
        claws: inventory.Both_hands.name === mutations.weapons.claws.name,
        acidSpit: inventory.Chin.name === mutations.weapons.acidSpit.name,
        skinWings: inventory.Back.name === mutations.other.skinWings.name,
        pincers: inventory.Shoulders.name === mutations.weapons.pincers.name,
        raptorLegs: inventory.Legs.name === mutations.weapons.raptorLegs.name,
        fireBreath: inventory.Chin.name === mutations.weapons.fireBreath.name,
        featherWings: inventory.Back.name === mutations.other.featherWings.name,
        tailWithBlunt: inventory.Tail.name === mutations.weapons.tailWithBlunt.name,
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
        [Race.gnoll]: isRace(races.gnollRace) && isStrong,
        [Race.naga]: isRace(races.nagaRace),
        [Race.raptor]: isRace(races.raptorRace),
        [Race.demon]: isRace(races.demonRace),
        [Race.dragon]: isRace(races.dragonRace),
        [Race.koatl]: isRace(races.koatlRace),
        [Race.ankylosaurus]: isRace(races.ankylosaurusRace),
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
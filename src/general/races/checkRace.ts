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
        tailWithSting: inventory.Tail.name === mutations.weapons.tailWithSting.name,
        extraArms: inventory.Shoulders.name === mutations.other.extraArms.name,
        dragonEyes: inventory.Eyes.name === mutations.other.dragonEyes.name,
        claws: inventory.Both_hands.name === mutations.weapons.claws.name,
        acidSpit: inventory.Chin.name === mutations.weapons.acidSpit.name,
        skinWings: inventory.Back.name === mutations.other.skinWings.name,
        pincers: inventory.Shoulders.name === mutations.weapons.pincers.name,
        raptorLegs: inventory.Legs.name === mutations.weapons.raptorLegs.name,
        fireBreath: inventory.Chin.name === mutations.weapons.fireBreath.name,
        featherWings: inventory.Back.name === mutations.other.featherWings.name,
        tailWithBlunt: inventory.Tail.name === mutations.weapons.tailWithBlunt.name,
        spikedShell: inventory.Back.name === mutations.armors.spikedShell.name,
        tailWithCutter: inventory.Tail.name === mutations.weapons.tailWithCutter.name,
    }

    const isRace = (race: IMutationsForRaceCheck) => {
        return JSON.stringify(race) === JSON.stringify(currentRace);
    }

    const raceChecks: Record<Race, boolean> = {
        [Race.unknown]: false,
        [Race.human]: isRace(races.humanRace),
        [Race.satyr]: isRace(races.satyrRace),
        [Race.taur]: isRace(races.taurRace) && isStrong,
        [Race.orc]: isRace(races.orkRace) && isStrong,
        [Race.gnoll]: isRace(races.gnollRace) && isStrong,
        [Race.naga]: isRace(races.nagaRace),
        [Race.raptor]: isRace(races.raptorRace),
        [Race.demon]: isRace(races.demonRace),
        [Race.dragon]: isRace(races.dragonRace) && isStrong,
        [Race.koatl]: isRace(races.koatlRace) && isStrong,
        [Race.ankylosaurus]: isRace(races.ankylosaurusRace) && isStrong,
        [Race.chimera]: isRace(races.chimeraRace) && isStrong
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
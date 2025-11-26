import { Race } from "../../enums-and-interfaces/enums";
import { ICharacter, IMutationsForRaceCheck } from "../../enums-and-interfaces/interfaces";
import mutations from "../../gameScreens/MutaLab/mutations";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import races from "./races";

function createSubjectOfRace(raceName: Race): ICharacter {
    const subject = createEmptyCharacter();
    const checkRaces: Record<Race, IMutationsForRaceCheck> = {
        [Race.unknown]: races.humanRace,
        [Race.human]: races.humanRace,
        [Race.satyr]: races.satyrRace,
        [Race.taur]: races.taurRace,
        [Race.orc]: races.orkRace,
        [Race.gnoll]: races.gnollRace,
        [Race.naga]: races.nagaRace,
        [Race.raptor]: races.raptorRace,
        [Race.demon]: races.demonRace,
        [Race.dragon]: races.dragonRace,
        [Race.koatl]: races.koatlRace,
        [Race.ankylosaurus]: races.ankylosaurusRace,
        [Race.chimera]: races.chimeraRace
    }

    const race = checkRaces[raceName];

    if (race.acidSpit) {
        subject.general.inventory.Chin = mutations.weapons.acidSpit;
    }
    if (race.claws) {
        subject.general.inventory.Both_hands = mutations.weapons.claws;
    }
    if (race.dragonEyes) {
        subject.general.inventory.Eyes = mutations.other.dragonEyes;
    }
    if (race.extraArms) {
        subject.general.inventory.Shoulders = mutations.other.extraArms;
    }
    if (race.featherWings) {
        subject.general.inventory.Back = mutations.other.featherWings;
    }
    if (race.fireBreath) {
        subject.general.inventory.Chin = mutations.weapons.fireBreath;
    }
    if (race.fur) {
        subject.general.inventory.Skin = mutations.armors.fur;
    }
    if (race.hooves) {
        subject.general.inventory.Legs = mutations.other.hooves;
    }
    if (race.horns) {
        subject.general.inventory.Head = mutations.weapons.horns;
    }
    if (race.lowerFangs) {
        subject.general.inventory.Chin = mutations.weapons.lowerFangs;
    }
    if (race.pincers) {
        subject.general.inventory.Shoulders = mutations.weapons.pincers;
    }
    if (race.raptorLegs) {
        subject.general.inventory.Legs = mutations.weapons.raptorLegs;
    }
    if (race.scales) {
        subject.general.inventory.Skin = mutations.armors.scales;
    }
    if (race.skinWings) {
        subject.general.inventory.Back = mutations.other.skinWings;
    }
    if (race.spikedShell) {
        subject.general.inventory.Back = mutations.armors.spikedShell;
    }
    if (race.tailWithBlunt) {
        subject.general.inventory.Tail = mutations.weapons.tailWithBlunt;
    }
    if (race.tailWithCutter) {
        subject.general.inventory.Tail = mutations.weapons.tailWithCutter;
    }
    if (race.tailWithSting) {
        subject.general.inventory.Tail = mutations.weapons.tailWithSting;
    }

    subject.params.race = raceName;
    if (
        raceName === Race.gnoll ||
        raceName === Race.taur ||
        raceName === Race.orc   
    ) {
        subject.params.strength = 3;
    }

    return subject
}

export default createSubjectOfRace
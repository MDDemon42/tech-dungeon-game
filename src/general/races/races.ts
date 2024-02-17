import { Race } from "../../enums-and-interfaces/enums";
import createRace from "./createRace";

/*
Races' special abilities
1) Satyr (Rod + 1)
2) Taur (Bull's charge)
3) Orc (Axe + 1)
4) Gnoll (Mace + 1)
5*) Ghoul (Lifesteal)
6*) Vampire (Hypnosis, Lifesteal)
7) Naga (Spear + 1)
8) Raptor (Raptor's jump)
9) Demon (use Powers without tattoes)
10) Dragon (use Spells without staffs)
11) Ultimate Chimera (?)
*/

const humanRace = createRace([]);
const satyrRace = createRace(['horns', 'hooves']);
const taurRace = createRace(['horns', 'hooves', 'fur']);
const orkRace = createRace(['lowerFangs']);
const gnollRace = createRace(['lowerFangs', 'fur']);
const nagaRace = createRace(['scales', 'extraArms', 'tailWithSting']);
const raptorRace = createRace(['scales', 'raptorLegs', 'tailWithSting']);
const demonRace = createRace(['horns', 'fur', 'claws', 'extraArms', 'tailWithCutter', 'lowerFangs', 'hooves']);
const dragonRace = createRace(['dragonEyes', 'horns', 'scales', 'claws', 'tailWithSting', 'fireBreath', 'raptorLegs', 'skinWings']);
const koatlRace = createRace(['dragonEyes', 'horns', 'scales', 'claws', 'tailWithCutter', 'acidSpit', 'raptorLegs', 'featherWings']);
const ankylosaurusRace = createRace(['dragonEyes', 'horns', 'scales', 'tailWithBlunt', 'lowerFangs', 'raptorLegs', 'spikedShell']);
const chimeraRace = createRace(['horns', 'fur', 'claws', 'tailWithSting', 'acidSpit', 'skinWings', 'pincers', 'hooves'])

const races = {
    humanRace,
    satyrRace,
    taurRace,
    orkRace,
    gnollRace,
    nagaRace,
    raptorRace,
    demonRace,
    dragonRace,
    koatlRace,
    ankylosaurusRace,
    chimeraRace
}

export const raceNames: Record<Race, string> = {
    [Race.ankylosaurus]: chrome.i18n.getMessage('race_ankylosaurus'),
    [Race.chimera]: chrome.i18n.getMessage('race_chimera'),
    [Race.demon]: chrome.i18n.getMessage('race_demon'),
    [Race.dragon]: chrome.i18n.getMessage('race_dragon'),
    [Race.gnoll]: chrome.i18n.getMessage('race_gnoll'),
    [Race.human]: chrome.i18n.getMessage('race_human'),
    [Race.koatl]: chrome.i18n.getMessage('race_koatl'),
    [Race.taur]: chrome.i18n.getMessage('race_taur'),
    [Race.naga]: chrome.i18n.getMessage('race_naga'),
    [Race.orc]: chrome.i18n.getMessage('race_orc'),
    [Race.raptor]: chrome.i18n.getMessage('race_raptor'),
    [Race.satyr]: chrome.i18n.getMessage('race_satyr'),
    [Race.unknown]: chrome.i18n.getMessage('race_unknown')
}

export default races
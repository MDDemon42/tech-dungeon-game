import { IMastery } from "../../enums-and-interfaces/interfaces";
import guildMasteries from "../masteries/guild";

const basicOptions = [
    guildMasteries.mastery_bombThrowing,
    guildMasteries.mastery_chakramAffiliation,
    guildMasteries.mastery_empoweredStrikes,
    guildMasteries.mastery_marksmanship
];

const runes = [
    guildMasteries.mastery_battleRunes
]

export const guildSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [...basicOptions],
    2: [...runes]
};
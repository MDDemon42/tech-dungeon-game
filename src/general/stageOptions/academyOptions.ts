import { IMastery } from "../../enums-and-interfaces/interfaces";
import masteries from "../masteries/masteries";

const basicOptions = [
    masteries.mastery_axeAffiliation,
    masteries.mastery_bowAffiliation,
    masteries.mastery_spearAffiliation,
    masteries.mastery_brutalForce,
    masteries.mastery_sellmanship
];

const steelOptions = [
    masteries.mastery_maceAffiliation,
    masteries.mastery_swordAffiliation,
];

export const academyOptions: Record<string, IMastery[]> = {
    0: [],
    1: [...basicOptions],
    2: [...basicOptions, ...steelOptions]
};
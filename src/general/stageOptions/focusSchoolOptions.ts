import { IMastery } from "../../enums-and-interfaces/interfaces";
import psionMasteries from "../masteries/psion";

export const focusSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [psionMasteries.mastery_meditativeInsights],
    3: [
        psionMasteries.mastery_meditativeInsights,
        psionMasteries.mastery_psiEnergy
    ]
}
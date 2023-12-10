import { IMastery } from "../../enums-and-interfaces/interfaces";
import wizardMasteries from "../masteries/wizard";

export const wizardSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [wizardMasteries.mastery_scholarship],
    2: [wizardMasteries.mastery_magisterDegree]
}
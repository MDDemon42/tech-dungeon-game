import { IMastery } from "../../enums-and-interfaces/interfaces";
import academyMasteries from "../../gameScreens/Academy/masteries";

export function createMastery(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    requiredMastery: string
): IMastery {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery
    }
};

const masteries = {
    academyMasteries
}

export default masteries
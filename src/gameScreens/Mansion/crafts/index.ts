import { ICraft } from "../../../enums-and-interfaces/interfaces";
import mageWeapons from "./mageWeapons";
import guns from "./guns";
import battleWeapons from "./battleWeapons";
import other from "./other";

export function createCraft(
    resourceCost: {
        name: string,
        amount: number
    }[],
    taskTitle: string,
    taskText: string
): ICraft {
    return {
        resourceCost,
        taskTitle,
        taskText
    }
}

const crafts = {
    battleWeapons,
    guns,
    mageWeapons,
    other
}

export default crafts
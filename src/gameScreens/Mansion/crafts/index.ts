import { ICraft } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";

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

const craftMusket = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_musket'),
    chrome.i18n.getMessage('craft_musket_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const crafts = {
    craftMusket
}

export default crafts
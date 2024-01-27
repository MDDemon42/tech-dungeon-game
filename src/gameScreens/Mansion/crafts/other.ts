import { createCraft } from ".";
import items from "../../Market/items";

const craftHolster = createCraft(
    [
        {
            name: items.bigResources.wood.name,
            amount: 0
        }
    ],
    chrome.i18n.getMessage('craft_holster'),
    chrome.i18n.getMessage('craft_holster_description', 
        ['0', items.bigResources.wood.name]
    ),
);

const other = {
    craftHolster
}

export default other
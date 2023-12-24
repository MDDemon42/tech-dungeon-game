import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import { IBigResource } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";

export function createBigResource(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    inventoryInfo: [
        cost: number,
        inventoryPlace: InventoryPlace,
        priority: number
    ]    
): IBigResource {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2]
    }
}

const crystal = createBigResource(
    [
        chrome.i18n.getMessage('crystal'),
        chrome.i18n.getMessage('crystal_item_description'),
        images.misc.crystal
    ],
    [
        2, InventoryPlace.belt, -1
    ]
);

const obsidian = createBigResource(
    [
        chrome.i18n.getMessage('obsidian'),
        chrome.i18n.getMessage('obsidian_item_description'),
        images.misc.obsidian
    ],
    [
        2, InventoryPlace.belt, -1
    ]
);

const ore = createBigResource(
    [
        chrome.i18n.getMessage('ore'),
        chrome.i18n.getMessage('ore_item_description'),
        images.misc.ore
    ],
    [
        2, InventoryPlace.belt, -1
    ]
);

const wood = createBigResource(
    [
        chrome.i18n.getMessage('wood'),
        chrome.i18n.getMessage('wood_item_description'),
        images.misc.wood
    ],
    [
        2, InventoryPlace.belt, -1
    ]
);

const beastRemains = createBigResource(
    [
        chrome.i18n.getMessage('beast_remains'),
        chrome.i18n.getMessage('beast_remains_item_description'),
        images.misc.beastRemains
    ],
    [
        1, InventoryPlace.belt, -1
    ]
);

const dragonRemains = createBigResource(
    [
        chrome.i18n.getMessage('dragon_remains'),
        chrome.i18n.getMessage('dragon_remains_item_description'),
        images.misc.dragonRemains
    ],
    [
        2, InventoryPlace.belt, -1
    ]
);

const insectoidRemains = createBigResource(
    [
        chrome.i18n.getMessage('insectoid_remains'),
        chrome.i18n.getMessage('insectoid_remains_item_description'),
        images.misc.insectoidRemains
    ],
    [
        1, InventoryPlace.belt, -1
    ]
);

const reptiloidRemains = createBigResource(
    [
        chrome.i18n.getMessage('reptiloid_remains'),
        chrome.i18n.getMessage('reptiloid_remains_item_description'),
        images.misc.reptiloidRemains
    ],
    [
        1, InventoryPlace.belt, -1
    ]
);

const bigResources = {
    crystal,
    obsidian,
    ore,
    wood,
    beastRemains,
    dragonRemains,
    insectoidRemains,
    reptiloidRemains
}

export default bigResources
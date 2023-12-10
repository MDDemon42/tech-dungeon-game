import { InventoryPlace } from "../../enums-and-interfaces/enums";
import { IBigResource } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";

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

const ore = createBigResource(
    [
        chrome.i18n.getMessage('ore'),
        chrome.i18n.getMessage('ore_item_description'),
        images.misc.ore
    ],
    [
        1, InventoryPlace.belt, -1
    ]
)

const wood = createBigResource(
    [
        chrome.i18n.getMessage('wood'),
        chrome.i18n.getMessage('wood_item_description'),
        images.misc.wood
    ],
    [
        1, InventoryPlace.belt, -1
    ]
)

const beastRemains = createBigResource(
    [
        chrome.i18n.getMessage('beast_remains'),
        chrome.i18n.getMessage('beast_remains_item_description'),
        images.misc.beastRemains
    ],
    [
        1, InventoryPlace.belt, -1
    ]
)

const insectoidRemains = createBigResource(
    [
        chrome.i18n.getMessage('insectoid_remains'),
        chrome.i18n.getMessage('insectoid_remains_item_description'),
        images.misc.insectoidRemains
    ],
    [
        1, InventoryPlace.belt, -1
    ]
)

const reptiloidRemains = createBigResource(
    [
        chrome.i18n.getMessage('reptiloid_remains'),
        chrome.i18n.getMessage('reptiloid_remains_item_description'),
        images.misc.reptiloidRemains
    ],
    [
        1, InventoryPlace.belt, -1
    ]
)

const bigResources = {
    ore,
    wood,
    beastRemains,
    insectoidRemains,
    reptiloidRemains
}

export default bigResources
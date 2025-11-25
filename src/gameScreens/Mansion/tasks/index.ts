import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";
import { createTask } from "../../../redux/slices/gameStage";

const settleInCabin = createTask(
    [],
    chrome.i18n.getMessage('settle_in_cabin_task_title'),
    chrome.i18n.getMessage('settle_in_cabin_task_text'),
);

const buildArmoury = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('build_armoury_task_title'),
    chrome.i18n.getMessage('build_armoury_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const musketOptions = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 0
        }
    ],
    chrome.i18n.getMessage('musket_options_task_title'),
    chrome.i18n.getMessage('musket_options_task_text', 
        ['0', items.bigResources.ore.name]
    ),
);

const rifleOptions = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('rifle_options_task_title'),
    chrome.i18n.getMessage('rifle_options_task_text', 
        ['2', items.bigResources.ore.name]
    ),
);

const battleOptions = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 0
        }
    ],
    chrome.i18n.getMessage('battle_options_task_title'),
    chrome.i18n.getMessage('battle_options_task_text', 
        ['0', items.bigResources.ore.name]
    ),
);

const mageOptions = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 0
        }
    ],
    chrome.i18n.getMessage('mage_options_task_title'),
    chrome.i18n.getMessage('mage_options_task_text', 
        ['0', items.bigResources.ore.name]
    ),
);

const buildCottege = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('build_cottege_task_title'),
    chrome.i18n.getMessage('build_cottege_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const buildMansion = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 3
        }
    ], 
    chrome.i18n.getMessage('build_mansion_task_title'),
    chrome.i18n.getMessage('build_mansion_task_text', 
        ['3', items.bigResources.wood.name]
    ),
);

const mansionTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: settleInCabin
    },
    2: {
        status: TaskStatus.unknown,
        task: buildCottege
    },
    3: {
        status: TaskStatus.unknown,
        task: buildMansion
    },
    5: {
        status: TaskStatus.unknown,
        task: buildArmoury
    },
    7: {
        status: TaskStatus.unknown,
        task: musketOptions
    },
    11: {
        status: TaskStatus.unknown,
        task: battleOptions
    },
    13: {
        status: TaskStatus.unknown,
        task: mageOptions
    },
    17: {
        status: TaskStatus.unknown,
        task: rifleOptions
    }
}

export default mansionTasks
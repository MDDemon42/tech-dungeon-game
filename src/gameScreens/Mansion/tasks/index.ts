import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";
import { createTask } from "../../../redux/slices/gameStage";

const task_buildCabin = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('build_cabin_task_title'),
    chrome.i18n.getMessage('build_cabin_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_buildArmoury = createTask(
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

const task_buildCottege = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ], 
    chrome.i18n.getMessage('build_cottege_task_title'),
    chrome.i18n.getMessage('build_cottege_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const task_buildMansion = createTask(
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
        task: task_buildCabin
    },
    2: {
        status: TaskStatus.unknown,
        task: task_buildCottege
    },
    3: {
        status: TaskStatus.unknown,
        task: task_buildMansion
    },
    5: {
        status: TaskStatus.unknown,
        task: task_buildArmoury
    }
}

export default mansionTasks
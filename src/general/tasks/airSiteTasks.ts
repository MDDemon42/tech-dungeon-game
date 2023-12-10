import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_buildAirSite = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('build_air_site_task_title'),
    chrome.i18n.getMessage('build_air_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
)

const task_thunderPunch = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('thunder_punch_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('thunder_punch_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_airDeprivation = createTask(
    items.bigResources.wood.name,
    2, 
    chrome.i18n.getMessage('air_deprivation_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('air_deprivation_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const airSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildAirSite
    },
    2: {
        status: TaskStatus.unknown,
        task: task_thunderPunch
    },
    3: {
        status: TaskStatus.unknown,
        task: task_airDeprivation
    }
}

export default airSiteTasks
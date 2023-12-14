import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";
import { createTask } from "../../../redux/slices/gameStage";

const task_buildIceSite = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('build_ice_site_task_title'),
    chrome.i18n.getMessage('build_ice_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_iceSpear = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('ice_spear_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('ice_spear_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_iceHail = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('ice_hail_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('ice_hail_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_coldDeath = createTask(
    items.bigResources.wood.name,
    2, 
    chrome.i18n.getMessage('cold_death_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('cold_death_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const iceSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildIceSite
    },
    2: {
        status: TaskStatus.unknown,
        task: task_iceSpear
    },
    3: {
        status: TaskStatus.unknown,
        task: task_iceHail
    },
    5: {
        status: TaskStatus.unknown,
        task: task_coldDeath
    }
}

export default iceSiteTasks
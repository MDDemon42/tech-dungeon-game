import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_buildFocusSchool = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('build_focus_site_task_title'),
    chrome.i18n.getMessage('build_focus_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_deepestInsights = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('deepest_insights_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('deepest_insights_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_psiEnergy = createTask(
    items.bigResources.wood.name,
    1, 
    chrome.i18n.getMessage('psi_energy_task_title',
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('psi_energy_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const focusSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildFocusSchool
    },
    2: {
        status: TaskStatus.unknown,
        task: task_deepestInsights
    },
    3: {
        status: TaskStatus.unknown,
        task: task_psiEnergy
    }
}

export default focusSiteTasks
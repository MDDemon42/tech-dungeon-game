import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";

const buildFocusSite = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('build_focus_site_task_title'),
    chrome.i18n.getMessage('build_focus_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const deepestInsights = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('deepest_insights_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('deepest_insights_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const psiEnergy = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('psi_energy_task_title',
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('psi_energy_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const empoweredStrikes = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('empowered_strikes_task_title',
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('empowered_strikes_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const psiInfusedStrikes = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('psi_infused_strikes_task_title',
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('psi_infused_strikes_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const focusSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: buildFocusSite
    },
    2: {
        status: TaskStatus.unknown,
        task: deepestInsights
    },
    3: {
        status: TaskStatus.unknown,
        task: psiEnergy
    },
    5: {
        status: TaskStatus.unknown,
        task: empoweredStrikes
    },
    7: {
        status: TaskStatus.unknown,
        task: psiInfusedStrikes
    }
}

export default focusSiteTasks
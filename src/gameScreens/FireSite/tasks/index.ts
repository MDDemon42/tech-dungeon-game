import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";

const task_buildFireSite = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('build_fire_site_task_title'),
    chrome.i18n.getMessage('build_fire_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_fireBall = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('fire_ball_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('fire_ball_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const task_fireWave = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('fire_wave_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('fire_wave_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const fireSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildFireSite
    },
    2: {
        status: TaskStatus.unknown,
        task: task_fireBall
    },
    3: {
        status: TaskStatus.unknown,
        task: task_fireWave
    }
}

export default fireSiteTasks
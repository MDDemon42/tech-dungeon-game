import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";
import { createTask } from "../../../redux/slices/gameStage";

const buildAirSite = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('build_air_site_task_title'),
    chrome.i18n.getMessage('build_air_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
)

const thunderPunch = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('thunder_punch_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('thunder_punch_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const airDeprivation = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('air_deprivation_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('air_deprivation_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const electrifiedStrikes = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('electrified_strikes_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('electrified_strikes_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const airRituals = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('air_rituals_task_title', 
        [items.bigResources.ore.name]
    ),
    chrome.i18n.getMessage('air_rituals_task_text', 
        ['1', items.bigResources.ore.name]
    ),
);

const airSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: buildAirSite
    },
    2: {
        status: TaskStatus.unknown,
        task: thunderPunch
    },
    3: {
        status: TaskStatus.unknown,
        task: airDeprivation
    },
    5: {
        status: TaskStatus.unknown,
        task: electrifiedStrikes
    },
    7: {
        status: TaskStatus.unknown,
        task: airRituals
    }
}

export default airSiteTasks
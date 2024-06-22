import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";
import { createTask } from "../../../redux/slices/gameStage";

const buildIceSite = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('build_ice_site_task_title'),
    chrome.i18n.getMessage('build_ice_site_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const iceShard = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('ice_shard_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('ice_shard_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const iceSpear = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('ice_spear_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('ice_spear_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const iceHail = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('ice_hail_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('ice_hail_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const coldDeath = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ], 
    chrome.i18n.getMessage('cold_death_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('cold_death_task_text', 
        ['2', items.bigResources.wood.name]
    ),
);

const freezingStrikes = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('freezing_strikes_task_title', 
        [items.bigResources.wood.name]
    ),
    chrome.i18n.getMessage('freezing_strikes_task_text', 
        ['1', items.bigResources.wood.name]
    ),
);

const iceRituals = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('ice_rituals_task_title', 
        [items.bigResources.ore.name]
    ),
    chrome.i18n.getMessage('ice_rituals_task_text', 
        ['1', items.bigResources.ore.name]
    ),
);

const iceSiteTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: buildIceSite
    },
    2: {
        status: TaskStatus.unknown,
        task: iceShard
    },
    3: {
        status: TaskStatus.unknown,
        task: iceSpear
    },
    5: {
        status: TaskStatus.unknown,
        task: iceHail
    },
    7: {
        status: TaskStatus.unknown,
        task: coldDeath
    },
    11: {
        status: TaskStatus.unknown,
        task: freezingStrikes
    },
    13: {
        status: TaskStatus.unknown,
        task: iceRituals
    }
}

export default iceSiteTasks
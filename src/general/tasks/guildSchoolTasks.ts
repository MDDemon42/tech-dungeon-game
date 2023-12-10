import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import items from "../items";

const task_buildGuild = createTask(
    items.bigResources.wood.name,
    4,
    chrome.i18n.getMessage('build_guild_task_title'),
    chrome.i18n.getMessage('build_guild_task_text', 
        ['4', items.bigResources.wood.name,]
    ),
)

const task_runes_and_rituals = createTask(
    items.bigResources.ore.name,
    4,
    chrome.i18n.getMessage('runes_and_rituals_task_title'),
    chrome.i18n.getMessage('runes_and_rituals_task_text', 
        ['4', items.bigResources.ore.name]
    ),
)

const guildSchoolTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildGuild
    },
    2: {
        status: TaskStatus.unknown,
        task: task_runes_and_rituals
    }
}

export default guildSchoolTasks
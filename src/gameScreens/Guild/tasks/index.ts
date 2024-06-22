import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import items from "../../Market/items";

const buildGuild = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 4
        }
    ],
    chrome.i18n.getMessage('build_guild_task_title'),
    chrome.i18n.getMessage('build_guild_task_text', 
        ['4', items.bigResources.wood.name,]
    ),
);

const runes_and_rituals = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 4
        }
    ],
    chrome.i18n.getMessage('runes_and_rituals_task_title'),
    chrome.i18n.getMessage('runes_and_rituals_task_text', 
        ['4', items.bigResources.ore.name]
    ),
);

const guildTasks = {
    1: {
        status: TaskStatus.unknown,
        task: buildGuild
    },
    2: {
        status: TaskStatus.unknown,
        task: runes_and_rituals
    }
}

export default guildTasks
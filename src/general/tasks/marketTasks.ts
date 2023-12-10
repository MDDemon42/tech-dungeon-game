import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_steelOptions = createTask(
    items.bigResources.ore.name,
    3, 
    chrome.i18n.getMessage('modernize_market_task_title'),
    chrome.i18n.getMessage('modernize_market_task_text', 
        ['3', items.bigResources.ore.name]
    )
);

const marketTasks: IScreenTasks = {
    2: {
        status: TaskStatus.unknown,
        task: task_steelOptions
    }
}

export default marketTasks
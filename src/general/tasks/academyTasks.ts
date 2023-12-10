import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_buildAcademy = createTask(
    items.bigResources.wood.name,
    4,
    chrome.i18n.getMessage('build_academy_task_title'),
    chrome.i18n.getMessage('build_academy_task_text', 
        ['4', items.bigResources.wood.name]
    )
);

const task_modernizeAcademy = createTask(
    items.bigResources.wood.name,
    2,
    chrome.i18n.getMessage('modernize_academy_task_title'),
    chrome.i18n.getMessage('modernize_academy_task_text', 
        ['2', items.bigResources.wood.name]
    )
);

const academyTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildAcademy
    },
    2: {
        status: TaskStatus.unknown,
        task: task_modernizeAcademy
    }
}

export default academyTasks
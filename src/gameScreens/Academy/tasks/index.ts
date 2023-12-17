import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";

const task_buildAcademy = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 3
        },
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('build_academy_task_title'),
    chrome.i18n.getMessage('build_academy_task_text', 
        ['3', items.bigResources.wood.name, '1', items.bigResources.ore.name]
    )
);

const task_modernizeAcademy = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ],
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
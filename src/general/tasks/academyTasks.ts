import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_buildAcademy = createTask(
    items.bigResources.wood.name,
    4,
    'Build academy!',
    'Skilled villagers ask for your help to build Academy.\nThey need 4 Wood for it.',
)

const task_modernizeAcademy = createTask(
    items.bigResources.wood.name,
    2,
    'Modernize academy!',
    'More skilled villagers want to teach in Academy.\nThey need 2 Wood for modernization.',
)

const academyTasks: IScreenTasks = {
    1: {
        status: TaskStatus.notKnown,
        task: task_buildAcademy
    },
    2: {
        status: TaskStatus.notKnown,
        task: task_modernizeAcademy
    }
}

export default academyTasks
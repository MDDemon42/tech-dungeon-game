import { createTask } from ".";
import items from "../items";

const task_buildAcademy = createTask(
    items.bigResources.wood.name,
    4,
    'Build academy!',
    'Skilled villagers ask for your help to build Academy.\nThey need 4 Wood for it.',
    'Sure!', 'Not now'
)

const task_modernizeAcademy = createTask(
    items.bigResources.wood.name,
    2,
    'Modernize academy!',
    'More skilled villagers want to teach in Academy.\nThey need 2 Wood for modernization.',
    'Of course!', 'Not sure'
)

const academyTasks = {
    1: task_buildAcademy,
    2: task_modernizeAcademy
}

export default academyTasks
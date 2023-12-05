import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_buildCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
)

const task_modernizeCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
)

const task_upgradeCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
)

const task_ultimateCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
)

const cyberLabTasks: IScreenTasks = {
    1: {
        status: TaskStatus.notKnown,
        task: task_buildCyberLab
    },
    2: {
        status: TaskStatus.notKnown,
        task: task_modernizeCyberLab
    },
    3: {
        status: TaskStatus.notKnown,
        task: task_upgradeCyberLab
    },
    4: {
        status: TaskStatus.notKnown,
        task: task_ultimateCyberLab
    }
}

export default cyberLabTasks
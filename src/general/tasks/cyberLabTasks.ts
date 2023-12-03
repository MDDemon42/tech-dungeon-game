import { createTask } from ".";
import items from "../items";

const task_buildCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
    'Sure!', 'Not now'
)

const task_modernizeCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
    'Of course!', 'Not sure'
)

const task_upgradeCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
    'Of course!', 'Not sure'
)

const task_ultimateCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    '',
    '',
    'Of course!', 'Not sure'
)

const cyberLabTasks = {
    1: task_buildCyberLab,
    2: task_modernizeCyberLab,
    3: task_upgradeCyberLab,
    4: task_ultimateCyberLab
}

export default cyberLabTasks
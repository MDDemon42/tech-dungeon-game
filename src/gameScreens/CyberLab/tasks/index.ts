import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../../enums-and-interfaces/interfaces";
import items from "../../Market/items";

const task_buildCyberLab = createTask(
    items.bigResources.ore.name,
    4,
    chrome.i18n.getMessage('build_cyber_lab_task_title'),
    chrome.i18n.getMessage('build_cyber_lab_task_text', 
        ['4', items.bigResources.ore.name]
    ),
)

const task_highEnergyCybers = createTask(
    items.bigResources.ore.name,
    4,
    chrome.i18n.getMessage('high_energy_cybers_task_title'),
    chrome.i18n.getMessage('high_energy_cybers_task_text', 
        ['4', items.bigResources.ore.name]
    ),
)

const task_nanoCybers = createTask(
    items.bigResources.ore.name,
    4,
    chrome.i18n.getMessage('nano_cybers_task_title'),
    chrome.i18n.getMessage('nano_cybers_task_text', 
        ['4', items.bigResources.ore.name]
    ),
)

const cyberLabTasks: IScreenTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildCyberLab
    },
    2: {
        status: TaskStatus.unknown,
        task: task_highEnergyCybers
    },
    3: {
        status: TaskStatus.unknown,
        task: task_nanoCybers
    },
}

export default cyberLabTasks
import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import items from "../../Market/items";

const buildMutationLab = createTask(
    [
        {
            name: items.bigResources.ore.name,
            amount: 4
        }
    ], 
    chrome.i18n.getMessage('build_muta_lab_task_title'),
    chrome.i18n.getMessage('build_muta_lab_task_text', 
        ['4', items.bigResources.ore.name]
    ),
)

const beastGenes = createTask(
    [
        {
            name: items.bigResources.beastRemains.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('beast_genes_task_title'),
    chrome.i18n.getMessage('beast_genes_task_text', 
        ['1', items.bigResources.beastRemains.name]
    ),
)

const reptiloidGenes = createTask(
    [
        {
            name: items.bigResources.reptiloidRemains.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('reptiloid_genes_task_title'),
    chrome.i18n.getMessage('reptiloid_genes_task_text', 
        ['1', items.bigResources.reptiloidRemains.name]
    ),
)

const insectoidGenes = createTask(
    [
        {
            name: items.bigResources.insectoidRemains.name,
            amount: 1
        }
    ], 
    chrome.i18n.getMessage('insectoid_genes_task_title'),
    chrome.i18n.getMessage('insectoid_genes_task_text', 
        ['1', items.bigResources.insectoidRemains.name]
    ),
)

const mutaLabTasks = {
    1: {
        status: TaskStatus.unknown,
        task: buildMutationLab
    },
    2: {
        status: TaskStatus.unknown,
        task: beastGenes
    },
    3: {
        status: TaskStatus.unknown,
        task: reptiloidGenes
    },
    5: {
        status: TaskStatus.unknown,
        task: insectoidGenes
    }
}

export default mutaLabTasks
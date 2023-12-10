import { createTask } from "."
import { TaskStatus } from "../../enums-and-interfaces/enums"
import items from "../items"

const task_buildMutationLab = createTask(
    items.bigResources.ore.name,
    4, 
    chrome.i18n.getMessage('build_muta_lab_task_title'),
    chrome.i18n.getMessage('build_muta_lab_task_text', 
        ['4', items.bigResources.ore.name]
    ),
)

const task_beastGenes = createTask(
    items.bigResources.beastRemains.name,
    1, 
    chrome.i18n.getMessage('beast_genes_task_title'),
    chrome.i18n.getMessage('beast_genes_task_text', 
        ['1', items.bigResources.beastRemains.name]
    ),
)

const task_reptiloiGenes = createTask(
    items.bigResources.reptiloidRemains.name,
    1, 
    chrome.i18n.getMessage('reptiloid_genes_task_title'),
    chrome.i18n.getMessage('reptiloid_genes_task_text', 
        ['1', items.bigResources.reptiloidRemains.name]
    ),
)

const task_insectoidGenes = createTask(
    items.bigResources.insectoidRemains.name,
    1, 
    chrome.i18n.getMessage('insectoid_genes_task_title'),
    chrome.i18n.getMessage('insectoid_genes_task_text', 
        ['1', items.bigResources.insectoidRemains.name]
    ),
)

const mutaLabTasks = {
    1: {
        status: TaskStatus.unknown,
        task: task_buildMutationLab
    },
    2: {
        status: TaskStatus.unknown,
        task: task_beastGenes
    },
    3: {
        status: TaskStatus.unknown,
        task: task_reptiloiGenes
    },
    5: {
        status: TaskStatus.unknown,
        task: task_insectoidGenes
    }
}

export default mutaLabTasks
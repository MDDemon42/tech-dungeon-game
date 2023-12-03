import { createTask } from "."
import items from "../items"

const task_buildMutationLab = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_beastOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_reptileOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_insectoidOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_beastAndReptileOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_beastAndInsectoidOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_reptileAndInsectoidOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const task_AllOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
    'Yep!', 'Later'
)

const mutationLabTasks = {
    1: task_buildMutationLab,
    2: task_beastOptions,
    3: task_reptileOptions,
    5: task_insectoidOptions,
    6: task_beastAndReptileOptions,
    10: task_beastAndInsectoidOptions,
    15: task_reptileAndInsectoidOptions,
    30: task_AllOptions
}

export default mutationLabTasks
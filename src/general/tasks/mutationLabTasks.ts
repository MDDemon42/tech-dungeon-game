import { createTask } from "."
import { TaskStatus } from "../../enums-and-interfaces/enums"
import items from "../items"

const task_buildMutationLab = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_beastOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_reptileOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_insectoidOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_beastAndReptileOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_beastAndInsectoidOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_reptileAndInsectoidOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const task_AllOptions = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
)

const mutationLabTasks = {
    1: {
        status: TaskStatus.notKnown,
        task: task_buildMutationLab
    },
    2: {
        status: TaskStatus.notKnown,
        task: task_beastOptions
    },
    3: {
        status: TaskStatus.notKnown,
        task: task_reptileOptions
    },
    5: {
        status: TaskStatus.notKnown,
        task: task_insectoidOptions
    },
    6: {
        status: TaskStatus.notKnown,
        task: task_beastAndReptileOptions
    },
    10: {
        status: TaskStatus.notKnown,
        task: task_beastAndInsectoidOptions
    },
    15: {
        status: TaskStatus.notKnown,
        task: task_reptileAndInsectoidOptions
    },
    30: {
        status: TaskStatus.notKnown,
        task: task_AllOptions
    }
}

export default mutationLabTasks
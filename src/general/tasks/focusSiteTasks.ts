import { createTask } from "."
import { TaskStatus } from "../../enums-and-interfaces/enums"
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_advancedInsights = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_advancedInsights_and_energy = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const focusSiteTasks: IScreenTasks = {
    2: {
        status: TaskStatus.notKnown,
        task: task_advancedInsights
    },
    6: {
        status: TaskStatus.notKnown,
        task: task_advancedInsights_and_energy
    }
}

export default focusSiteTasks
import { createTask } from "."
import { TaskStatus } from "../../enums-and-interfaces/enums"
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_fireBall = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_fireWave = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const fireSiteTasks: IScreenTasks = {
    2: {
        status: TaskStatus.notKnown,
        task: task_fireBall
    },
    3: {
        status: TaskStatus.notKnown,
        task: task_fireWave
    }
}

export default fireSiteTasks
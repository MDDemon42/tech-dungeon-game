import { createTask } from "."
import { TaskStatus } from "../../enums-and-interfaces/enums"
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_thunderPunch = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_airDeprivation = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const airSiteTasks: IScreenTasks = {
    2: {
        status: TaskStatus.notKnown,
        task: task_thunderPunch
    },
    3: {
        status: TaskStatus.notKnown,
        task: task_airDeprivation
    }
}

export default airSiteTasks
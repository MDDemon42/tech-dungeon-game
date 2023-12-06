import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
import { IScreenTasks } from "../../enums-and-interfaces/interfaces";
import items from "../items";

const task_shard_and_spear = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_shard_and_hail = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_shard_and_spear_and_hail = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_shard_and_death = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_shard_and_spear_and_death = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_shard_and_hail_and_death = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const task_shard_and_spear_and_hail_and_death = createTask(
    items.bigResources.wood.name,
    1, 
    '',
    '',
);

const iceSiteTasks: IScreenTasks = {
    2: {
        status: TaskStatus.notKnown,
        task: task_shard_and_spear
    },
    3: {
        status: TaskStatus.notKnown,
        task: task_shard_and_hail
    },
    5: {
        status: TaskStatus.notKnown,
        task: task_shard_and_death
    },
    6: {
        status: TaskStatus.notKnown,
        task: task_shard_and_spear_and_hail
    },
    10: {
        status: TaskStatus.notKnown,
        task: task_shard_and_spear_and_death
    },
    15: {
        status: TaskStatus.notKnown,
        task: task_shard_and_hail_and_death
    },
    30: {
        status: TaskStatus.notKnown,
        task: task_shard_and_spear_and_hail_and_death
    }
}

export default iceSiteTasks
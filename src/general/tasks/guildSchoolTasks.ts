import { createTask } from ".";
import items from "../items";

const task_buildGuildSchool = createTask(
    items.bigResources.wood.name,
    4,
    '',
    '',
    'Sure!', 'Not now'
)

const task_modernizeGuildSchool = createTask(
    items.bigResources.wood.name,
    2,
    '',
    '',
    'Of course!', 'Not sure'
)

const guildSchoolTasks = {
    1: task_buildGuildSchool,
    2: task_modernizeGuildSchool
}

export default guildSchoolTasks
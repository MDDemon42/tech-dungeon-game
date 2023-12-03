import { createTask } from ".";
import items from "../items";

const task_buildWizardSchool = createTask(
    items.bigResources.wood.name,
    4,
    '',
    '',
    'Sure!', 'Not now'
)

const task_modernizeWizardSchool = createTask(
    items.bigResources.wood.name,
    2,
    '',
    '',
    'Of course!', 'Not sure'
)

const wizardSchoolTasks = {
    1: task_buildWizardSchool,
    2: task_modernizeWizardSchool
}

export default wizardSchoolTasks
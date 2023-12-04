import { createTask } from ".";
import { TaskStatus } from "../../enums-and-interfaces/enums";
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
    1: {
        status: TaskStatus.notKnown,
        task: task_buildWizardSchool
    },
    2: {
        status: TaskStatus.notKnown,
        task: task_modernizeWizardSchool
    }
}

export default wizardSchoolTasks
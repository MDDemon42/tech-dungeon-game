import { createTask } from "."
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_buildFocusSchool = createTask(
    items.bigResources.wood.name,
    1, 
    'Can you help me build a house?',
    'Some tattoed guy asks for 1 Wood',
    'Yep!', 'Later'
)

const task_modernizeFocusSchool = createTask(
    items.bigResources.wood.name,
    1, 
    'Can you help me modernize my house?',
    'That tattoed guy asks for 1 Wood',
    'Sure!', 'Later'
)

const focusSchoolTasks: IScreenTasks = {
    1: task_buildFocusSchool,
    3: task_modernizeFocusSchool
}

export default focusSchoolTasks
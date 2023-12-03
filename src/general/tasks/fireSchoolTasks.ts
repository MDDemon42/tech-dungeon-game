import { createTask } from "."
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_buildFireSchool = createTask(
    items.bigResources.wood.name,
    1, 
    'Can you help me build a house?',
    'Some bending fire guy asks for 1 Wood',
    'Yep!', 'Later'
)

const fireSchoolTasks: IScreenTasks = {
    1: task_buildFireSchool
}

export default fireSchoolTasks
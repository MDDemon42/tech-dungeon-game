import { createTask } from "."
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_buildIceSchool = createTask(
    items.bigResources.wood.name,
    1, 
    'Can you help me build a house?',
    'Some bending ice guy asks for 1 Wood',
    'Yep!', 'Later'
)

const iceSchoolTasks: IScreenTasks = {
    1: task_buildIceSchool
}

export default iceSchoolTasks
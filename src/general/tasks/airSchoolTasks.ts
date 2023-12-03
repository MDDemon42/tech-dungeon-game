import { createTask } from "."
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_buildAirSchool = createTask(
    items.bigResources.wood.name,
    1, 
    'Can you help me build a house?',
    'Some bending air guy asks for 1 Wood',
    'Yep!', 'Later'
)

const airSchoolTasks: IScreenTasks = {
    1: task_buildAirSchool
}

export default airSchoolTasks
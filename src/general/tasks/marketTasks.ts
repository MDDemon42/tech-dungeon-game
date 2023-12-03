import { createTask } from "."
import { IScreenTasks } from "../../enums-and-interfaces/interfaces"
import items from "../items"

const task_steelOptions = createTask(
    items.bigResources.ore.name,
    3, 
    'Can you get me some Ore?',
    'New blacksmith asks for 3 Ore to make a brand new line of Steel Weapons',
    'Here!', 'Later'
)

const marketTasks: IScreenTasks = {
    2: task_steelOptions
}

export default marketTasks
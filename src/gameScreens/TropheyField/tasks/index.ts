import { TaskStatus } from "../../../enums-and-interfaces/enums";
import { createTask } from "../../../redux/slices/gameStage";

const burnTheBodies = createTask(
    [], 
    chrome.i18n.getMessage('burn_the_bodies_task_title'),
    chrome.i18n.getMessage('burn_the_bodies_task_text'),
);

const buryTheBodies = createTask(
    [], 
    chrome.i18n.getMessage('bury_the_bodies_task_title'),
    chrome.i18n.getMessage('bury_the_bodies_task_text'),
);

const tropheyFieldTasks = {
    2: {
        status: TaskStatus.unknown,
        task: burnTheBodies
    },
    4: {
        status: TaskStatus.unknown,
        task: buryTheBodies
    }
}

export default tropheyFieldTasks
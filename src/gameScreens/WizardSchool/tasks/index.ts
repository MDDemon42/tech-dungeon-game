import { createTask } from "../../../redux/slices/gameStage";
import { TaskStatus } from "../../../enums-and-interfaces/enums";
import items from "../../Market/items";

const buildWizardSchool = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 4
        }
    ],
    chrome.i18n.getMessage('build_wizard_school_task_title'),
    chrome.i18n.getMessage('build_wizard_school_task_text', 
        ['4', items.bigResources.wood.name]
    ),
)

const constructLibrarium = createTask(
    [
        {
            name: items.bigResources.wood.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('construct_librarium_task_title'),
    chrome.i18n.getMessage('construct_librarium_task_text', 
        ['2', items.bigResources.wood.name]
    ),
)

const wizardSchoolTasks = {
    1: {
        status: TaskStatus.unknown,
        task: buildWizardSchool
    },
    2: {
        status: TaskStatus.unknown,
        task: constructLibrarium
    }
}

export default wizardSchoolTasks
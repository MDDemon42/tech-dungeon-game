import { GameScreens } from "../../enums-and-interfaces/enums";
import { IGameTasks, ITask } from "../../enums-and-interfaces/interfaces";

import academyTasks from "./academyTasks";
import airSchoolTasks from "./airSchoolTasks";
import cyberLabTasks from "./cyberLabTasks";
import fireSchoolTasks from "./fireSchoolTasks";
import focusSchoolTasks from "./focusSchoolTasks";
import guildSchoolTasks from "./guildSchoolTasks";
import iceSchoolTasks from "./iceSchoolTasks";
import marketTasks from "./marketTasks";
import mutationLabTasks from "./mutationLabTasks";
import wizardSchoolTasks from "./wizardSchoolTasks";

export function createTask(
    bigResourceName: string,
    bigResourceAmount: number,
    stageTitle: string,
    stageText: string,
    doTaskText: string,
    leaveText: string
): ITask {
    return {
        bigResourceName,
        bigResourceAmount,
        stageTitle,
        stageText,
        doTaskText,
        leaveText
    }
}

const tasks: Partial<IGameTasks> = {
    [GameScreens.academy]: academyTasks,
    [GameScreens.airSchool]: airSchoolTasks,
    [GameScreens.cyberLab]: cyberLabTasks,
    [GameScreens.fireSchool]: fireSchoolTasks,
    [GameScreens.focusSchool]: focusSchoolTasks,
    [GameScreens.guildSchool]: guildSchoolTasks,
    [GameScreens.iceSchool]: iceSchoolTasks,
    [GameScreens.market]: marketTasks,
    [GameScreens.mutationLab]: mutationLabTasks,
    [GameScreens.wizardSchool]: wizardSchoolTasks
}

export default tasks
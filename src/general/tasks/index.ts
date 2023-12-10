import { GameScreens } from "../../enums-and-interfaces/enums";
import { IGameTasks, ITask } from "../../enums-and-interfaces/interfaces";

import academyTasks from "./academyTasks";
import airSiteTasks from "./airSiteTasks";
import cyberLabTasks from "./cyberLabTasks";
import fireSiteTasks from "./fireSiteTasks";
import focusSiteTasks from "./focusSiteTasks";
import guildSchoolTasks from "./guildSchoolTasks";
import iceSiteTasks from "./iceSiteTasks";
import marketTasks from "./marketTasks";
import mutaLabTasks from "./mutaLabTasks";
import wizardSchoolTasks from "./wizardSchoolTasks";

export function createTask(
    bigResourceName: string,
    bigResourceAmount: number,
    taskTitle: string,
    taskText: string
): ITask {
    return {
        bigResourceName,
        bigResourceAmount,
        taskTitle,
        taskText
    }
}
   
const tasks: IGameTasks = {
    [GameScreens.academy]: academyTasks,
    [GameScreens.airSchool]: null,
    [GameScreens.airSite]: airSiteTasks,
    [GameScreens.cyberLab]: cyberLabTasks,
    [GameScreens.fireSchool]: null,
    [GameScreens.fireSite]: fireSiteTasks,
    [GameScreens.focusSchool]: null,
    [GameScreens.focusSite]: focusSiteTasks,
    [GameScreens.guildRituals]: null,
    [GameScreens.guildSchool]: guildSchoolTasks,
    [GameScreens.guildShop]: null,
    [GameScreens.iceSchool]: null,
    [GameScreens.iceSite]: iceSiteTasks,
    [GameScreens.market]: marketTasks,
    [GameScreens.mutaLab]: mutaLabTasks,
    [GameScreens.spellSchool]: null,
    [GameScreens.villageMap]: null,
    [GameScreens.wizardSchool]: wizardSchoolTasks,
    [GameScreens.wizardShop]: null,
}

export default tasks
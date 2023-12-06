import { GameScreens } from "../../enums-and-interfaces/enums";
import { IGameTasks, ITask } from "../../enums-and-interfaces/interfaces";

import academyTasks from "./academyTasks";
import airSchoolTasks from "./airSchoolTasks";
import airSiteTasks from "./airSiteTasks";
import cyberLabTasks from "./cyberLabTasks";
import fireSchoolTasks from "./fireSchoolTasks";
import fireSiteTasks from "./fireSiteTasks";
import focusSchoolTasks from "./focusSchoolTasks";
import focusSiteTasks from "./focusSiteTasks";
import guildSchoolTasks from "./guildSchoolTasks";
import iceSchoolTasks from "./iceSchoolTasks";
import iceSiteTasks from "./iceSiteTasks";
import marketTasks from "./marketTasks";
import mutationLabTasks from "./mutationLabTasks";
import wizardSchoolTasks from "./wizardSchoolTasks";

export function createTask(
    bigResourceName: string,
    bigResourceAmount: number,
    stageTitle: string,
    stageText: string
): ITask {
    return {
        bigResourceName,
        bigResourceAmount,
        stageTitle,
        stageText
    }
}
   
const tasks: IGameTasks = {
    [GameScreens.academy]: academyTasks,
    [GameScreens.airSchool]: airSchoolTasks,
    [GameScreens.airSite]: airSiteTasks,
    [GameScreens.cyberLab]: cyberLabTasks,
    [GameScreens.fireSchool]: fireSchoolTasks,
    [GameScreens.fireSite]: fireSiteTasks,
    [GameScreens.focusSchool]: focusSchoolTasks,
    [GameScreens.focusSite]: focusSiteTasks,
    [GameScreens.guildRituals]: null,
    [GameScreens.guildSchool]: guildSchoolTasks,
    [GameScreens.guildShop]: null,
    [GameScreens.iceSchool]: iceSchoolTasks,
    [GameScreens.iceSite]: iceSiteTasks,
    [GameScreens.market]: marketTasks,
    [GameScreens.mutationLab]: mutationLabTasks,
    [GameScreens.spellSchool]: null,
    [GameScreens.villageMap]: null,
    [GameScreens.wizardSchool]: wizardSchoolTasks,
    [GameScreens.wizardShop]: null,
}

export default tasks
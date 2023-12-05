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
    [GameScreens.airSite]: null,
    [GameScreens.cyberLab]: cyberLabTasks,
    [GameScreens.fireSchool]: fireSchoolTasks,
    [GameScreens.fireSite]: null,
    [GameScreens.focusSchool]: focusSchoolTasks,
    [GameScreens.focusSite]: null,
    [GameScreens.guildRituals]: null,
    [GameScreens.guildSchool]: guildSchoolTasks,
    [GameScreens.guildShop]: null,
    [GameScreens.iceSchool]: iceSchoolTasks,
    [GameScreens.iceSite]: null,
    [GameScreens.market]: marketTasks,
    [GameScreens.mutationLab]: mutationLabTasks,
    [GameScreens.spellSchool]: null,
    [GameScreens.villageMap]: null,
    [GameScreens.wizardSchool]: wizardSchoolTasks,
    [GameScreens.wizardShop]: null,
}

export default tasks
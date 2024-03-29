import {createSlice} from '@reduxjs/toolkit';
import { ICommon, IGameStage, IGameStageOptions, IGameTasks, IScreenStageOptions, ITask } from '../../enums-and-interfaces/interfaces';
import { GameScreens, TaskStatus, UserStartClass } from '../../enums-and-interfaces/enums';
import academyTasks from '../../gameScreens/Academy/tasks';
import airSiteTasks from '../../gameScreens/AirSite/tasks';
import cyberLabTasks from '../../gameScreens/CyberLab/tasks';
import fireSiteTasks from '../../gameScreens/FireSite/tasks';
import focusSiteTasks from '../../gameScreens/FocusSite/tasks';
import guildTasks from '../../gameScreens/Guild/tasks';
import iceSiteTasks from '../../gameScreens/IceSite/tasks';
import mansionTasks from '../../gameScreens/Mansion/tasks';
import marketTasks from '../../gameScreens/Market/tasks';
import mutaLabTasks from '../../gameScreens/MutaLab/tasks';
import wizardSchoolTasks from '../../gameScreens/WizardSchool/tasks';
import { academyOptions } from '../../gameScreens/Academy/masteries';
import { airSchoolOptions } from '../../gameScreens/AirSite/masteries';
import { airSiteOptions } from '../../gameScreens/AirSite/bendings';
import { cyberLabOptions } from '../../gameScreens/CyberLab/cybers';
import { fireSchoolOptions } from '../../gameScreens/FireSite/masteries';
import { fireSiteOptions } from '../../gameScreens/FireSite/bendings';
import { focusSchoolOptions } from '../../gameScreens/FocusSite/masteries';
import { focusSiteOptions } from '../../gameScreens/FocusSite/powers';
import { guildRitualOptions } from '../../gameScreens/Guild/rituals';
import { guildSchoolOptions } from '../../gameScreens/Guild/masteries';
import { guildShopOptions } from '../../gameScreens/Guild/guildItems';
import { iceSchoolOptions } from '../../gameScreens/IceSite/masteries';
import { iceSiteOptions } from '../../gameScreens/IceSite/bendings';
import { marketOptions } from '../../gameScreens/Market/items';
import { mutaLabOptions } from '../../gameScreens/MutaLab/mutations';
import { spellSchoolOptions } from '../../gameScreens/WizardSchool/spells';
import { wizardSchoolOptions } from '../../gameScreens/WizardSchool/masteries';
import { wizardShopOptions } from '../../gameScreens/WizardSchool/wizardItems';
import { armouryOptions, startClassBattleMageOptions, startClassBattleOptions } from '../../gameScreens/Mansion/armouryItems';
import { apprenticeRoomsOptions } from '../../gameScreens/WizardSchool/members';
import { cryomancerRoomsOptions } from '../../gameScreens/IceSite/members';
import { pyrokineticRoomsOptions } from '../../gameScreens/FireSite/members';
import { aerotheurgRoomsOptions } from '../../gameScreens/AirSite/members';
import { tavernOptions } from '../../gameScreens/Market/members';
import { guildianRoomsOptions } from '../../gameScreens/Guild/members';
import { psionRoomsOptions } from '../../gameScreens/FocusSite/members';
import tropheyFieldTasks from '../../gameScreens/TropheyField/tasks';

export function createTask(
    resourceCost: {
        name: string,
        amount: number
    }[],
    taskTitle: string,
    taskText: string
): ITask {
    return {
        resourceCost,
        taskTitle,
        taskText
    }
}
   
export const tasks: IGameTasks = {
    [GameScreens.academy]: academyTasks,
    [GameScreens.aerotheurgRooms]: null,
    [GameScreens.airSchool]: null,
    [GameScreens.airSite]: airSiteTasks,
    [GameScreens.apprenticeRooms]: null,
    [GameScreens.armoury]: null,
    [GameScreens.cryomancerRooms]: null,
    [GameScreens.cyberLab]: cyberLabTasks,
    [GameScreens.fireSchool]: null,
    [GameScreens.fireSite]: fireSiteTasks,
    [GameScreens.focusSchool]: null,
    [GameScreens.focusSite]: focusSiteTasks,
    [GameScreens.guildianRooms]: null,
    [GameScreens.guildRituals]: null,
    [GameScreens.guildSchool]: guildTasks,
    [GameScreens.guildShop]: null,
    [GameScreens.iceSchool]: null,
    [GameScreens.iceSite]: iceSiteTasks,
    [GameScreens.mansion]: mansionTasks,
    [GameScreens.market]: marketTasks,
    [GameScreens.mutaLab]: mutaLabTasks,
    [GameScreens.psionRooms]: null,
    [GameScreens.pyrokineticRooms]: null,
    [GameScreens.spellSchool]: null,
    [GameScreens.tavern]: null,
    [GameScreens.tropheyField]: tropheyFieldTasks,
    [GameScreens.villageMap]: null,
    [GameScreens.wizardSchool]: wizardSchoolTasks,
    [GameScreens.wizardShop]: null,
}

export const stageOptions: IGameStageOptions = {
    [GameScreens.academy]: academyOptions,
    [GameScreens.aerotheurgRooms]: aerotheurgRoomsOptions,
    [GameScreens.airSchool]: airSchoolOptions,
    [GameScreens.airSite]: airSiteOptions,
    [GameScreens.apprenticeRooms]: apprenticeRoomsOptions,
    [GameScreens.armoury]: armouryOptions,
    [GameScreens.cryomancerRooms]: cryomancerRoomsOptions,
    [GameScreens.cyberLab]: cyberLabOptions,
    [GameScreens.fireSchool]: fireSchoolOptions,
    [GameScreens.fireSite]: fireSiteOptions,
    [GameScreens.focusSchool]: focusSchoolOptions,
    [GameScreens.focusSite]: focusSiteOptions,
    [GameScreens.guildianRooms]: guildianRoomsOptions,
    [GameScreens.guildRituals]: guildRitualOptions,
    [GameScreens.guildSchool]: guildSchoolOptions,
    [GameScreens.guildShop]: guildShopOptions,
    [GameScreens.iceSchool]: iceSchoolOptions,
    [GameScreens.iceSite]: iceSiteOptions,
    [GameScreens.mansion]: null,
    [GameScreens.market]: marketOptions,
    [GameScreens.mutaLab]: mutaLabOptions,
    [GameScreens.psionRooms]: psionRoomsOptions,
    [GameScreens.pyrokineticRooms]: pyrokineticRoomsOptions,
    [GameScreens.spellSchool]: spellSchoolOptions,
    [GameScreens.tavern]: tavernOptions,
    [GameScreens.tropheyField]: null,
    [GameScreens.villageMap]: null,
    [GameScreens.wizardSchool]: wizardSchoolOptions,
    [GameScreens.wizardShop]: wizardShopOptions
}

export const createGameStage = (strongStart: boolean) => {
    const result = {} as IGameStage;
    Object.keys(GameScreens).forEach(screen => {
        const gameScreen = screen as keyof typeof GameScreens;
        const stage = (
            GameScreens[gameScreen] === GameScreens.market ||
            GameScreens[gameScreen] === GameScreens.tropheyField ||
            strongStart
        ) ? 1 : 0;
        result[GameScreens[gameScreen]] = {
            stage,
            stageOptions: stageOptions[GameScreens[gameScreen]],
            tasks: tasks[GameScreens[gameScreen]],
            usableOptions: stageOptions[GameScreens[gameScreen]]?.[stage] || []
        }
    })

    return result
}

const relatedScreens: Record<GameScreens, GameScreens[]> = {
    [GameScreens.academy]: [],
    [GameScreens.aerotheurgRooms]: [],
    [GameScreens.airSchool]: [],
    [GameScreens.airSite]: [GameScreens.airSchool, GameScreens.aerotheurgRooms],
    [GameScreens.apprenticeRooms]: [],
    [GameScreens.armoury]: [],
    [GameScreens.cryomancerRooms]: [],
    [GameScreens.cyberLab]: [],
    [GameScreens.fireSchool]: [],
    [GameScreens.fireSite]: [GameScreens.fireSchool, GameScreens.pyrokineticRooms],
    [GameScreens.focusSchool]: [],
    [GameScreens.focusSite]: [GameScreens.focusSchool],
    [GameScreens.guildianRooms]: [],
    [GameScreens.guildRituals]: [],
    [GameScreens.guildSchool]: [GameScreens.guildShop, GameScreens.guildianRooms],
    [GameScreens.guildShop]: [],
    [GameScreens.iceSchool]: [],
    [GameScreens.iceSite]: [GameScreens.iceSchool, GameScreens.cryomancerRooms],
    [GameScreens.mansion]: [GameScreens.armoury],
    [GameScreens.market]: [GameScreens.tavern],
    [GameScreens.mutaLab]: [],
    [GameScreens.psionRooms]: [],
    [GameScreens.pyrokineticRooms]: [],
    [GameScreens.spellSchool]: [],
    [GameScreens.tavern]: [],
    [GameScreens.tropheyField]: [],
    [GameScreens.villageMap]: [],
    [GameScreens.wizardSchool]: [
        GameScreens.wizardShop, 
        GameScreens.spellSchool,
        GameScreens.apprenticeRooms
    ],
    [GameScreens.wizardShop]: [],
}

const gameStage = createSlice({
    name: 'gameStage',
    initialState: createGameStage(false),
    reducers: {
        setState(state, action) {
            // the most workable solution
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key];
            })
        },
        addStartClassWeapons(state, action) {
            const oldState = {...state};
            const armoury = {...oldState.Armoury};
            const stageOptions = {...armoury.stageOptions};

            const startClass: UserStartClass = action.payload;

            if (stageOptions[11].length > 3) {
                stageOptions[11].pop();
            }
            const battleOptionsNames = armouryOptions[11].map(option => option.name);
            const startClassBattleOption = startClassBattleOptions[startClass];
            if (startClassBattleOption && !battleOptionsNames.includes(startClassBattleOption.name)) {
                stageOptions[11].push(startClassBattleOption);
            }

            if (stageOptions[143].length > 3) {
                stageOptions[143].pop();
            }
            const battleMageOptionsNames = armouryOptions[143].map(option => option.name);
            const startClassBattleMageOption = startClassBattleMageOptions[startClass];
            if (startClassBattleMageOption && !battleMageOptionsNames.includes(startClassBattleMageOption.name)) {
                stageOptions[143].push(startClassBattleMageOption);
            }

            armoury.stageOptions = stageOptions;
            oldState.Armoury = armoury;
            state = oldState;
        },
        changeStage(state, action) {
            const oldState = {...state};

            const {zone, stage} = action.payload as {
                zone: GameScreens,
                stage: number
            };

            let upgradedStage = 0;
            if (stage === 1) {
                upgradedStage = stage;
            } else {
                upgradedStage = oldState[zone].stage * stage;
            }

            oldState[zone].stage = upgradedStage;

            const usableOptions = [...oldState[zone].usableOptions];
            usableOptions.push(
                ...(oldState[zone].stageOptions?.[stage] || [])
            );

            if (zone !== GameScreens.tropheyField) {
                const uniqueOptions: string[] = [];
                usableOptions.forEach((option, index, array) => {
                    const optionName = (option as ICommon).name;
                    if (optionName) {
                        if (!uniqueOptions.includes(optionName)) {
                            uniqueOptions.push(optionName);
                        } else {
                            array.splice(index, 1);
                        }
                    }
                });
            }            

            oldState[zone].usableOptions = [...usableOptions];

            if (relatedScreens[zone].length > 0) {
                for (const relatedScreen of relatedScreens[zone]) {
                    if (relatedScreen === GameScreens.armoury) {
                        let bonusStage = 0;
                        const bonusStages = [2431, 1001, 221, 187, 143, 91, 77];
                        for (const checkStage of bonusStages) {
                            if (upgradedStage % checkStage === 0) {
                                if (checkStage % stage === 0) {
                                    bonusStage = checkStage;

                                    const bonusOptions = oldState[relatedScreen].stageOptions?.[bonusStage];
                                    if (bonusOptions) {
                                        oldState[relatedScreen].usableOptions.push(
                                            ...bonusOptions as any[]
                                        );
                                    }
                                }
                            }
                        }
                    }

                    oldState[relatedScreen].stage = upgradedStage;
                    const addOptions = oldState[relatedScreen].stageOptions?.[stage];
                    if (addOptions) {
                        oldState[relatedScreen].usableOptions.push(
                            ...addOptions as any[]
                        );
                    } 
                }
            }

            if (stage === 2 && zone === GameScreens.guildSchool) {
                oldState[GameScreens.guildRituals].stage = 1;
                oldState[GameScreens.guildRituals].usableOptions.push(
                    ...oldState[GameScreens.guildRituals].stageOptions?.[1] as any[]
                );
            }

            state = oldState;
        },
        updateTask(state, action) {
            const oldState = {...state};

            const {screen, stage, status} = action.payload as {
                screen: GameScreens,
                stage: number,
                status: TaskStatus
            };

            const certainScreenTasks = oldState[screen].tasks;
            if (certainScreenTasks) {
                certainScreenTasks[stage].status = status;
                if (screen === GameScreens.tropheyField) {
                    certainScreenTasks[8/stage].status = status;
                }
            }

            state = oldState;
        },
        setUsableOptions(state, action) {
            const oldState = {...state};
            const {screen, stage, options} = action.payload as {
                screen: GameScreens,
                stage: string,
                options: IScreenStageOptions
            }
            
            oldState[screen].usableOptions = options[stage];

            state = oldState;
        }
    }
})

export default gameStage
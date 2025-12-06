import {createSlice} from '@reduxjs/toolkit';
import { 
    ICommon, 
    IGameStage, 
    IGameStageOptions, 
    IGameTasks, 
    IScreenStageOptions, 
    ITask 
} from '../../enums-and-interfaces/interfaces';
import { 
    BendingGameScreens, 
    CommonGameScreens, 
    GameScreens, 
    InventoryGameScreens, 
    MansionScreens, 
    PossibleBattleLocation, 
    RitualGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens, 
    TaskStatus, 
    UserStartClass 
} from '../../enums-and-interfaces/enums';
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
import { focusRitualOptions } from '../../gameScreens/FocusSite/rituals';
import { airRitualOptions } from '../../gameScreens/AirSite/rituals';
import { fireRitualOptions } from '../../gameScreens/FireSite/rituals';
import { iceRitualOptions } from '../../gameScreens/IceSite/rituals';

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
    [SchoolGameScreens.academy]: academyTasks,
    [SquadGameScreens.aerotheurgRooms]: null,
    [RitualGameScreens.airRituals]: null,
    [SchoolGameScreens.airSchool]: null,
    [BendingGameScreens.airSite]: airSiteTasks,
    [SquadGameScreens.apprenticeRooms]: null,
    [InventoryGameScreens.armoury]: null,
    [SquadGameScreens.cryomancerRooms]: null,
    [InventoryGameScreens.cyberLab]: cyberLabTasks,
    [RitualGameScreens.fireRituals]: null,
    [SchoolGameScreens.fireSchool]: null,
    [BendingGameScreens.fireSite]: fireSiteTasks,
    [RitualGameScreens.focusRituals]: null,
    [SchoolGameScreens.focusSchool]: null,
    [SchoolGameScreens.focusSite]: focusSiteTasks,
    [SquadGameScreens.guildianRooms]: null,
    [RitualGameScreens.guildRituals]: null,
    [SchoolGameScreens.guildSchool]: guildTasks,
    [InventoryGameScreens.guildShop]: null,
    [RitualGameScreens.iceRituals]: null,
    [SchoolGameScreens.iceSchool]: null,
    [BendingGameScreens.iceSite]: iceSiteTasks,
    [CommonGameScreens.mansion]: mansionTasks,
    [InventoryGameScreens.market]: marketTasks,
    [InventoryGameScreens.mutaLab]: mutaLabTasks,
    [SquadGameScreens.psionRooms]: null,
    [SquadGameScreens.pyrokineticRooms]: null,
    [SchoolGameScreens.spellSchool]: null,
    [SquadGameScreens.tavern]: null,
    [InventoryGameScreens.tropheyField]: tropheyFieldTasks,
    [CommonGameScreens.villageMap]: null,
    [SchoolGameScreens.wizardSchool]: wizardSchoolTasks,
    [InventoryGameScreens.wizardShop]: null,
    [MansionScreens.livingRoom]: null
}

export const stageOptions: IGameStageOptions = {
    [SchoolGameScreens.academy]: academyOptions,
    [SquadGameScreens.aerotheurgRooms]: aerotheurgRoomsOptions,
    [RitualGameScreens.airRituals]: airRitualOptions,
    [SchoolGameScreens.airSchool]: airSchoolOptions,
    [BendingGameScreens.airSite]: airSiteOptions,
    [SquadGameScreens.apprenticeRooms]: apprenticeRoomsOptions,
    [InventoryGameScreens.armoury]: armouryOptions,
    [SquadGameScreens.cryomancerRooms]: cryomancerRoomsOptions,
    [InventoryGameScreens.cyberLab]: cyberLabOptions,
    [RitualGameScreens.fireRituals]: fireRitualOptions,
    [SchoolGameScreens.fireSchool]: fireSchoolOptions,
    [BendingGameScreens.fireSite]: fireSiteOptions,
    [RitualGameScreens.focusRituals]: focusRitualOptions,
    [SchoolGameScreens.focusSchool]: focusSchoolOptions,
    [SchoolGameScreens.focusSite]: focusSiteOptions,
    [SquadGameScreens.guildianRooms]: guildianRoomsOptions,
    [RitualGameScreens.guildRituals]: guildRitualOptions,
    [SchoolGameScreens.guildSchool]: guildSchoolOptions,
    [InventoryGameScreens.guildShop]: guildShopOptions,
    [RitualGameScreens.iceRituals]: iceRitualOptions,
    [SchoolGameScreens.iceSchool]: iceSchoolOptions,
    [BendingGameScreens.iceSite]: iceSiteOptions,
    [CommonGameScreens.mansion]: null,
    [InventoryGameScreens.market]: marketOptions,
    [InventoryGameScreens.mutaLab]: mutaLabOptions,
    [SquadGameScreens.psionRooms]: psionRoomsOptions,
    [SquadGameScreens.pyrokineticRooms]: pyrokineticRoomsOptions,
    [SchoolGameScreens.spellSchool]: spellSchoolOptions,
    [SquadGameScreens.tavern]: tavernOptions,
    [InventoryGameScreens.tropheyField]: null,
    [CommonGameScreens.villageMap]: null,
    [SchoolGameScreens.wizardSchool]: wizardSchoolOptions,
    [InventoryGameScreens.wizardShop]: wizardShopOptions,
    [MansionScreens.livingRoom]: null
}

export const createGameStage = (strongStart: boolean) => {
    const result = {
        days: {
            total: strongStart ? 50 : 1,
            lastVictory: 0
        },
        possibleBattles: {
            'acrossTheRiver': { sinceDay: 1 },
            'nearTheRiver': { sinceDay: 0 },
            'overTheMountains': { sinceDay: 0 },
            'eastBeach': { sinceDay: 0 },
            'islandBeach': { sinceDay: 0 },
            'southBeach': { sinceDay: 0 }
        }
    } as IGameStage;
    const screens = [
        ...Object.values(BendingGameScreens),
        ...Object.values(SchoolGameScreens),
        ...Object.values(InventoryGameScreens),
        ...Object.values(RitualGameScreens),
        ...Object.values(MansionScreens),
        ...Object.values(SquadGameScreens),
        ...Object.values(CommonGameScreens),
    ]
    screens.forEach(screen => {
        const gameScreen = screen as GameScreens;
        const stage = (
            screen === InventoryGameScreens.market ||
            screen === InventoryGameScreens.tropheyField ||
            strongStart
        ) ? 1 : 0;
        result[gameScreen] = {
            stage,
            stageOptions: stageOptions[gameScreen],
            tasks: tasks[gameScreen],
            usableOptions: stageOptions[gameScreen]?.[stage] || []
        }
    })

    return result
}

const relatedScreens: Record<GameScreens, GameScreens[]> = {
    [SchoolGameScreens.academy]: [],
    [SquadGameScreens.aerotheurgRooms]: [],
    [RitualGameScreens.airRituals]: [],
    [SchoolGameScreens.airSchool]: [],
    [BendingGameScreens.airSite]: [
        SchoolGameScreens.airSchool, 
        SquadGameScreens.aerotheurgRooms,
        RitualGameScreens.airRituals
    ],
    [SquadGameScreens.apprenticeRooms]: [],
    [InventoryGameScreens.armoury]: [],
    [SquadGameScreens.cryomancerRooms]: [],
    [InventoryGameScreens.cyberLab]: [],
    [RitualGameScreens.fireRituals]: [],
    [SchoolGameScreens.fireSchool]: [],
    [BendingGameScreens.fireSite]: [
        SchoolGameScreens.fireSchool, 
        SquadGameScreens.pyrokineticRooms,
        RitualGameScreens.fireRituals
    ],
    [RitualGameScreens.focusRituals]: [],
    [SchoolGameScreens.focusSchool]: [],
    [SchoolGameScreens.focusSite]: [
        SchoolGameScreens.focusSchool,
        RitualGameScreens.focusRituals
    ],
    [SquadGameScreens.guildianRooms]: [],
    [RitualGameScreens.guildRituals]: [],
    [SchoolGameScreens.guildSchool]: [
        InventoryGameScreens.guildShop, 
        SquadGameScreens.guildianRooms, 
        RitualGameScreens.guildRituals
    ],
    [InventoryGameScreens.guildShop]: [],
    [RitualGameScreens.iceRituals]: [],
    [SchoolGameScreens.iceSchool]: [],
    [BendingGameScreens.iceSite]: [
        SchoolGameScreens.iceSchool, 
        SquadGameScreens.cryomancerRooms,
        RitualGameScreens.iceRituals
    ],
    [CommonGameScreens.mansion]: [InventoryGameScreens.armoury],
    [InventoryGameScreens.market]: [SquadGameScreens.tavern],
    [InventoryGameScreens.mutaLab]: [],
    [SquadGameScreens.psionRooms]: [],
    [SquadGameScreens.pyrokineticRooms]: [],
    [SchoolGameScreens.spellSchool]: [],
    [SquadGameScreens.tavern]: [],
    [InventoryGameScreens.tropheyField]: [],
    [CommonGameScreens.villageMap]: [],
    [SchoolGameScreens.wizardSchool]: [
        InventoryGameScreens.wizardShop, 
        SchoolGameScreens.spellSchool,
        SquadGameScreens.apprenticeRooms
    ],
    [InventoryGameScreens.wizardShop]: [],
    [MansionScreens.livingRoom]: []
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

            if (zone !== InventoryGameScreens.tropheyField) {
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
                    if (relatedScreen === InventoryGameScreens.armoury) {
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
                if (screen === InventoryGameScreens.tropheyField) {
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
        },
        addDays(state, action) {
            const oldState = {...state};
            const {amount} = action.payload as {amount: number};
            oldState.days.total += amount;

            state = oldState;
        },
        addRandomBattle(state, action) {
            const oldState = {...state};
            const {possibleBattles} = oldState;

            const availableBattles: string[] = [];
            Object.keys(PossibleBattleLocation).forEach((location) => {
                if (possibleBattles[location as PossibleBattleLocation].sinceDay === 0) {
                    availableBattles.push(location);
                }
            });
            if (availableBattles.length > 0) {
                const randomLocation = availableBattles[
                    Math.floor(Math.random() * availableBattles.length)];
                oldState.possibleBattles[randomLocation as PossibleBattleLocation].sinceDay =
                    oldState.days.total;
            }            

            state = oldState;
        },
        removeBattle(state, action) {
            const oldState = {...state};
            const {location} = action.payload as {location: PossibleBattleLocation};
            oldState.possibleBattles[location].sinceDay = 0;         

            state = oldState;
        }
    }
})

export default gameStage
import {createSlice} from '@reduxjs/toolkit';
import { IGameStage } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';
import stageOptions from '../../general/stageOptions';
import tasks from '../../general/tasks';

export const createGameStage = (strongStart: boolean) => {
    const result = {} as IGameStage;
    Object.keys(GameScreens).forEach(screen => {
        const stage = (GameScreens[screen as keyof typeof GameScreens] === GameScreens.market ||
                strongStart) ? 1 : 0;
        result[GameScreens[screen as keyof typeof GameScreens]] = {
            stage,
            stageOptions: stageOptions[GameScreens[screen as keyof typeof GameScreens]],
            tasks: tasks[GameScreens[screen as keyof typeof GameScreens]],
            usableOptions: stageOptions[GameScreens[screen as keyof typeof GameScreens]]?.[stage]!
        }
    })

    return result
}

const relatedScreens: Record<GameScreens, GameScreens[]> = {
    [GameScreens.academy]: [],
    [GameScreens.airSchool]: [],
    [GameScreens.airSite]: [GameScreens.airSchool],
    [GameScreens.cyberLab]: [],
    [GameScreens.fireSchool]: [],
    [GameScreens.fireSite]: [GameScreens.fireSchool],
    [GameScreens.focusSchool]: [],
    [GameScreens.focusSite]: [GameScreens.focusSchool],
    [GameScreens.guildRituals]: [],
    [GameScreens.guildSchool]: [GameScreens.guildShop],
    [GameScreens.guildShop]: [],
    [GameScreens.iceSchool]: [],
    [GameScreens.iceSite]: [GameScreens.iceSchool],
    [GameScreens.market]: [],
    [GameScreens.mutaLab]: [],
    [GameScreens.spellSchool]: [],
    [GameScreens.villageMap]: [],
    [GameScreens.wizardSchool]: [GameScreens.wizardShop, GameScreens.spellSchool],
    [GameScreens.wizardShop]: [],
}

const gameStage = createSlice({
    name: 'gameStage',
    initialState: createGameStage(false),
    reducers: {
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key];
            })
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
            oldState[zone].usableOptions?.push(
                ...oldState[zone].stageOptions?.[stage] as any[]
            );

            if (relatedScreens[zone].length > 0) {
                for (const relatedScreen of relatedScreens[zone]) {
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
        }
    }
})

export default gameStage
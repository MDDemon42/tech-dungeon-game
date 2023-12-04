import {createSlice} from '@reduxjs/toolkit';
import { IGameStage } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';
import stageOptions from '../../general/stageOptions';
import tasks from '../../general/tasks';

const createInitialState = () => {
    const result = {} as IGameStage;
    Object.keys(GameScreens).forEach(screen => {
        result[GameScreens[screen as keyof typeof GameScreens]] = {
            stage: GameScreens[screen as keyof typeof GameScreens] === GameScreens.market ? 1 : 0,
            options: stageOptions[GameScreens[screen as keyof typeof GameScreens]],
            tasks: tasks[GameScreens[screen as keyof typeof GameScreens]]
        }
    })

    return result
}

const gameStage = createSlice({
    name: 'gameStage',
    initialState: createInitialState(),
    reducers: {
        changeStage(state, action) {
            const oldState = {...state};

            const {zone, stage} = action.payload;
            oldState[zone as GameScreens].stage = stage;

            switch (zone) {
                case GameScreens.wizardSchool:
                    oldState[GameScreens.wizardShop].stage = stage;
                    oldState[GameScreens.spellSchool].stage = stage;
                    break;

                case GameScreens.airSchool:
                    oldState[GameScreens.airSite].stage = stage;
                    break;

                case GameScreens.fireSchool:
                    oldState[GameScreens.fireSite].stage = stage;
                    break;

                case GameScreens.iceSchool:
                    oldState[GameScreens.iceSite].stage = stage;
                    break;

                case GameScreens.focusSchool:
                    if (stage === 1) {
                        oldState[GameScreens.focusSite].stage = stage;
                    } else {
                        oldState[GameScreens.focusSite].stage = 
                            oldState[GameScreens.focusSite].stage * stage;
                    }
                    break;

                case GameScreens.guildSchool:
                    oldState[GameScreens.guildShop].stage = stage;
                    if (stage === 2) {
                        oldState[GameScreens.guildRituals].stage = 1;
                    }
                    break;
                
                default:
                    break;
            }

            state = oldState;
        }
    }
})

export default gameStage
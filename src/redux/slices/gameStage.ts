import {createSlice} from '@reduxjs/toolkit';
import { IGameStage } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';
import { mutationLabOptions } from '../../general/stageOptions/mutationLabOptions';
import { cyberLabOptions } from '../../general/stageOptions/cyberLabOptions';
import { marketOptions } from '../../general/stageOptions/marketOptions';
import { focusSiteOptions } from '../../general/stageOptions/focusSiteOptions';
import { academyOptions } from '../../general/stageOptions/academyOptions';
import { spellSchoolOptions } from '../../general/stageOptions/spellSchoolOptions';
import { wizardShopOptions } from '../../general/stageOptions/wizardShopOptions';
import { airSiteOptions } from '../../general/stageOptions/airSiteOptions';
import { fireSiteOptions } from '../../general/stageOptions/fireSiteOptions';
import { iceSiteOptions } from '../../general/stageOptions/iceSiteOptions';
import { wizardSchoolOptions } from '../../general/stageOptions/wizardSchoolOptions';
import { airSchoolOptions } from '../../general/stageOptions/airSchoolOptions';
import { fireSchoolOptions } from '../../general/stageOptions/fireSchoolOptions';
import { iceSchoolOptions } from '../../general/stageOptions/iceSchoolOption';
import { focusSchoolOptions } from '../../general/stageOptions/focusSchoolOptions';
import { guildRitualOptions } from '../../general/stageOptions/guildRitualOptions';
import { guildShopOptions } from '../../general/stageOptions/guildShopOptions';
import { guildSchoolOptions } from '../../general/stageOptions/guildSchoolOptions';

const initialState: IGameStage = {
    [GameScreens.market]: {
        stage: 1,
        options: marketOptions
    },
    [GameScreens.cyberLab]: {
        stage: 0,
        options: cyberLabOptions
    },
    [GameScreens.mutationLab]: {
        stage: 0,
        options: mutationLabOptions
    },
    [GameScreens.academy]: {
        stage: 0,
        options: academyOptions
    },
    [GameScreens.focusSite]: {
        stage: 0,
        options: focusSiteOptions
    },
    [GameScreens.focusSchool]: {
        stage: 0,
        options: focusSchoolOptions
    },
    [GameScreens.spellSchool]: {
        stage: 0,
        options: spellSchoolOptions
    },
    [GameScreens.wizardShop]: {
        stage: 0,
        options: wizardShopOptions
    },
    [GameScreens.wizardSchool]: {
        stage: 0,
        options: wizardSchoolOptions
    },
    [GameScreens.villageMap]: {
        stage: 0,
        options: null
    },
    [GameScreens.airSite]: {
        stage: 0,
        options: airSiteOptions
    },
    [GameScreens.airSchool]: {
        stage: 0,
        options: airSchoolOptions
    },
    [GameScreens.fireSite]: {
        stage: 0,
        options: fireSiteOptions
    },
    [GameScreens.fireSchool]: {
        stage: 0,
        options: fireSchoolOptions
    },
    [GameScreens.iceSite]: {
        stage: 0,
        options: iceSiteOptions
    },
    [GameScreens.iceSchool]: {
        stage: 0,
        options: iceSchoolOptions
    },
    [GameScreens.guildRituals]: {
        stage: 0,
        options: guildRitualOptions
    },
    [GameScreens.guildShop]: {
        stage: 0,
        options: guildShopOptions
    },
    [GameScreens.guildSchool]: {
        stage: 0,
        options: guildSchoolOptions
    }
}

const gameStage = createSlice({
    name: 'gameStage',
    initialState,
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
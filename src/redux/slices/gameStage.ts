import {createSlice} from '@reduxjs/toolkit';
import { 
    ICommon, 
    IGameStage, 
    IGameStageOptions, 
    IScreenStageOptions, 
} from '../../enums-and-interfaces/interfaces';
import { 
    BendingGameScreens, 
    CommonGameScreens, 
    GameScreens, 
    InventoryGameScreens,
    RitualGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens
} from '../../enums-and-interfaces/enums';
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
import { apprenticeRoomsOptions } from '../../gameScreens/WizardSchool/members';
import { cryomancerRoomsOptions } from '../../gameScreens/IceSite/members';
import { pyrokineticRoomsOptions } from '../../gameScreens/FireSite/members';
import { aerotheurgRoomsOptions } from '../../gameScreens/AirSite/members';
import { tavernOptions } from '../../gameScreens/Market/members';
import { guildianRoomsOptions } from '../../gameScreens/Guild/members';
import { psionRoomsOptions } from '../../gameScreens/FocusSite/members';
import { focusRitualOptions } from '../../gameScreens/FocusSite/rituals';
import { airRitualOptions } from '../../gameScreens/AirSite/rituals';
import { fireRitualOptions } from '../../gameScreens/FireSite/rituals';
import { iceRitualOptions } from '../../gameScreens/IceSite/rituals';

export const stageOptions: IGameStageOptions = {
    [SchoolGameScreens.academy]: academyOptions,
    [SquadGameScreens.aerotheurgRooms]: aerotheurgRoomsOptions,
    [RitualGameScreens.airRituals]: airRitualOptions,
    [SchoolGameScreens.airSchool]: airSchoolOptions,
    [BendingGameScreens.airSite]: airSiteOptions,
    [SquadGameScreens.apprenticeRooms]: apprenticeRoomsOptions,
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
    [InventoryGameScreens.market]: marketOptions,
    [InventoryGameScreens.mutaLab]: mutaLabOptions,
    [SquadGameScreens.psionRooms]: psionRoomsOptions,
    [SquadGameScreens.pyrokineticRooms]: pyrokineticRoomsOptions,
    [SchoolGameScreens.spellSchool]: spellSchoolOptions,
    [SquadGameScreens.tavern]: tavernOptions,
    [CommonGameScreens.villageMap]: null,
    [SchoolGameScreens.wizardSchool]: wizardSchoolOptions,
    [InventoryGameScreens.wizardShop]: wizardShopOptions,
}

export const createGameStage = (strongStart: boolean) => {
    const result = {} as IGameStage;
    const screens = [
        ...Object.values(BendingGameScreens),
        ...Object.values(SchoolGameScreens),
        ...Object.values(InventoryGameScreens),
        ...Object.values(RitualGameScreens),
        ...Object.values(SquadGameScreens),
        ...Object.values(CommonGameScreens),
    ]
    screens.forEach(screen => {
        const gameScreen = screen as GameScreens;
        const stage = (
            screen === InventoryGameScreens.market ||
            strongStart
        ) ? 1 : 0;
        result[gameScreen] = {
            stage,
            stageOptions: stageOptions[gameScreen],
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
    [InventoryGameScreens.market]: [SquadGameScreens.tavern],
    [InventoryGameScreens.mutaLab]: [],
    [SquadGameScreens.psionRooms]: [],
    [SquadGameScreens.pyrokineticRooms]: [],
    [SchoolGameScreens.spellSchool]: [],
    [SquadGameScreens.tavern]: [],
    [CommonGameScreens.villageMap]: [],
    [SchoolGameScreens.wizardSchool]: [
        InventoryGameScreens.wizardShop, 
        SchoolGameScreens.spellSchool,
        SquadGameScreens.apprenticeRooms
    ],
    [InventoryGameScreens.wizardShop]: [],
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

            oldState[zone].usableOptions = [...usableOptions];

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
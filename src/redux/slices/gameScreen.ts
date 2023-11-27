import {createSlice} from '@reduxjs/toolkit';
import { IGameScreen } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';

const initialState: IGameScreen = {
    screen: GameScreens.villageMap,
    shouldShowBackpacks: true
}

const gameScreen = createSlice({
    name: 'gameScreen',
    initialState,
    reducers: {
        changeScreen(state, action) {
            state.screen = action.payload;

            switch (action.payload) {
                case GameScreens.academy:
                case GameScreens.mutationLab:
                case GameScreens.cyberLab:
                case GameScreens.focusSite:
                case GameScreens.spellShop:
                    break;
                case GameScreens.market:
                    state.shouldShowBackpacks = true;
                    break;
            }
        }
    }
})

export default gameScreen
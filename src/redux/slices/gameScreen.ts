import {createSlice} from '@reduxjs/toolkit';
import { GameScreens, IGameScreen } from '../../types/interfaces';

const initialState: IGameScreen = {
    screen: GameScreens.battle,
    shouldShowProfile: true,
    shouldShowBackpacks: false
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
                    state.shouldShowProfile = true;
                    break;
                case GameScreens.market:
                    state.shouldShowBackpacks = true;
                    break;
            }
        }
    }
})

export default gameScreen
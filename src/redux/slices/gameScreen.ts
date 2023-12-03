import {createSlice} from '@reduxjs/toolkit';
import { IGameScreen } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';

const initialState: IGameScreen = {
    screen: GameScreens.villageMap
}

const gameScreen = createSlice({
    name: 'gameScreen',
    initialState,
    reducers: {
        changeScreen(state, action) {
            state.screen = action.payload;
        }
    }
})

export default gameScreen
import {createSlice} from '@reduxjs/toolkit';
import { IGameScreen } from '../../enums-and-interfaces/interfaces';
import { CommonGameScreens } from '../../enums-and-interfaces/enums';

const initialState: IGameScreen = {
    screen: CommonGameScreens.villageMap
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
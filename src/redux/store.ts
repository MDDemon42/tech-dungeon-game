import {configureStore} from '@reduxjs/toolkit';
import {logger, saver} from './middleware';
import {combineReducers} from 'redux';

import gameScreen from './slices/gameScreen';
import gameStage from './slices/gameStage';
import everything from './slices/everything';
import gameSquad from './slices/gameSquad';
import opponents from './slices/opponents';

const reducer = combineReducers({
    everything: everything.reducer,
    gameScreen: gameScreen.reducer,
    gameStage: gameStage.reducer,
    gameSquad: gameSquad.reducer,
    opponents: opponents.reducer
})

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger, saver);

export default configureStore({
    reducer,
    middleware
})
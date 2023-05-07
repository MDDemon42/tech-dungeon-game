import {configureStore} from '@reduxjs/toolkit';
import {logger, saver} from './middleware';
import {combineReducers} from 'redux';

import userParams from './slices/userParams';
import generalAll from './slices/generalAll';
import generalUser from './slices/generalUser';

const reducer = combineReducers({
    userParams: userParams.reducer,
    generalAll: generalAll.reducer,
    generalUser: generalUser.reducer
})

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger, saver);

export default configureStore({
    reducer,
    middleware
})
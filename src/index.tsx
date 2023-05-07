import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Routes, Route} from "react-router-dom";

import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import ErrorPage from './pages/ErrorPage';
import GamePage from './pages/GamePage';

import store from './redux/store';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Provider store={store}>
        <Routes> 
          <Route path={'/'} element={<MainPage />} errorElement={<ErrorPage />}/>
          <Route path={'/settings'} element={<SettingsPage />}/>
          <Route path={'/game'} element={<GamePage />}/>
        </Routes>
      </Provider>
    </HashRouter>
  );

export function chromeStorageSaver() {
  chrome.runtime.sendMessage({
    type: 'save',
    token: '0_0',
    data: store.getState()
  })
}
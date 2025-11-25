import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Routes, Route} from "react-router-dom";

import StartPage from './pages/StartPages/StartPage';
import SettingsPage from './pages/StartPages/SettingsPage';
import ErrorPage from './pages/StartPages/ErrorPage';
import GamePage from './pages/GamePages/GamePage';
import InfoPage from './pages/GamePages/InfoPage';

import store from './redux/store';

import onMessageOnGamePage from './messaging';
import BattlePage from './pages/GamePages/BattlePage';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Provider store={store}>
        <Routes> 
          <Route path={'/'} element={<StartPage />} errorElement={<ErrorPage />}/>
          <Route path={'/settings'} element={<SettingsPage />}/>
          <Route path={'/game'} element={<GamePage />}/>
          <Route path={'/battle'} element={<BattlePage />}/>
          <Route path={'/info'} element={<InfoPage />}/>
        </Routes>
      </Provider>
    </HashRouter>
  );

export function chromeStorageSaver() {
  chrome.runtime.sendMessage({
    type: 'save',
    token: '^_^',
    data: store.getState()
  })
}

chrome.runtime.onMessage.addListener(onMessageOnGamePage);
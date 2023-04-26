import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";

import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import ErrorPage from './pages/ErrorPage';
import GamePage from './pages/GamePage';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <HashRouter>
      <Routes> 
        <Route path={'/'} element={<MainPage />} errorElement={<ErrorPage />}/>
        <Route path={'/settings'} element={<SettingsPage />}/>
        <Route path={'/game'} element={<GamePage />}/>
      </Routes>
    </HashRouter>
  );
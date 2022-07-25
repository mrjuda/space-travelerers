import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { Navbar } from './components/header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

import './App.css';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

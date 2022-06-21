import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import injectContext from './store/appContext.js';
import Navbar from '../src/components/navbar.jsx';
import Home from '../src/views/home.jsx';
import Maps from '../src/views/maps.jsx';
import Starwars from '../src/views/starwars.jsx';
import NotFound from '../src/views/notfound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/maps" element={<Maps/>} />
        <Route exact path="/starwars" element={<Starwars/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);

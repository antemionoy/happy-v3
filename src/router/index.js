import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';

function Layout() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="/contacts" element={<Contacts />}></Route>
      </Routes>
  );
}

export default Layout;

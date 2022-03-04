import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { ContactsPage } from '../pages/ContactsPage';
import DiscountPage from '../pages/DiscountPage';

function Layout() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/discount" element={<DiscountPage />}></Route>
      </Routes>
  );
}

export default Layout;

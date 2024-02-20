import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from "react";
import Header from "./layOut/Header.js";
import Nav from "./layOut/Nav.js";
import Main from "./layOut/Main";
import Footer from './layOut/Footer.js';

import ContactoPage from './pages/ContactoPage.js';
import HomePage from './pages/HomePage.js';
import NosotrosPage from './pages/NosotrosPage.js';
import ServicesPage from './pages/ServicesPage.js';




function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Main />

      <Footer />

    </div>

  );
}
export default App;
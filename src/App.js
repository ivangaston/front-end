import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from "react";
/*ACA importamos las funciones creadas en en un archivo JS, la palabra en rojo es el nombre de la funcion */ 
import Header from "./layOut/Header.js";
import Nav from "./layOut/Nav.js";
import Footer from './layOut/Footer.js';


import HomePage from './pages/HomePage.js';
import NosotrosPage from './pages/NosotrosPage.js';
import ContactoPage from './pages/ContactoPage.js';
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

      <Footer />

    </div>

  );
}
export default App;
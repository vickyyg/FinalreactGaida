import React from "react";

import './App.css'
import Navegador from "./components/Navegador/Navegador";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainar/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Productos from "./productos/componentes/Productos";
import Formulario from "./Formulario/Formulario";
import Footer from "./components/Footer/Footer";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navegador />
          
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="Formulario" element={<Formulario />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


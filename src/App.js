/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Cards/Main";
import Main1 from "./components/Cards/Main1";
import ProductsPage from "./components/Cards/products/ProductsPage";
import productos from './components/Cards/productos';
import DetailsPage from "./components/Cards/products/DetailsPage";
import {Provider} from 'react-redux';
import store from './store/index';
import CarritoPage from "./components/Cards/CarritoPage";

function App() {
  const andarines = productos.filter(el => el.categoria === 'Andarin');
  const pelelas = productos.filter(el => el.categoria === 'Pelela');
  console.log(andarines);
  console.log(pelelas);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/lista" element={<ProductsPage productos={productos}/>} />

          <Route path="/category/andarines" element={<ProductsPage productos={andarines}/>} />

          <Route path="/category/pelela" element={<ProductsPage productos={pelelas}/>} />

          <Route path="/product/:id" element={<DetailsPage/>}></Route>

          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>

      </BrowserRouter>

      <Main1 />
    </Provider>
  );
}

export default App;

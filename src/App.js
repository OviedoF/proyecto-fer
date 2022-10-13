/* eslint-disable no-unused-vars */
import './App.css';
import ItemListContainer from './components/Cards/ItemListContainer';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/Cards/ItemDetailContainer';
import Main from './components/Cards/Main';
import Item from './components/Cards/Item';
import Main1 from './components/Cards/Main1';
function App() {
  return (
    <>
   
    <BrowserRouter>
      <Navbar/>
 
 <Routes>
 <Route path='/' element={<Main/>} /> 

  <Route path='/lista' element={<ItemListContainer/>} />
  <Route path='/detalle' element={<ItemDetailContainer/>}/>

  <Route path='/category./PELELA' element={<ItemListContainer/>} />
 </Routes>
      
 </BrowserRouter>

   <Main1/>
    </>
  );
}


export default App;

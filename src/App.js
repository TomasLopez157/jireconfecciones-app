import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App2.css";
import "./components/navBar.css";
import NavBar from "./components/NavBar";
import ItemLisstConteiner from "./components/ItemLisstConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import ItemDetail from './components/ItemDetail';


 

function App() {    

  return (

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/a" element={<ItemLisstConteiner/>}></Route>
      <Route exact path="/category/:id" element={<ItemLisstConteiner/>}></Route>
      <Route exact path="/Item/:id" element={<ItemDetailConteiner><ItemDetail></ItemDetail></ItemDetailConteiner>}></Route>
      <Route exact path="/productos" element={<productos>
        <img className='imgProductos2' src='https://www.casaespadas.com/post/2016-08-remera-manga-rangla-2.jpg' alt='img1'/>
        <img className='imgProductos3' src="https://d2r9epyceweg5n.cloudfront.net/stores/871/662/products/rangla-ml21-dc826959deea4a36ea16294618761978-480-0.jpg" alt="img2"/>
        <img className='imgProductos3' src="https://falabella.scene7.com/is/image/FalabellaAR/3121626_1?wid=800&hei=800&qlt=70" alt="img3"/>
        </productos>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;

import React  from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App2.css";
import "./components/navBar.css";
import NavBar from "./components/NavBar";
import ItemLisstConteiner from "./components/ItemLisstConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner";

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/a" element={<ItemLisstConteiner/>}></Route>
      <Route exact path="/category/:id" element={<ItemLisstConteiner/>}></Route>
      <Route exact path="/Item/:id" element={<ItemDetailConteiner/>}></Route>
    </Routes>

    </BrowserRouter>
  );
}
export default App;

//<ItemLisstConteiner> 
//<ItemList>
//  <Item/>
//</ItemList>
//</ItemLisstConteiner>
//<ItemCount initial={0} stock = {8}/>
//<ItemDetailConteiner/>





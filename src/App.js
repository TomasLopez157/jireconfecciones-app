
import React from 'react';
import "./App2.css";
import "./components/navBar.css";
import NavBar from './components/NavBar';
import ItemLisstConteiner from './components/ItemLisstConteiner';
import ItemCount from "./components/ItemCount";
import ItemList from './components/ItemList';
import Item from './components/Item';

 

function App() {

  return (
    <React.Fragment >
      <NavBar/>
      <ItemLisstConteiner >
      <ItemList>
        <Item/>
      </ItemList>
      </ItemLisstConteiner>
      <ItemCount initial={0} stock = {8}/>
    </React.Fragment>
  );
}
export default App;







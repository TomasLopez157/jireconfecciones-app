
import React from 'react';
import "./App2.css";
import "./components/navBar.css";
import NavBar from './components/NavBar';
import ItemLisstConteiner from './components/ItemLisstConteiner';
import ItemCount from "./components/ItemCount";





function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
      <ItemLisstConteiner></ItemLisstConteiner>
      <ItemCount></ItemCount>
    </React.Fragment>
  );
  }

export default App;







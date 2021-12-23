
import React from 'react';
import './App2.css';
import navBar from './components/navBar.css';
import NavBar from './components/NavBar';
import cartWidget from './components/cartWidget';
import itemListContiner from "../src/components/itemListConteiner";


function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
     <itemListContiner></itemListContiner>
      <cartWidget></cartWidget>
    </React.Fragment>
  );
  }

export default App;







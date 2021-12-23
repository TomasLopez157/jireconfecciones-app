
import React from 'react';
import './App2.css';
import NavBar from './components/NavBar';
import navBar from './components/navBar.css';
import cartWidget from './components/cartWidget';
import itemListContiner from "./components/itemListConteiner";



function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
      <cartWidget></cartWidget>
      <itemListContiner></itemListContiner>
    </React.Fragment>
  );
  }

export default App;







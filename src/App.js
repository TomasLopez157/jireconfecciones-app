
import React from 'react';
import './App2.css';
import NavBar from './components/NavBar';
import navBar from './components/navBar.css';
import CartWidget from './components/CartWidget1';
import itemListConteiner from './components/itemListConteiner.JS';



function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
      <itemListConteiner></itemListConteiner>
      <CartWidget></CartWidget>
      
    </React.Fragment>
  );
  }

export default App;







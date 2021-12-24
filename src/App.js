
import React from 'react';
import './App2.css';
import NavBar from './components/NavBar';
import navBar from './components/navBar.css';
import CartWidget from './components/CartWidget1';
import itemListConteiner from './components/itemListCoonteiner.JS';



function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
      
      <itemListConteiner>
        <CartWidget></CartWidget>
      </itemListConteiner>
      
    </React.Fragment>
  );
  }

export default App;







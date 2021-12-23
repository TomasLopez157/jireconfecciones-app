
import React from 'react';
import './App2.css';
import NavBar from './components/NavBar';
import navBar from './components/navBar.css';
import cartWidget from './components/cartWidget';
import itemListContiner from "../src/components/itemListConteiner";


function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
     <itemListContiner/>
      <cartWidget/>
    </React.Fragment>
  );
  }

export default App;







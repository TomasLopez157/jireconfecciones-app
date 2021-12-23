
import React from 'react';
import './App2.css';
import navBar from './components/navBar.css';
import NavBar from './components/NavBar';
import itemListContiner from "../src/components/itemListConteiner";
import cartWidget from './components/cartWidget';


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







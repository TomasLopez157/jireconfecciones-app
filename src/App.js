
import React from 'react';
import "./App2.css";
import "./components/navBar.css";
import NavBar from './components/NavBar';
import itemListConteiner from './components/itemListConteiner';





function App() {
  return (
    <React.Fragment className="app">
       
      <NavBar/>
      <itemListConteiner></itemListConteiner>
    </React.Fragment>
  );
  }

export default App;







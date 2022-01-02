import React,{useState} from "react";
import carWidget from "./carWidget";


function NavBar(){ 
    
    const[scainet1]=useState("ESTADO")

    return (
        <header>

            <h1 className='title'>JIRE CONFECCIONES</h1> 

        <nav className='menu' >

            <a className='inicio' href='inicio' >{scainet1}</a>
            <a className='unixes' href='unixes'>unixes</a> 
            <a className='niños' href='niños'>niños</a>
            <a className='nosotros' href='nosotros'>nosotros</a> 
            <a className='preguntas' href='preguntas'>
                <carWidget.TitLabel text ='preguntas'></carWidget.TitLabel>
            </a>
                      
            
    </nav> 

    </header>
    );
}


export default NavBar;

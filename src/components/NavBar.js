import React,{useState} from "react";
import carWidget from "./carWidget";




function NavBar(){ 
    const[Scainet1, setScainet2] = useState ("ESTADO");
    const dataClick = () => {
        setScainet2 ("ya cambiè")

    }



    return (
        <header>

            <h1 className='title'>JIRE CONFECCIONES</h1> 

        <nav className='menu' >

            <a className='inicio' href='inicio' >{Scainet1}</a>
            <a className='unixes' href='unixes'>unixes</a> 
            <a className='niños' href='niños'>niños</a>
            <a className='nosotros' href='nosotros'>nosotros</a> 
            <a className='preguntas' href='preguntas'>
                <carWidget.TitLabel text ='preguntas'></carWidget.TitLabel>
            </a>
            <a><button onClick={dataClick}>Click me</button></a>
                      
            
    </nav> 


    </header>

    );
}


export default NavBar;

import React,{ useState} from "react";
import carWidget from "./carWidget";


function NavBar(){ 
    const[Scainet1, setScainet2] = useState ("INICIO");
    const dataClick = () => {
        setScainet2 ("ya cambie");

    }

    return ( 
        
        <header>

            <h1 className='title'>JIRE CONFECCIONES</h1> 

        <nav className='menu' >

            <a className='inicio' href='inicio'>{Scainet1}</a>
            <a className='unixes' href='unixes'>unixes</a> 
            <a className='niños' href='niños'>niños</a>
            <a className='nosotros' href='nosotros'>nosotros</a> 
            <a className='preguntas' href='preguntas'>
                <carWidget.TitLabel text ='preguntas'></carWidget.TitLabel>
            </a>
           <div><button onClick={dataClick}>click me</button></div>
           
           

           
               
    </nav> 
    </header>
    );
}


export default NavBar;

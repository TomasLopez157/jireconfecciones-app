import React from "react";
import {NavLink} from "react-router-dom"

function NavBar(){ 
    return ( 
        <header>

            <h1 className='title'>JIRE CONFECCIONES</h1> 
            
        <nav className='menu' >
            
            <NavLink className='inicio' to={"/"}>/</NavLink>
            <a className='remeras' href='category/:id'>category/:id</a> 
            <a className='niños' href='Item/:id'>item/:id</a>
            <a className='nosotros' href='nosotros'>nosotros</a>
    </nav>

        <h1 className="title2">BIENVENIDO A JIRE CONFECCIONES</h1>
        <h1 className="title2">TIENDA ONLINE DE ROPA UNIXES PARA GRANDES Y NIÑOS</h1>

    </header>
    );
}


export default NavBar;

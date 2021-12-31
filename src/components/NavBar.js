import React from "react";

const Scainet ={
    Termineitor:(props)=><h1>{props.children}</h1>,
    Termineitor2:(props)=><h2>{props.Tomas}</h2>
}

function NavBar(props){
    console.log(props)
    const {id:value, ejemplo:titulo} = props
 
    return (
        <header>

            <h1 className='title'>JIRE CONFECCIONES</h1> 
           <Scainet.Termineitor Tomas="CORRE!!"><h1>hijo de...</h1></Scainet.Termineitor>
           <Scainet.Termineitor2 Tomas="ESCONDETE!!"/>

        <nav className='menu' >

            
            <a className='inicio' href='inicio'>inicio</a>
            <a className='unixes' href='unixes'>unixes</a> 
            <a className='niños' href='niños'>niños</a>
            <a className='nosotros' href='nosotros'>nosotros</a> 
             <div>{value}</div> 
            <div>{titulo}</div>
            
            

    </nav> 

    </header>
    );
}


export default NavBar;

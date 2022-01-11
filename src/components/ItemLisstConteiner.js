import React, {useState } from "react";

import ItemList from "./ItemList";
import carrito from "./ftl/img/Carrito3.jpg"


function ItemLisstConteiner() {


    const [state, setState] = useState("LOPEZ")
     const dataClick = () =>{
        setState("TOMAS"); }

    const datos =  [
        {id : 1 , nombre : "Remera mangas corta", descripcion:"Talles disponibles del XS AL XXL", precio:"$1.000", img:"hhttps://needen-a1a5.kxcdn.com/files/model_specifications/2015/8/28/111465/111465_big.jpg?1506410989"},]
        

    const getData = (tomas) =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(tomas);
            },2000)
    });
}
    getData().then((res)=>{
        return res;
        });

        return(

            <> 
            <ItemList tomas={datos}/>            
            <h3 className="state">{state}</h3>
            <div>
                <button className="btnCarrito" onClick={dataClick}><img className="imgCarrito" src={carrito} alt="imgCarrito"/></button>
            </div>
            
            </>
        )

}
export default ItemLisstConteiner; 
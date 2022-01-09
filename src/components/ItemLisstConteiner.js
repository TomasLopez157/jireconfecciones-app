import React, {useState} from "react";
import ItemList from "./ItemList";
import carrito from "./ftl/img/Carrito3.jpg"





function ItemLisstConteiner() {
    const [state, setState] = useState("LOPEZ")
     const dataClick = () =>{
        setState("TOMAS"); }

    const datos = [
        {id : 1 , nombre : "Remera mangas corta", descripcion:"Talles disponibles del XS AL XXL", precio:"$1.000", img:"hhttps://needen-a1a5.kxcdn.com/files/model_specifications/2015/8/28/111465/111465_big.jpg?1506410989"},
]

    const getData = () =>{
        return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(datos);
                },2000)

    });
}
    getData().then((res)=> console.log(res));



        return(

            <>
            <ItemList tomas={datos}/>
            <h3 className="h3">{state}</h3>
            <div>
                <button onClick={dataClick}><img className="imgCarrito" src={carrito} alt="imgCarrito"/></button>
            </div>
            
            </>
        )

}
export default ItemLisstConteiner; 
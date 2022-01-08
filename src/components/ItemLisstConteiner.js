import React, {useState} from "react";
import ItemList from "./ItemList";
import carrito from "./ftl/img/Carrito3.jpg"



function ItemLisstConteiner(props) {
    const [state, setState] = useState("LOPEZ")
     const dataClick = (props) =>{
        setState("TOMAS"); }

    const datos =([
        {id : 1 , nombre : "will", lastName : "Robinsin", img:"https://m.media-amazon.com/images/I/61SA1kQNPbL._AC_SX679_.jpg"} ,

        {id : 2 , nombre : "Peni", lastName : "Robinsin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2bCJrKXkZSLy5afNVRCxhtwQzfjel1G5Cg4ahY2u55iWWgazAiKkaoNSM9LCqiAljuE&usqp=CAU"},

        {id : 3, nombre : "Ben", lastName : "Adler", img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSzd3Bg3Xe-Ho5EgwzKNnH9RqcKtymvkh0JhQuQbtOwhRndg7WGEPHoMdL343LU"},])

    const getData = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(datos);
        },2000);
    });
}
    getData().then((datos)=> {
            return datos;
        });


        return(

            <>

            <ItemList tomas={ItemList}/>
            <h3 className="h3">{state}</h3>
            <div>
                <button onClick={dataClick}><img className="imgCarrito" src={carrito} alt="imgCarrito"/></button>
            </div>
            </>
        )

}
export default ItemLisstConteiner; 
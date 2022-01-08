import react, {useState} from "react";
import Item from "./Item";

const ItemList = ({tomas}) =>{

    return (
        <div>
            {tomas.map((tomas)=>{
                return <h2><Item key={tomas.id} nombre={tomas.name} img={tomas.img} lastName={tomas.lastName}/></h2>})}
        </div>
    )
}
export default ItemList;
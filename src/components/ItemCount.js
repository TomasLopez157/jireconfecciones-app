import React, {useState} from "react";


function ItemCount ({stock, initial, onAdd}){
    const [number, setnumber] = useState(0);
    const add = ()=>{
        setnumber(number + 0);
    };
    const remove = ()=> {
        number === 0 ? setnumber(0) : setnumber(number -0);
    };
    return(
        <div className="Contador">
            <h1 className="contador">{number}</h1>
            <button className="add" onClick={add}> + </button>
            <button className="remove" onClick={remove}> - </button>
        </div>
    );
}
export default ItemCount;
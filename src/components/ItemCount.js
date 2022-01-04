import React, {useState} from "react";

function ItemCount(){

    const [number, setnumber] = useState(0);

    const add = ()=>{
        if( number < 10 ) setnumber(number + 1);
        
    };

    const remove = ()=> {
        number === 0 ? setnumber(0) : setnumber(number -1);
    };

    return(
        <div className="Contador">
            <h2 className="h1Products">PRODUCTOS UNIXES</h2>
            <h1 className="contador">{number}</h1>
            <button className="add" onClick={add}> UNO MAS </button>
            <button className="remove" onClick={remove}> UNO MENOS </button>
        </div>
    );
}

export default ItemCount;
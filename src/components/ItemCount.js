import React, {useState} from "react";

function ItemCount({initial , stock }){

    const [number, setNumber] = useState(initial);

    const add = ()=>{
       if (number < stock) setNumber(number + 1);
        
    };

    const remove = ()=> {
        number === 0 ? setNumber(0) : setNumber(number -1);
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
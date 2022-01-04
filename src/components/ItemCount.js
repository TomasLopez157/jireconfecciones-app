import React, {useState} from "react";

function ItemCount (){

    const [number, setnumber] = useState(0);

    const add = ()=>{
        setnumber(number + 1);
    };

    const remove = ()=> {
        number === 0 ? setnumber(0) : setnumber(number -1);
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
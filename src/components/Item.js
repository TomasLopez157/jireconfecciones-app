import React,{useState} from "react";


function Item(){

    const [state, setState] = useState([])

    const arrAux = new Promise((resolve, reject )=>{
        setTimeout(()=>{
            setState(([...state,1,2,3]))
            resolve(true)
        },2000)
    })
    arrAux.then((res)=>console.log(res))

    return(
        <div>{state.map((valorActual)=>{
            return valorActual.id ? <div> {valorActual.id} </div> :
            <div> {valorActual} </div>
        })}</div>
    )
}
export default Item;
import {useState, useEffect} from "react";


const ItemDetailConteiner = (props) => {


    const [ items, setItems] = useState([]);

    useEffect(()=>{
        console.log("me monte");
        setTimeout(()=>{
            db();
        },2000)
        
    },[]);
    const db = async()=>{
        const call = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=remeras");
        if(call.ok){
            const response = await call.json();
            setItems(response.results.filter(item => item.price === 3990));
        }else{
            call.catch((err)=>{
                throw new Error ("algo salio mal", err);
            });
        }
    };

    return(
        <div className="api">
            <h2>{props.greeting}</h2>
            {items.length && items.map((item)=>(
                <div key={item.id}>
                    <h1 className="ttile">{item.title}</h1>
                    <img src={item.thumbnail} alt="" style={{ width:200}}/>
                    <h2 className="ttile">PRECIO  ${item.price}</h2>
                </div>
            ))}
        </div>
        
        
    )
    

}
export default ItemDetailConteiner;
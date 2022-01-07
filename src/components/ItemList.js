import react, {useState} from "react";
import Item from "./Item";


const ItemList = () =>{
const[items,setItems] = useState([
    {
        id: 1, 
        name: "tomas", 
        lastNane:  "lopez", 
        age:19},

        
        {id: 2, 
            name: "juan", 
            lastNane:  "perez", 
            age:15}, 
            
            {
                id: 3, 
                name: "ricardo", 
                lastNane:  "lopez", 
                age:41}
            ])
            return (
                <div>
                    {ItemList.map((Item) =>{
                        return <Item key={Item.id} name={Item.name} lastNane={Item.lastNane} age={Item.age} />
                    })}
                </div>
            )
}
export default ItemList;
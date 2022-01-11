import Item from "./Item";

const ItemList = ({tomas}) =>{

    return (
        <div>
            {tomas.map((tomas)=>{
            return <Item key={tomas.id} tomas={tomas}/>
            }
            )}
            </div>
            
            
            
    )
}


export default ItemList;
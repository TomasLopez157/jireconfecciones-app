import Item from "./Item";

const ItemList = ({tomas}) =>{

    return (
        <div>
            {tomas.map((tomas, indice)=>{
            return <Item key={indice} tomas={tomas}/>
            }
            )}
            </div>
            
    )
}


export default ItemList;
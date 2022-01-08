import Item from "./Item";

const ItemList = ({tomas}) =>{

    return (
        <div>
            {tomas.map((tomas)=>{
            return <Item key={tomas.id} img={tomas.img} nombre={tomas.name} lastName={tomas.lastName}/>
            }
            )}
            </div>
    )
}
export default ItemList;
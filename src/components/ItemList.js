import Item from "./Item";

const ItemList = ({tomas}) =>{

    return (
        <div>
            {tomas.map((tomas)=>{
            return <h2><Item key={tomas.id} img={tomas.img} nombre={tomas.name} lastName={tomas.lastName}/></h2>
            }
            )}
            </div>
    )
}
export default ItemList;
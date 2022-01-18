import carWidget from "./carWidget";
import ItemList from "./ItemList";


function ItemLisstConteiner() {

    const datos =  [
        {id:1, nombre:"Remera mangas corta", descripcion:"Talles disponibles del XS AL XXL", precio:"$1.000"}, 
        {id:2, nombre:"Remera mangas larga", descripcion:"Talles disponibles del S al M", precio:"$1.200"},
        {id:3, nombre:"Remera musculosa", descripcion:"Talles disponibles del XS al L", precio:"$1.500"}
    ]
    
        
    const getData = (tomas) =>{
        return new Promise((resolve, reject)=>{
            resolve(tomas)
    });
}
    getData().then((res)=>{
        return res;
        });

        return(

            <>          
        <carWidget.ButtonSubmit></carWidget.ButtonSubmit>
        <ItemList tomas={datos}/>  
            </>
        )

}
export default ItemLisstConteiner; 
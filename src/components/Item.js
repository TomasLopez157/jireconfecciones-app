const Item = ({tomas}) => {
  return (
        <h3 className="productos1">
            <h2 className="itemss">{tomas.nombre}</h2> 
            <h2 className="itemss">{tomas.descripcion}</h2>
            <h2 className="itemss">{tomas.precio}</h2>
            <img className="imgProductos" src="https://www.casaespadas.com/post/2016-08-remera-manga-rangla-2.jpg" alt="RMR"/>

        </h3>

  );
  
}


export default  Item;


const Item = ({tomas}) => {
  return (
        <h3 className="productos1">
            <h2 className="itemss">{tomas.nombre}</h2> 
            <h2 className="itemss">{tomas.descripcion}</h2>
            <h2 className="itemss">{tomas.precio}</h2>
            <h2><a className="itemss" href="/productos">VER PRODUCTO</a></h2>
        </h3>       

  );
}

export default  Item;
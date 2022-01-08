const Item = ({tomas}) => {
  return (
        <h3 className="h3">
            <img src={tomas.img}  />
            <h2>{tomas.nombre}</h2>
            <h2>{tomas.lastName}</h2>
        </h3>
  );
};

export default  Item;
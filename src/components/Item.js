import React from "react";

const Item = ({tomas}) => {
  return (
        <h3>
            <img src={tomas.img} alt="profile-image" />
            <h2>{tomas.nombre}</h2>
            <h2 >{tomas.lastName}</h2>
        </h3>
  );
};

export default  Item;
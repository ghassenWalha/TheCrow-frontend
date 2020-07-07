import React from "react";

import "./cart-item.styles.scss";

const CardItem = ({imgURL,name,price,quantity}) => {
  return (
    <div className="cart-item">
        <img src={imgURL} alt="item"/>
    
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CardItem;

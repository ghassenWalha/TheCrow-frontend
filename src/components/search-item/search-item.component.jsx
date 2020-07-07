import React from "react";
import {Link} from "react-router-dom";
import "./search-item.styles.scss";

const SearchItem = ({imgURL,name,price,quantity,id,category}) => {
  return (
  
    <div className="search-item">
      
      <img src={imgURL} alt="item"/>
    
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
      

    </div>
  

  );
};

export default SearchItem;

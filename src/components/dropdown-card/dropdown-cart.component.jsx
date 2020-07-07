import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./dropdown-cart.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CardItem from "../card-item/card-item.component";
import ScrollableDiv from "../../utils/components/scrollable-div/scrollable-div.component";
import {loadProductsFromUserCard} from '../../store/card-slice/card';
const DropdownCart = ({ itemsList }) => {
  return (
    <div className="dropdown-cart">
   
     
      <ScrollableDiv>
      <div className="cart-items">
      {itemsList.map(({ id, ...otherProps }) => (
          <CardItem key={id} {...otherProps} />
        ))}
 </div>
      </ScrollableDiv>
     

      <Link to='/checkout'><CustomButton>CHECKOUT</CustomButton></Link>
    </div>
  );
};

 export default DropdownCart;

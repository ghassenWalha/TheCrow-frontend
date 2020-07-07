import React, { Component } from 'react';
import { connect } from "react-redux";

import CartIcon from "../card-icon/cart-icon.component";
import DropdownCart from "../dropdown-card/dropdown-cart.component";
import {loadProductsFromUserCard} from '../../store/card-slice/card';

class Card extends Component {
  
  componentDidMount()
{ 

  this.props.loadProducts();

}
  render() { 
    const { display, itemsList, itemCount } = this.props;
    return (
      <div>
        <CartIcon itemCount={itemCount} />
        {display && <DropdownCart itemsList={itemsList} />}
      </div>
    );
  };
}


const mapStateToProps = ({ card: { display, itemsList, itemCount } }) => ({
  display,
  itemsList,
  itemCount,
});
const mapDispachToProps = (dispatch) => ({
  loadProducts : ()=> dispatch(loadProductsFromUserCard()),
  
 });
export default connect(mapStateToProps,mapDispachToProps)(Card);

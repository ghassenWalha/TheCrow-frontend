import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {cardToggled} from '../../store/card-slice/card';


import './cart-icon.styles.scss';


const CartIcon = ({cardToggled,itemCount}) => {
    return ( 
        <div className="cart-icon" onClick={cardToggled}>
            <ShoppingIcon className='shopping-icon mb-2'/>
            <span className="item-count mb-1">{itemCount}</span>
        </div>
     );
} 

const mapDispachToProps = dispatch => ({
    cardToggled: () =>dispatch(cardToggled())
    });
  
 
export default connect(null,mapDispachToProps)(CartIcon);
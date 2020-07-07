import React from 'react'
import {connect} from 'react-redux';
import CheckoutTable from '../../components/checkout-table/checkout-table.component';
const CheckoutPage = ({itemsList}) => {
    return ( 
    <div>
         <CheckoutTable items={itemsList}/>
    </div>
   );
}
const mapStateToProps = ({ card: {  itemsList, itemCount } }) => ({
    
    itemsList,
    itemCount,
  });
export default connect(mapStateToProps,null)(CheckoutPage) ;
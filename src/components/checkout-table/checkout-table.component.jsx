import React, { Component } from "react";
import './checkout-table.styles.css';
const CheckoutTable = ({ items }) => {

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
            return( <tr>
                <td><img className="checkout-img" src={item.imgURL}  alt=""/></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>1</td>
            <td>${item.price}</td>
            <td>x</td>
           
              </tr>)
        })}
      </tbody>
    </table>
  );
};

export default CheckoutTable;
// 0': {
//     id: '5eaee417df31522b01647b26',
//     name: 'Floral T-shirt',
//     price: 20,
//     imgURL: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
//     quantity: 0
//   }
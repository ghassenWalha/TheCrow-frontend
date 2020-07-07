import React, { Component } from "react";
import { connect } from "react-redux";
import { ReactComponent as IconEmpty } from "../../assets/shopping-cart-empty.svg";
import { ReactComponent as Iconfull } from "../../assets/shopping-cart.svg";
import {  deleteProductFromUserCard, addProductToUserCard } from "../../store/card-slice/card";
import {getJwt} from "../../services/authService";


import "./shop-icon.styles.css";
class ShopIcon extends Component {
    state={

    };
  componentDidMount()
    {
      
     const itemInCard = this.props.itemsList.find(item => item._id === this.props.id ||  item.id === this.props.id);
     this.setState({added: itemInCard ? true: false});

  }

  handleShopIconToggled = (id, name, price, imgURL) => {
    const { addProduct, produceDeleted } = this.props;
    const { added } = this.state;
    const item = { _id:id, name, price, imgURL }
    !added ? addProduct(item) : produceDeleted(id);

    this.setState({ added: !added });
  };

  render() {
    const { added } = this.state;
    const { id, name, price, imgURL } = this.props;
    return (
      <div
        className="shop-icon-wrapper"
        onClick={() => {
          this.handleShopIconToggled(id, name, price, imgURL);
        }}
      >
        {added ?  <Iconfull /> : <IconEmpty />  } 
      </div>
    );
  }
}

const mapDispachToProps = (dispatch) => ({
 addProduct : (item)=> dispatch(addProductToUserCard(item)),
  produceDeleted: (id) => dispatch(deleteProductFromUserCard({id})),
});
const mapStateToProps = ({ card: { itemsList } }) => ({
   
    itemsList,
    
  });
export default connect(mapStateToProps, mapDispachToProps)(ShopIcon);

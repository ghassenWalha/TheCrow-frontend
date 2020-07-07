import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadProduct } from "../../store/product-slice/product";
import "./product.style.css";
import CustomText from "../../components/custom-text/custom-text.component";
import ShopIcon from "../../components/shop-icon/shop-icon.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {getJwt} from "../../services/authService";
class ProductPage extends Component {
  componentDidMount() {
    const { category, id } = this.props.match.params;

    this.props.loadProduct(category, id);
  }

  render() {
    const { _id:id, imgURL, name, price, description, tags } = this.props.item;
    // console.log(tags);
    return (
      <div className="container my-5 p-5">
        <div className="row">
          <div className="col-7">
            <img src={imgURL} alt="product" className="h-100 w-75" />
          </div>

          <div className="col-5">
            <div>
              <h3>{name}</h3>
              <div className="header-indicator"></div>
            </div>
            <CustomText
              maxLines="3"
              className="mt-3 position-relative d-inline-block"
            >
              {description ||
                `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum`}
            </CustomText>
            <div className=" position-relative mt-3 price-bar">
              $ {price}
              {getJwt() && <ShopIcon id={id} name={name} price={price} imgURL={imgURL} />}
            </div>
            <hr />
            <CustomButton className="w-75 m-auto">
              call for availablity
            </CustomButton>
            <hr className='w-75'/>
            <div className="tags">
            {tags
              ? tags.map((tag) => (
                  <h4>
                  <Link
                    key={tag}
                    to={`/categories/${tag}`}
                    className="badge badge-light"
                  >
                    {tag}
                  </Link>
                  </h4>
                ))
              : ""}
          </div>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product: { item } }) => ({
  item,
});
const mapDispachToProps = (dispatch) => ({
  loadProduct: (category, id) => dispatch(loadProduct(category, id)),
});

export default connect(mapStateToProps, mapDispachToProps)(ProductPage);

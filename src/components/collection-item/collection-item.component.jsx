import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
import ShopIcon from "../shop-icon/shop-icon.component";
import {getJwt} from "../../services/authService";

const CollectionItem = ({ id, name, price, imgURL, category }) => (
  <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12  ">
    <div className="collection-item m-1 w-100 ">
      <div className="w-75 h-100 m-4 mb-5">
        <Link key={id} to={`/${category}/${id}`}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${imgURL})`,
            }}
          />
        </Link>

        <div className="collection-footer">
          <span className="name">{name}</span>

          <span className="price">{price}</span>
          {getJwt() && <ShopIcon id={id} name={name} price={price} imgURL={imgURL} />}
        </div>
      </div>
    </div>
  </div>
);

export default CollectionItem;

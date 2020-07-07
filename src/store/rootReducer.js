import { combineReducers } from "redux";
import authReducer from "./auth-slice/auth";
import cardReducer from "./card-slice/card";
import productsReducer from"./products-slice/products";
import productReducer from"./product-slice/product";
import directoriesReducer from"./directories-slice/directories";
import previewsReducer from "./previews-slice/previews";
import searchReducer from "./search-slice/search";

export default combineReducers({
  card: cardReducer,
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
  directories: directoriesReducer,
  previews:previewsReducer,
  search:searchReducer
});
import config from "../../services/config.json";
import {
    createSlice
} from "@reduxjs/toolkit";
// import moment from "moment";
import {apiCallBegan} from "../middleware/apiActions";


const slice = createSlice({
    name: "product",
    initialState: {
        item:{
        },
        loading:false
    },

    reducers: {
        // action => action handler
        productRequested: (product) => {
          
            product.loading = true;
        },

        productReceived: (product, {payload:{data:item}}) => {
            product.item = item[0];
            product.loading= false;
            
        },

        productRequestFailed: (product) => {
            product.loading = false;        },

    }
});





export const loadProduct = (category,id) => (dispatch, getState) => {


  return dispatch(
    apiCallBegan({
      url: `${config.productsUrl}/${category}/${id}`,
      onStart: productRequested.type,
      onSuccess: productReceived.type,
      onError: productRequestFailed.type ,
      info: category+'/'+id
    })
  );
};





export const { 
    productReceived,
    productRequested,
    productRequestFailed
  } = slice.actions;

export default slice.reducer;
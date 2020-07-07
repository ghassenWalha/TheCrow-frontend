import config from "../../services/config.json";
import {
  createSlice
} from "@reduxjs/toolkit";
// import moment from "moment";
import { apiCallBegan } from "../middleware/apiActions";


const slice = createSlice({

  name: "products",
  initialState: {

    search: '',
    itemsList: [],
    lastFetch: null,
    loading: false
  },

  reducers: {
    // action => action handler
    productsRequested: (products) => {
      products.itemsList = [];
      products.loading = true;
    },

    productsReceived: (products, { payload: { data: itemsList, info: search } }) => {
      products.search = search;

      products.itemsList = itemsList;
      products.loading = false;
      products.lastFetch = Date.now();
    },

    productsRequestFailed: (products) => {
      products.loading = false;
    },


    sortProductsByDate: (products, { payload }) => {
      products.itemsList = products.itemsList.sort((a, b) => {
        if (a._id > b._id) return -1;
        if (b._id > a._id) return 1;
      });
      console.log('hey');
    },
    sortProductsByPricedescending: (products, { payload }) => {
      products.itemsList = products.itemsList.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (b.price > a.price) return 1;
      });
      console.log('hey');
    }

    , sortProductsByAscendingPrice: (products, { payload }) => {
      products.itemsList = products.itemsList.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1

      });
      console.log('hey');
    }

  }




});




export const loadProducts = (category, query) => (dispatch, getState) => {


  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url: `${config.productsUrl}/${category}?${query}`,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
      info: category
    })
  );
};





export const {
  productsReceived,
  productsRequested,
  productsRequestFailed,
  sortProductsByDate,
  sortProductsByPricedescending,
  sortProductsByAscendingPrice
} = slice.actions;

export default slice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import config from "../../services/config.json";
import { apiCallBegan } from "../middleware/apiActions";

const slice = createSlice({
  name: "card",
  initialState: {
    itemCount: 0,
    itemsList: [],
    display: false,
  },
  reducers: {
    // action => action handler
    produceReceived: (card, { payload: { data: itemsList, info: search } }) => {
      card.itemCount = itemsList.length;
      card.itemsList=itemsList;
    },

    produceAdded: (card, { payload }) => {
      card.itemCount++;
      const itemExist = card.itemsList.find((item) => item._id === payload.info.id);
      if (itemExist) {
        let index = 0;
        while (card.itemsList[index].id !== payload.id)
          index++;
        card.itemsList[index].quantity++;
      } else {
        card.itemsList.push({ ...payload.info, quantity: 1 });
      }




    },
    produceDeleted: (card, { payload }) => {
      card.itemCount--;
      const newItemList = card.itemsList.filter((item) => item._id !== payload.info._id);
      console.log(newItemList);
      card.itemsList = newItemList;
    },
    cardToggled: (card) => {
      card.display = !card.display;
    }
  }
});

export const addProductToUserCard = (item) => (dispatch, getState) => {


  return dispatch(
    apiCallBegan({
      url: `${config.cardUrl}/${item._id}`,
      onStart: produceAdded.type,
      // onSuccess: productReceived.type,
      onError: produceDeleted.type,
      method: 'put',
      info: item
    })
  );
};

export const deleteProductFromUserCard = (item) => (dispatch, getState) => {


  return dispatch(
    apiCallBegan({
      url: `${config.cardUrl}/${item._id}`,
      onStart: produceDeleted.type,
      // onSuccess: productReceived.type,
      onError: produceAdded.type,
      method: 'delete',
      info: item
    })
  );
};

export const loadProductsFromUserCard = () => (dispatch, getState) => {

  return dispatch(
    apiCallBegan({
      url: `${config.cardUrl}`,
      onSuccess: produceReceived.type,
      method:'get'
     
    })
  );
};



export const { userSet, cardToggled, produceAdded, produceDeleted, produceReceived } = slice.actions;

export default slice.reducer;
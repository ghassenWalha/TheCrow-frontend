import config from "../../services/config.json";
import {
    createSlice
} from "@reduxjs/toolkit";
import {apiCallBegan} from "../middleware/apiActions";


const slice = createSlice({
    name: "search",
    initialState: {
         
            searchQuery:'',
            itemsList: [],
            loading: false
           },

    reducers: {
      cleanUpItemsList: (search,action)=>{
        search.itemsList=[];
      },
        searchRequested: (search) => {
          search.itemsList=[];
            search.loading = true;
        },

        searchReceived: (search, {payload:{data:itemsList,info:searchQuery}}) => {
            search.searchQuery=searchQuery;
       
            search.itemsList = itemsList;
            search.loading= false;
            search.lastFetch = Date.now();
        },

        searchRequestFailed: (search) => {
            search.loading = false;        },

    }
});





export const loadSearch = (searchValue) => (dispatch, getState) => {
  const query= `search=${searchValue}`;
 
  return dispatch(
    apiCallBegan({
      url: `${config.productsUrl}?${query}`,
      onStart: searchRequested.type,
      onSuccess: searchReceived.type,
      onError: searchRequestFailed.type ,
      info: searchValue
    })
  );
};





export const { 
    searchReceived,
    searchRequested,
    searchRequestFailed,
    cleanUpItemsList
  } = slice.actions;

export default slice.reducer;
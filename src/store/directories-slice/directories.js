import {
    createSlice
} from "@reduxjs/toolkit";
import moment from "moment";
import {apiCallBegan} from "../middleware/apiActions";
import {directoriesUrl} from "../../services/config.json";


const slice = createSlice({
    name: "directories",
    initialState: {directoriesList:[],
      lastFetch:null
    },

    reducers: {
        // action => action handler
   

        directoriesReceived: (directory, {payload:{data:itemsList}}) => {
          
            directory.directoriesList = itemsList;
            directory.lastFetch=Date.now();
            
        },

     

    }
});





export const loadDirectories = () => (dispatch, getState) => {
  const { lastFetch } = getState().directories;

  const diffInDays = moment().diff(moment(lastFetch),"days");
  if (diffInDays < 1) return;

  return dispatch(
    apiCallBegan({
      url:directoriesUrl,
      // onStart: productsRequested.type,
      onSuccess: directoriesReceived.type,
      // onError: productsRequestFailed.type ,
    })
  );
};

export const { 
    directoriesReceived
   
  } = slice.actions;

export default slice.reducer;
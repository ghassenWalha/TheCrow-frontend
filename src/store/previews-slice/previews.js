import {
    createSlice
} from "@reduxjs/toolkit";
import moment from "moment";
import config from "../../services/config.json";
import { apiCallBegan } from "../middleware/apiActions";
import axios from 'axios';


const slice = createSlice({
    name: "previews",
    initialState: {

        previewsList: [],
        lastFetch: null

    },
    reducers: {
        // action => action handler
        productPreviewsRequested: (previews, { payload: { info } }) => {
            const preview = {
                category: info.category,
                itemsList: [],
                loading: true
            };


            previews.previewsList.push(preview);
        },

        productPreviewsReceived: (previews, { payload: { info, data: itemsList } }) => {
            const index = findPreviewIndex(previews.previewsList, info.category);
            previews.previewsList[index].itemsList = itemsList;
            previews.previewsList[index].loading = false;
            previews.lastFetch = Date.now();
        },

        productPreviewsRequestFailed: (previews, { payload: { info } }) => {
            previews[findPreviewIndex(previews, info.category)].loading = false;
        },

    }
});

const findPreviewIndex = (previewsList, category) => previewsList.findIndex((preview) => preview.category === category);



const loadPreview = (category) => (dispatch, getState) => {
    const {previews:{lastFetch}} =  getState();
 
    

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < 10) return;
   

    return dispatch(
        apiCallBegan({
            url: `${config.productsUrl}/${category}`,
            onStart: productPreviewsRequested.type,
            onSuccess: productPreviewsReceived.type,
            onError: productPreviewsRequestFailed.type,
            info: { category }
        })
    );
};






export const loadPreviews = () => (dispatch, getState) => {
    axios.get(config.apiUrl+config.directoriesUrl)
    .then((response)=> response.data.map(({title})=>  dispatch(loadPreview(title))) )

};







export const {
    productPreviewsReceived,
    productPreviewsRequested,
    productPreviewsRequestFailed
} = slice.actions;

export default slice.reducer;
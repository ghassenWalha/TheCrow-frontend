import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    // action => action handler
    userSet: (auth, action) => {
    auth.currentUser = action.payload ;

    }
  }
});

export const {  userSet } = slice.actions;

export default slice.reducer;
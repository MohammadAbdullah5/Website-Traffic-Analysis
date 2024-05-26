import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    website:[],
    transactions:[]
}


export const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    getAllData: (state) => {},
  }
});

export const {getAllData} = websiteSlice.actions;
export default websiteSlice.reducer;
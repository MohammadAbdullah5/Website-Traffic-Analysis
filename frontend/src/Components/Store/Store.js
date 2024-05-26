import {configureStore} from "@reduxjs/toolkit"
import { websiteSlice } from './Reducer'
import {apiSlice} from './apiSlice'


export const store = configureStore({
    reducer:{
        website : websiteSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    },

    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)



    
})
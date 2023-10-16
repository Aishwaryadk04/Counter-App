import { configureStore } from "@reduxjs/toolkit"
import couterSlice from "./couterSlice";

export const store = configureStore({
    reducer:{
        //reducers should be key-value pair
        counter:couterSlice
    }
})
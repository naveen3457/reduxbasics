import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";

export const Store =  configureStore({
    reducer : {
        counter:counterSlice.reducer,
    }
})

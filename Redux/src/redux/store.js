import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./features/counterSlice";

export const store = configureStore({
    reducer: {
        counter: couterReducer
    }
})
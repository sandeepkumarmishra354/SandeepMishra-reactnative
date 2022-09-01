import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product";
import categoryReducer from "./slice/category";

export const appStore = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer
    }
});

export type AppRootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch;
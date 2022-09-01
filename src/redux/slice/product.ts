import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/products";
import { fetchProductDetail, fetchProductList } from "../thunk/product";
import { ToastAndroid } from "react-native";

const initialState: ProductState = {
    products: [],
    product: null,
    fetchingList: false,
    fetchingDetail: false
};

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        // this will be used to set product detail as null,
        // while going back from full detail screen.
        setProductAsNull: (state) => {
            state.product = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProductList.pending, (state) => {
            state.fetchingList = true;
        });
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            state.fetchingList = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProductList.rejected, (state, action) => {
            state.fetchingList = false;
            const message = action.payload as string;
            ToastAndroid.show(message, ToastAndroid.SHORT);
        });

        builder.addCase(fetchProductDetail.pending, (state) => {
            state.fetchingDetail = true;
        });
        builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
            state.fetchingDetail = false;
            state.product = action.payload;
        });
        builder.addCase(fetchProductDetail.rejected, (state, action) => {
            state.fetchingDetail = false;
            const message = action.payload as string;
            ToastAndroid.show(message, ToastAndroid.SHORT);
        });
    }
});

export const productAction = {
    ...productReducer.actions,
    fetchProductDetail,
    fetchProductList
};

export default productReducer.reducer;
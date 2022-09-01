import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/products";
import { fetchProductDetail, fetchProductList, createProduct } from "../thunk/product";
import { ToastAndroid } from "react-native";

const initialState: ProductState = {
    products: [],
    product: null,
    fetchingList: false,
    fetchingDetail: false,
    creating: false
};

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        // this will be used to set product detail as null,
        // while going back from full detail screen.
        setProductAsNull: (state) => {
            state.product = null;
            state.fetchingDetail = false;
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

        builder.addCase(createProduct.pending, (state) => {
            state.creating = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.creating = false;
            state.products.unshift(action.payload);
            ToastAndroid.show(`New product ${action.payload.name} added successfully.`, ToastAndroid.SHORT);
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.creating = false;
            const message = action.payload as string;
            ToastAndroid.show(message, ToastAndroid.SHORT);
        });
    }
});

export const productAction = {
    ...productReducer.actions,
    fetchProductDetail,
    fetchProductList,
    createProduct
};

export default productReducer.reducer;
import { createAsyncThunk } from "@reduxjs/toolkit";
import ServiceAPI from "../../service/service-api";

export const fetchProductList = createAsyncThunk("fetch/products", async (_, thunkAPI) => {
    try {
        const { status, data } = await ServiceAPI.instance.get("/api/products");
        if (status !== 200)
            throw new Error(data.message ?? "unable to fetch product list.");
        return data.products;
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const fetchProductDetail = createAsyncThunk("fetch/product-detail", async (id: string, thunkAPI) => {
    try {
        const { status, data } = await ServiceAPI.instance.get(`/api/products/${id}`);
        if (status !== 200)
            throw new Error(data.message ?? "unable to fetch product list.");
        return data.product;
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
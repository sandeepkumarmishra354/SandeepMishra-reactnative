import { createAsyncThunk } from "@reduxjs/toolkit";
import ServiceAPI from "../../service/service-api";
import { IProductCreate } from "../types/products";

const verifyNewProduct = (newProduct: Partial<IProductCreate>) => {
    if (!newProduct.name)
        throw new Error("product title is required.");
    if (!newProduct.price || Number.isNaN(newProduct.price))
        throw new Error("valid product price is required.");
    if (!newProduct.category)
        throw new Error("please select product category.");
    if (!newProduct.description)
        throw new Error("product desciption is required.");
    if (!newProduct.developerEmail)
        throw new Error("developer email is required.");
    if (!newProduct.avatar)
        throw new Error("please enter product image url.");
}

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

export const createProduct = createAsyncThunk("fetch/product-create", async (newProduct: Partial<IProductCreate>, thunkAPI) => {
    try {
        verifyNewProduct(newProduct);
        const { status, data } = await ServiceAPI.instance.post("/api/products", newProduct);
        if (status !== 201)
            throw new Error(data.message ?? "unable to fetch product list.");
        return data.product;
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
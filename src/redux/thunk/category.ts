import { createAsyncThunk } from "@reduxjs/toolkit";
import ServiceAPI from "../../service/service-api";

export const fetchCategories = createAsyncThunk("fetch/categories", async (_, thunkAPI) => {
    try {
        const { status, data } = await ServiceAPI.instance.get("/api/categories");
        if (status !== 200)
            throw new Error(data.message ?? "unable to fetch category.");
        return data.categories;
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
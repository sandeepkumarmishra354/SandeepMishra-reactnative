import { createSlice } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
import { fetchCategories } from "../thunk/category";
import { CategoryState } from "../types/category";

const initialState: CategoryState = {
    categories: [],
    fetching: false
};

const categoryReducer = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.fetching = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.fetching = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.fetching = false;
            const message = action.payload as string;
            ToastAndroid.show(message, ToastAndroid.SHORT);
        });
    }
});

export const categoryAction = {
    ...categoryReducer.actions,
    fetchCategories
};

export default categoryReducer.reducer;
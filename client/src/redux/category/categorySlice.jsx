import { createSlice } from "@reduxjs/toolkit";

const initState = {
    items: [],
    item : {},
    loading: false,
    Error: "",
};

const categorySlice = createSlice({
    name: 'category',
    initialState: initState,
    reducers: {
        FETCH_REQUEST(state) {
            state.items = [];
            state.loading = true;
        },
        FETCH_SUCCESS(state, action) {
            state.items = action.payload;
            state.loading = false;
        },
        FETCH_FAIL(state) {
            state.items = [];
            state.loading = false;
        },
        FETCH_CATEGORY_REQUEST(state) {
            state.item = {};
            state.loading = true;
        },
        FETCH_CATEGORY_SUCCESS(state, action) {
            state.item = action.payload;
            state.loading = false;
        },
        FETCH_CATEGORY_FAIL(state) {
            state.item = {};
            state.loading = false;
        },
    }
});

export const categoryActions = categorySlice.actions
export default categorySlice;
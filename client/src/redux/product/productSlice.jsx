import { createSlice } from "@reduxjs/toolkit";

const initState = {
    items: [],
    loading: false,
    Error: "",
};

const productSlice = createSlice({
    name: 'products',
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
        }
    }
});

export const productActions = productSlice.actions
export default productSlice;
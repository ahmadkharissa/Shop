import { createSlice } from "@reduxjs/toolkit";

const initState = {
    items: [],
    loading: false,
    Error: "",
};

const notificationSlice = createSlice({
    name: 'notifications',
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

export const notificationActions = notificationSlice.actions
export default notificationSlice;
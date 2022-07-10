import { configureStore } from "@reduxjs/toolkit";

//redux
import categorySlice from "./category/categorySlice";
import notificationSlice from "./notification/notificationSlice";
import productSlice from "./product/productSlice";
import { userReducer } from "./user/userReducer";

const store = configureStore({
    reducer: {
        users: userReducer,
        products: productSlice.reducer,
        categories: categorySlice.reducer,
        notifications: notificationSlice.reducer
    }
});

export default store;
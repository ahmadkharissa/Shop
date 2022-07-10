import axios from "axios";

//redux
import { categoryActions } from "./categorySlice";

export const getCategories = () => async (dispatch) => {
    dispatch(categoryActions.FETCH_REQUEST());
    try {
        const res = await axios.get(process.env.REACT_APP_API + '/category');
        dispatch(categoryActions.FETCH_SUCCESS(res.data),);
    } catch (error) {
        dispatch(categoryActions.FETCH_FAIL());
    }
};

export const getCategory = (id) => async (dispatch) => {
    dispatch(categoryActions.FETCH_CATEGORY_REQUEST());
    try {
        const res = await axios.get(process.env.REACT_APP_API + `/category/${id}`);
        dispatch(categoryActions.FETCH_CATEGORY_SUCCESS(res.data),);
    } catch (error) {
        dispatch(categoryActions.FETCH_CATEGORY_FAIL());
    }
};
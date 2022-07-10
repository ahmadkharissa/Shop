import axios from "axios";

//redux
import { productActions } from "./productSlice";

export const getProducts = () => async (dispatch) => {
    dispatch(productActions.FETCH_REQUEST());
    try {
        const res = await axios.get(process.env.REACT_APP_API + '/product');
        dispatch(productActions.FETCH_SUCCESS(res.data),);
    } catch (error) {
        dispatch(productActions.FETCH_FAIL());
    }
};

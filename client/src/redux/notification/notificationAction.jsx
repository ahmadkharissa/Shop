import axios from "axios";

//redux
import { notificationActions } from "./notificationSlice";

export const getNotifications = () => async (dispatch) => {
    dispatch(notificationActions.FETCH_REQUEST());
    try {
        const res = await axios.get(process.env.REACT_APP_API + '/notification');
        dispatch(notificationActions.FETCH_SUCCESS(res.data),);
    } catch (error) {
        dispatch(notificationActions.FETCH_FAIL());
    }
};
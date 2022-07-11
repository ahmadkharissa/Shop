import axios from "axios";

//utils
import getData from "../../utils/getData";

//redux
import { FORGET, FORGET_FAIL, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./userTypes";

export const login = (data) => async (dispatch) => {
  var user = {};
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(process.env.REACT_APP_API + '/login', data);
    localStorage.setItem("token", res.data.token);
    getData(res.data.token).then(response => {
      user = response;
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const signup = (data) => async (dispatch) => {
  var user = {};
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const res = await axios.post(process.env.REACT_APP_API + '/signup', data);
    localStorage.setItem("token", res.data.token);
    getData(res.data.token).then(response => {
      user = response;
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    });
  } catch (error) {
    dispatch({ type: SIGNUP_FAIL, payload: error.response.data.message });
  }
};

export const forgetPassword = (data) => async (dispatch) => {
  try {
    const res = await axios.post(process.env.REACT_APP_API + '/forgetPassword', { email: data });
    localStorage.removeItem('token')
    dispatch({ type: FORGET })
  } catch (error) {
    dispatch({ type: FORGET_FAIL, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('token')
};

export const addToWishlist = (id) => async (dispatch) => {
  await axios.post(process.env.REACT_APP_API + '/user/addToWishlist', { product: id })

  getData(localStorage.getItem('token')).then(response => {
    var userData = response;
    dispatch({ type: LOGIN_SUCCESS, payload: userData });
    return true;
  });
};

export const removeFromWishList = (id) => async (dispatch) => {
  await axios.post(process.env.REACT_APP_API + '/user/removeFromWishList', { product: id })

  getData(localStorage.getItem('token')).then(response => {
    var userData = response;
    dispatch({ type: LOGIN_SUCCESS, payload: userData });
    return true;
  });
};
import jwt_decode from "jwt-decode";

//utils
import setAuthToken from "./setAuthToken";

//redux
import { LOGIN_SUCCESS } from "../redux/user/userTypes";
import getData from "./getData";

const isAuth = async (dispatch) => {
  const token = localStorage.token;
  var user = {};

  if (token) {
    const decod = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decod.exp < currentTime) {
      setAuthToken(false);
      return false;
    }
    getData(token).then(response => {
      user = response;
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      return true;
    });
  }

  return false;
};

export default isAuth;

//redux
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, LOGOUT, FORGET, FORGET_FAIL } from "./userTypes";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  errorLogin: "",
  errorSignup: "",
  responseLogin: "",
  responseSignup: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        errorLogin: "",
        errorSignup: "",
        responseLogin: "",
        responseSignup: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        errorLogin: "",
        errorSignup: "",
        responseLogin: "",
        responseSignup: ""
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: {},
        isAuthenticated: false,
        errorLogin: action.payload,
        errorSignup: "",
        responseLogin: "",
        responseSignup: ""
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        errorLogin: "",
        errorSignup: "",
        responseLogin: "",
        responseSignup: ""
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        errorLogin: "",
        errorSignup: "",
        responseLogin: "",
        responseSignup: action.payload
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        errorLogin: "",
        errorSignup: action.payload,
        responseLogin: "",
        responseSignup: ""
      };

    case FORGET:
      return {
        user: {},
        isAuthenticated: false,
        loading: false,
        errorLogin: "",
        errorSignup: "",
        responseLogin: "New password has been send",
        responseSignup: ""
      }

    case FORGET_FAIL:
      return {
        user: {},
        isAuthenticated: false,
        loading: false,
        errorLogin: action.payload,
        errorSignup: "",
        responseLogin: "",
        responseSignup: ""
      }

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

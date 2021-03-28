import {
  AUTH_FAIL,
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("_token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("_token", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_FAIL:
      localStorage.removeItem("_token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;

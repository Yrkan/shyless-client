import axios from "axios";
import {
  AUTH_FAIL,
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
} from "./types";
import { setAlert } from "./alert";
import { setAuthToken } from "../utils/requests";

// load user
export const loadUser = () => async (dispatch) => {
  if (localStorage._token) {
    setAuthToken(localStorage._token);
  }

  try {
    const res = await axios.get("/api/v1/auth/user");

    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_FAIL,
    });
  }
};

// Register a user
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/api/v1/users/register", body, config);
    dispatch(setAlert(res.data.msg, "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "error")));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// login user
export const login = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post("/api/v1/auth/user/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "error")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

import axios from "axios";
import { REGISTER_FAIL } from "./types";
import { setAlert } from "./alert";

// register a user
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

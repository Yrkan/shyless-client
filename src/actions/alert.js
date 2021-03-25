import { v4 as uuidv4 } from "uuid";
import { SET_ALERT } from "./types";

export const setAlert = (msg, alertType) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { id: uuidv4(), msg, alertType },
  });
};

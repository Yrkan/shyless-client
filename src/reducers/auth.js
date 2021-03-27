import { REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("_token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_FAIL:
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

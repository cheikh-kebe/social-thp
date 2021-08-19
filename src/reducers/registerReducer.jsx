import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../types";

const initialstate = {
  loading: false,
  username: "",
  email: "",
  password: "",
  error: "",
};

export const registerReducer = (state = initialstate, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: (state.loading = true),
      };
    case REGISTER_SUCCESS:
      return {
        username: action.username,
        email: action.email,
        password: action.password,
      };
    case REGISTER_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

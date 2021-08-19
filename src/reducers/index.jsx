import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";

export const allReducers = combineReducers({
  register: registerReducer
})
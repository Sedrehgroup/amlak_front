import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./reducers/login";
import user from "./reducers/user";

const reducer = combineReducers({
  login,
  user,
});
const store = configureStore({ reducer });

export default store;

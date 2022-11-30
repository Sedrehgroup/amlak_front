import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./reducers/login";
import user from "./reducers/user";
import loginMainProperty from "./reducers/loginMainProperty";
import userProperty from "./reducers/userProperty";

const reducer = combineReducers({
  login,
  user,
  loginMainProperty,
  userProperty,
});
const store = configureStore({ reducer });

export default store;

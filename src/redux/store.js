import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import login from "./reducers/login";

const reducer = combineReducers({
  login,
});
const store = configureStore({ reducer });

export default store;

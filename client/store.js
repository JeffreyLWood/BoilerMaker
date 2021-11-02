import { createStore, applyMiddleware } from "redux";
import authReducer from "./authenticate";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  authReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;

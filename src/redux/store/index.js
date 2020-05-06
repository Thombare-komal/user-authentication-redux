import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/index";

const initialState = {};
let middleware = "";
  middleware = applyMiddleware(
    thunk
  )
const store = createStore(
    userReducer,
  initialState,
  compose(middleware)
);

export default store;

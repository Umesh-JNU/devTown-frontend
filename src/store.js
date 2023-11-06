import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/product";

const rootReducer = combineReducers({
  products: productsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

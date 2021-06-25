import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Reducer from "../Reducers";

const MiddleWares = [thunk, logger];

const Store = createStore(Reducer, applyMiddleware(...MiddleWares));

export default Store;

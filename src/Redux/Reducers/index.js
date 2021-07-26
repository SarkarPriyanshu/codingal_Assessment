import { combineReducers } from "redux";
import BasicHandler from "../Reducers/BasicHandlers.Reducer/BasicHandlers.Reducer";

const Reducer = combineReducers({
  BasicHandler: BasicHandler,
});

export default Reducer;

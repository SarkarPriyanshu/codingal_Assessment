import { combineReducers } from "redux";
import fetchData_Reducer from "./fetchdata.reducer";

const Reducer = combineReducers({ data: fetchData_Reducer });

export default Reducer;

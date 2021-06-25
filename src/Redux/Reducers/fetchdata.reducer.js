import { defaultState } from "../defaultState";

const fetchData_Reducer = (initialState = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...initialState,
        users: action.payload,
        loading: false,
        selectedUser: action.payload[0],
      };

    case "HANDLE_ERROR":
      return { ...initialState, error: action.payload };

    case "SELECT_USER":
      return { ...initialState, selectedUser: action.payload };

    default:
      return initialState;
  }
};

export default fetchData_Reducer;

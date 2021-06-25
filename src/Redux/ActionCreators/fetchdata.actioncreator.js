import randomuser from "../../APIs/randomuser.api";

const FetchData_ActionCreator = () => {
  //Using Thunk fetch data and send response using action
  return async (dispatch) => {
    try {
      let response = await randomuser.get(
        "/?inc=gender,name,nat,location,picture,email&results=20"
      );
      response = response.data;
      dispatch({ type: "FETCH_DATA", payload: response.results });
    } catch (error) {
      dispatch({ type: "HANDLE_ERROR", payload: error.message });
    }
  };
};

export default FetchData_ActionCreator;

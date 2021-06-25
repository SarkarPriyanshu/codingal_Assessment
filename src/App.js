import React from "react";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Users from "./Components/Users";
import { connect } from "react-redux";
import FetchData_ActionCreator from "./Redux/ActionCreators/fetchdata.actioncreator";
import SelectUser_ActionCreator from "./Redux/ActionCreators/selectuser.actioncreator";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /**
     * Fetch data using Api and store that data into store
     */
    this.props.fetchData();
  }

  render() {
    //props destructring
    const { users, loading, error, selectedUser, selectUser } = this.props;

    return (
      <div className="App">
        <Header />

        {error ? (
          // Error handler
          <>
            <div className="error-container">
              <h1>Something went wrong !!</h1>
            </div>
          </>
        ) : loading ? (
          //Loading status
          <>
            <div className="loading-container">
              <h1 className="loading">Loading...</h1>
            </div>
          </>
        ) : (
          //If evering goes fine returns components
          <>
            {/* User detail component */}
            <Details selectedUser={selectedUser && selectedUser} />
            {/* Users Component */}
            <Users
              users={users && users}
              selectedUser={selectedUser && selectedUser}
              selectUser={selectUser && selectUser}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // Take the state from redux store and send as props to component
  return {
    users: state.data.users,
    loading: state.data.loading,
    error: state.data.error,
    selectedUser: state.data.selectedUser,
  };
};

export default connect(mapStateToProps, {
  fetchData: FetchData_ActionCreator,
  selectUser: SelectUser_ActionCreator,
})(App);

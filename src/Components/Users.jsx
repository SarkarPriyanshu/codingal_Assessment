import React from "react";
import { connect } from "react-redux";

function Users(props) {
  const { users, selectUser, selectedUser } = props;
  return (
    <>
      <div className="users-container">
        {users &&
          users.map((user, index) => {
            const { gender, nat, email, name } = user;
            return (
              <>
                <div
                  style={
                    selectedUser.name.first === user.name.first
                      ? { background: "#A259FF", color: "#ffffff" }
                      : {}
                  }
                  key={index}
                  className="user"
                  onClick={() => selectUser(user)}
                >
                  <p className="user-gender">{`${gender && gender} . ${
                    nat && nat
                  }`}</p>
                  <h2>{`${name.title}. ${name.first} ${name.last}`}</h2>
                  <p
                    style={
                      selectedUser.name.first === user.name.first
                        ? { color: "#fff" }
                        : { color: "#E16259" }
                    }
                  >
                    {email}
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default connect(null)(Users);

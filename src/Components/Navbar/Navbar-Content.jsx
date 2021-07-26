import React from "react";
import { connect } from "react-redux";
import { HandleClose } from "../../Redux/ActionCreators/BasicActions.Creators/HandleClose.ActionCreator";
import Timer from "./Timer";

function Navbar_Content(props) {
  const {
    handler: { close, hamburger },
    closeHandler,
  } = props;

  // Helper function
  const HandleCLick = () => {
    closeHandler();
  };

  return (
    <>
      <div
        style={hamburger ? { visibility: "visible" } : { visibility: "hidden" }}
        className="navbar-content"
      >
        <div className="content">
          <div className="content-main">
            <p>Trail Lesson [Grade 1-3]</p>
          </div>
          <div className="content-timer">
            <Timer />
          </div>
        </div>
        <div className="btn-container">
          <button onClick={() => HandleCLick()} type="button" className="btn">
            End Class
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    handler: state.BasicHandler.handlers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeHandler: () => dispatch(HandleClose()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar_Content);

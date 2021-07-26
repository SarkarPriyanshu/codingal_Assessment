import React from "react";
import { connect } from "react-redux";
import { HandleOtherReason } from "../../Redux/ActionCreators/BasicActions.Creators/HandleOtherReason.ActionCreator";
import { HandleDisableOptions } from "../../Redux/ActionCreators/BasicActions.Creators/handleDispableOption.ActionCreator";

function Other_Reason(props) {
  const {
    setValue,
    handler: { accordian, textarea },
    handleTextarea,
    disableOtherOptions,
  } = props;

  // Helper functions
  const HandleChange = (e) => {
    if (e.target.value === "Other reason") {
      handleTextarea();
      return;
    }

    disableOtherOptions();
    setValue(e.target.value);
  };

  return (
    <>
      <div
        style={accordian ? { display: "block" } : { display: "none" }}
        className="interruption-reason-container"
      >
        <label className="container">
          <input
            type="radio"
            value="Student didn't show up for the class."
            name="interruption-reason"
            onChange={(e) => HandleChange(e)}
          />
          <span className="checkmark"></span>
          Student didn't show up for the class.
        </label>
        <label className="container">
          <input
            type="radio"
            value="Student didn't show any interest."
            name="interruption-reason"
            onChange={(e) => HandleChange(e)}
          />
          <span className="checkmark"></span>
          Student didn't show any interest.
        </label>
        <label className="container">
          <input
            type="radio"
            value="Student got disconnected."
            name="interruption-reason"
            onChange={(e) => HandleChange(e)}
          />
          <span className="checkmark"></span>
          Student got disconnected.
        </label>
        <label className="container">
          <input
            type="radio"
            value="I got disconnected."
            name="interruption-reason"
            onChange={(e) => HandleChange(e)}
          />
          <span className="checkmark"></span>I got disconnected.
        </label>
        <label className="container">
          <input
            type="radio"
            value="Other reason"
            onChange={(e) => HandleChange(e)}
            name="interruption-reason"
          />
          <span className="checkmark"></span>
          Other reason
        </label>

        <div
          style={textarea ? { display: "block" } : { display: "none" }}
          className="type-reason-here-container"
        >
          <textarea
            placeholder="Type here"
            name="other-reason"
            id="other-reason"
            cols="35"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
}

// Mapping the redux default state to props
const mapStateToProps = (state) => {
  return {
    handler: state.BasicHandler.handlers,
  };
};

// Dispatcher that take the action creator and dispatch it to reducers
const mapDispatchToProps = (dispatch) => {
  return {
    handleTextarea: () => dispatch(HandleOtherReason()),
    disableOtherOptions: () => dispatch(HandleDisableOptions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Other_Reason);

import React, { useState } from "react";
import Other_Reason from "./Other_Reason";
import { HandleClose } from "../../Redux/ActionCreators/BasicActions.Creators/HandleClose.ActionCreator";
import { HandleAccordian } from "../../Redux/ActionCreators/BasicActions.Creators/HandleAccordian.ActionCreator";
import { HandleDisableOptions } from "../../Redux/ActionCreators/BasicActions.Creators/handleDispableOption.ActionCreator";
import { EndClass } from "../../Redux/ActionCreators/MainActions.Creators/EndClass.ActionCreator";

import { connect } from "react-redux";

function Model(props) {
  // useState hook
  const [value, setValue] = useState("");

  //Store to props
  const {
    handler: { close },
    closeHandler,
    accordianHandler,
    disableOtherOptions,
    EndClass,
  } = props;

  // Helper functions
  const HandleClose = () => {
    closeHandler();
  };

  const HandleChange = (e) => {
    if (e.target.value === "class interrupted") {
      e.target.checked = "checked";
      accordianHandler();
    }

    if (e.target.value === "Completed") {
      e.target.checked = "checked";
      disableOtherOptions();
      setValue(e.target.value);
    }
  };

  const endClassHandle = () => {
    EndClass(value);
    disableOtherOptions();
  };

  return (
    <>
      <div
        className="model-outer-container"
        style={close ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        <div className="end-class-model">
          <button onClick={() => HandleClose()} className="btn-close">
            X
          </button>
          <h2>Select a reason to end class</h2>
          <div className="model-radio-section">
            <label class="container">
              <input
                name="reason"
                type="radio"
                onChange={(e) => HandleChange(e)}
                value="Completed"
              />
              <span class="checkmark"></span>
              Class completed
            </label>
            <label class="container">
              <input
                name="reason"
                type="radio"
                value="class interrupted"
                onChange={(e) => HandleChange(e)}
              />
              <span class="checkmark"></span>
              Class intrrupted/aborted
            </label>
            {/* Interruption reason accordian */}
            <Other_Reason setValue={setValue} />
            {/* Buttons */}
          </div>
          <div className="model-btn-container">
            <button onClick={() => endClassHandle()} className="btn end">
              End CLass
            </button>
            <button onClick={() => closeHandler()} className="btn-cancel">
              Cancel
            </button>
          </div>
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
    accordianHandler: () => dispatch(HandleAccordian()),
    disableOtherOptions: () => dispatch(HandleDisableOptions()),
    EndClass: (value) => dispatch(EndClass(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);

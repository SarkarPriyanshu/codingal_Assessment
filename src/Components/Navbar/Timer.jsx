import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StartTimer } from "../../Redux/ActionCreators/MainActions.Creators/StartTimer.ActionCreator";

const Timer = (props) => {
  // deconstructing the props that are coming from redux store
  const {
    handler: { timer, isTimerOn },
    startTime,
  } = props;

  // Side Effect
  useEffect(() => {
    startTime();
  }, [isTimerOn]);

  return (
    <>
      <p>
        <span>{timer.m >= 10 ? timer.m : "0" + timer.m}</span> &nbsp;:&nbsp;
        <span>{timer.s >= 10 ? timer.s : "0" + timer.s}</span>
      </p>
    </>
  );
};

// Mapping the redux default state to props
const mapStateToProps = (state) => {
  return {
    handler: state.BasicHandler,
  };
};

// Dispatcher that take the action creator and dispatch it to reducers
const mapDispatchToProps = (dispatch) => {
  return {
    startTime: () => dispatch(StartTimer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

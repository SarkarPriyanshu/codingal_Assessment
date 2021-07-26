import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StartTimer } from "../../Redux/ActionCreators/MainActions.Creators/StartTimer.ActionCreator";

const Timer = (props) => {
  const {
    handler: { timer, isTimerOn },
    startTime,
  } = props;

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

const mapStateToProps = (state) => {
  return {
    handler: state.BasicHandler,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTime: () => dispatch(StartTimer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

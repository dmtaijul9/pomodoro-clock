import React from "react";
import "./ActionWrapper.css";
import BreakLevel from "./actionWrapper/breakLevel/BreakLevel";
import SessionLevel from './actionWrapper/sessionLevel/SessionLevel';
import ShowWatch from './actionWrapper/showWatch/ShowWatch'

function ActionWrapper() {
  return (
    <div className="wrapper">
      <h1>Pomodoro Clock</h1>
      <div className="flexing">
        <BreakLevel />
        <SessionLevel />
      </div>
      <div>
        <ShowWatch />
      </div>
    </div>
  );
}

export default ActionWrapper;

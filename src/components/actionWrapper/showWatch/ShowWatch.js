import React from "react";
import "./ShowWatch.css";
import PauseIcon from "@material-ui/icons/Pause";
import RestoreIcon from "@material-ui/icons/Restore";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { isPause as playOrPause } from "../../../store/Redux/action/index";
import { useSelector, useDispatch } from "react-redux";

function ShowWatch() {
  const count = useSelector((state) => state.count);
  const isPause = useSelector((state) => state.pause);
  const dispatch = useDispatch();

  const isSession = useSelector((state) => state.isSession);
  const breakTime = useSelector((state) => state.break);
  const sessionTime = useSelector((state) => state.session);
  return (
    <div className="showTimeWrap">
      {isSession ? <h1>Session</h1> : <h1>Break</h1>}
      <h1 className="time">
        {" "}
        {isSession ? sessionTime : breakTime} :{" "}
        {count < 10 && count >= 0 ? `0${count}` : count}
      </h1>
      <h1 className="controler">
        <span onClick={() => dispatch(playOrPause())}>
          {" "}
          {isPause ? <PauseIcon /> : <PlayCircleFilledWhiteIcon />}{" "}
        </span>
        <span>
          {" "}
          <RestoreIcon />{" "}
        </span>
      </h1>
    </div>
  );
}

export default ShowWatch;

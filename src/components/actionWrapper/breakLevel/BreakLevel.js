import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { incrementBreak, decrementBreak } from "../../../store/Redux/action/index";
import { useSelector, useDispatch } from "react-redux";

function BreakLevel() {
  const breakTime = useSelector((state) => state.break);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Break Length</h1>
      <h1>
        <button onClick={() => dispatch(decrementBreak())}>
          {" "}
          <ArrowLeftIcon />{" "}
        </button>{" "}
        {breakTime}{" "}
        <button onClick={() => dispatch(incrementBreak())}>
          {" "}
          <ArrowRightIcon />{" "}
        </button>
      </h1>
    </div>
  );
}

export default BreakLevel;

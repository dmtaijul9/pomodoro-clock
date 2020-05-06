import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementSession,
  decrementSession,
} from "../../../store/Redux/action/index";
function SessionLevel() {
  const dispatch = useDispatch();
  const sessionTime = useSelector((state) => state.session);
  return (
    <div>
      <h1>Session Length</h1>
      <h1>
        <button onClick={() => dispatch(decrementSession())}>
          {" "}
          <ArrowLeftIcon />{" "}
        </button>{" "}
        {sessionTime}{" "}
        <button onClick={() => dispatch(incrementSession())}>
          {" "}
          <ArrowRightIcon />{" "}
        </button>
      </h1>
    </div>
  );
}

export default SessionLevel;

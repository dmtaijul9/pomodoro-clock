import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
function SessionLevel() {
  return (
    <div>
      <h1>Session Length</h1>
      <h1>
        <button>
          {" "}
          <ArrowLeftIcon />{" "}
        </button>{" "}
        25{" "}
        <button>
          {" "}
          <ArrowRightIcon />{" "}
        </button>
      </h1>
    </div>
  );
}

export default SessionLevel;

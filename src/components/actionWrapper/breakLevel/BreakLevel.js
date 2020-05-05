import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

function BreakLevel() {
  return (
    <div>
      <h1>Break Length</h1>
      <h1>
        <button>
          {" "}
          <ArrowLeftIcon />{" "}
        </button>{" "}
        5{" "}
        <button>
          {" "}
          <ArrowRightIcon />{" "}
        </button>
      </h1>
    </div>
  );
}

export default BreakLevel;

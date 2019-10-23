import React from "react";
import "./Map/map.css";

const SvgPath2 = ({ pathClass }) => {
  return (
    <svg
      className="svg_path2"
      width="107"
      height="327"
      viewBox="0 0 107 327"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 326L6.5 317L106 144L34 38.5L17 21L9 1"
        stroke="url(../Car/Car.js)"
        strokeWidth={3}
        className={pathClass}
      />
    </svg>
  );
};
export default SvgPath2;

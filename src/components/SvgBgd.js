import React from "react";
import "./Map/map.css";

const SvgBgd = () => {
    return (
      <svg
        className="svg_bgd"
        width="361"
        height="331"
        viewBox="0 0 361 331"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M84 294L87 300.5L128.5 299.5L140.5 302.5L207 322H211H224L247.5 304.5H253.5L281 266.5L286 259.5L355.5 220.5L344.5 192.5L332 174.5L106.5 4L100.5 1H93L83.5 4L72.5 8L63.5 11L55.5 13.5L48 15.5L41.5 17.5L35 20L29.5 23L23 26.5L16 34L10.5 41L7.5 46L5 51V77.5L9 93.5L10.5 100.5V117.5L12.5 122L16 127.5L19.5 133L24.5 137L29.5 141L35 146L41 152L46 157L51 161.5L54 165.5L57.5 171L61 176.5L64.5 181.5L68.5 187V192.5V199V206.5L67 214V220.5V227V233L68.5 240L70 246.5L71 252L72.5 259.5L74.5 266.5L76.5 271.5L78.5 278L80.5 284L82 288.5L84 294Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.5"
            y="0.5"
            width="359.625"
            height="330"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  };
  export default SvgBgd;
  
import React, { useEffect, useState } from "react";

import "./map.css";

import SvgBgd from "../SvgBgd";
import Path from "../Path";
import Car from "../Car/Car";

const Map2 = () => {
  let scrollCount = 0;

  const [classes, setClasses] = useState("svg_bgd");
  const [pathClass, setPathClasses] = useState("");
  const [carClass, setCarClass] = useState("car_moving");

  useEffect(() => {
    window.addEventListener("scroll", function(e) {
      const mapa = document.querySelector(".map_2");
      const visokiDiv = document.querySelector(".map_wrapper");

      if (
        window.pageYOffset > visokiDiv.offsetTop &&
        window.pageYOffset <
          visokiDiv.offsetTop + visokiDiv.offsetHeight - mapa.offsetHeight
      ) {
        console.log(window.pageYOffset);

        mapa.setAttribute("pos", "fixed");
        mapa.className = "map_2 stop_scroll";
        setClasses("svg_bgd visable");
        if (this.window.pageYOffset >= 500) {
          setPathClasses("line");
          setCarClass("car_moving car_animated");
        }
      } else if (
        window.pageYOffset >=
          visokiDiv.offsetTop + visokiDiv.offsetHeight - mapa.offsetHeight &&
        window.pageYOffset < visokiDiv.offsetTop + visokiDiv.offsetHeight
      ) {
        mapa.setAttribute("pos", "bottom");
        setCarClass("car_moving car_animated_return");
      } else {
        mapa.setAttribute("pos", "top");
        setClasses("svg_bgd");
        setPathClasses("");
        setCarClass("car_moving");
      }
    });
  }, [scrollCount]);
  return (
    <div className="map_wrapper">
      <div className="map_2">
        <SvgBgd classes={classes} />
        <Path pathClass={pathClass} />
        <Car carClass={carClass} />
      </div>
    </div>
  );
};
export default Map2;

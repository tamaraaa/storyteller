import React,{useEffect} from "react";
import "./map.css";
import SvgBgd from "../SvgBgd";
import Path from "../Path";

const Map2 = () => {
    useEffect(()=>{
        window.addEventListener('scroll', function(e) {
            const mapa = document.querySelector('.map_2');
          const visokiDiv = document.querySelector('.map_wrapper');
          
          if (window.pageYOffset > visokiDiv.offsetTop && window.pageYOffset < visokiDiv.offsetTop + visokiDiv.offsetHeight - mapa.offsetHeight) {
            console.log(window.pageYOffset) 
            mapa.setAttribute("pos", "fixed");
          } else if (window.pageYOffset >= visokiDiv.offsetTop + visokiDiv.offsetHeight - mapa.offsetHeight && window.pageYOffset < visokiDiv.offsetTop + visokiDiv.offsetHeight) {
              mapa.setAttribute("pos", "bottom");
          } else {
              mapa.setAttribute("pos", "top");
          }
        });   
    },[])
  return (
    <div className="map_wrapper">
      <div className="map_2">
        <SvgBgd />
        <Path />
      </div>
    </div>
  );
};
export default Map2;

import React from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import PB from "./components/PB/PB";
function App() {
  return (
    <div className="App">
      <Header />
      <PB />
      <div className="about">
        <span className="about__text">
          Lorem ipsum dolor amet knausgaard jean shorts four dollar toast,
          keytar raw denim sriracha lumbersexual meditation 8-bit synth.
          Taxidermy typewriter air plant selfies bushwick hexagon health goth.
          Artisan biodiesel glossier unicorn, sustainable selvage drinking
          vinegar semiotics actually activated charcoal truffaut viral.{" "}
        </span>
      </div>
      <Map />
      <div className="section"></div>
      <div className="footer" />
    </div>
  );
}

export default App;

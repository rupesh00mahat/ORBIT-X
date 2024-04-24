import React from "react";
import "../style.css";

function Main() {
  return (
    <div id="main-area">
      <div className="main-area-wrapper">
        <h1 className="main-text-h1">
          ORBIT THE <br /> EARTH
        </h1>
        <p className="main-text-p">
          There are two different types of satellites, namely natural and
          artificial satellites. As quoted bu Science Learn, according to Dr.
          Allan McInnes, a satellite is anything that orbites around a larger
          object.
        </p>
        <button className="get-started blue-bg-btn">Get Started</button>
      </div>
    </div>
  );
}

export default Main;

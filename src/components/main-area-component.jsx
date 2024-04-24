import React from "react";

function MainAreaComponent(props) {
  return (
    <div className={`our-mission-wrapper ${props.type}-css`}>
      <div className={`our-mission-wrapper-text `}>
        <span className="our-mission-title">{props.title}</span>
        <h2 className="our-mission-GOES-16">{props.h2Text}</h2>
        <p className="our-mission-p">{props.ourMissionText}</p>
        {props.buttonList}
      </div>
      <img src={props.image} />
    </div>
  );
}

export default MainAreaComponent;

import React from "react";

function Container(props) {
  return (
    <div className="container">
      {props.icon}
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <span>{props.span}</span>
    </div>
  );
}

export default Container;

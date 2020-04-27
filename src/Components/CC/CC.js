import React from "react";
import "./CC.css";

export default function CC(props) {
  return (
    <div>
      <button className={props.type}>{props.label}</button>
    </div>
  );
}

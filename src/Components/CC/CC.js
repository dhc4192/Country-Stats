import React from "react";
import "./CC.css";

export default function CC(props) {

//! Link to Currency Converter

  return (
    <div>
      <button className={props.type}>{props.label}</button>
    </div>
  );
}

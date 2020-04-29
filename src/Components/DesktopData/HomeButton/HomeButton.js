import React from "react";
import "./HomeButton.css";

export default function HomeButton(props) {
  return (
    <div>
      <button className={props.type}>{props.label}</button>
    </div>
  );
}

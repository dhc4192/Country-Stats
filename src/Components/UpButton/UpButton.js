import React from "react";
import "./UpButton.css";

export default function UpButton(props) {
  return (
    <div>
      <a className={props.type} href="#">
        ^
      </a>
    </div>
  );
}

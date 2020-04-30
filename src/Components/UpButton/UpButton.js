import React from "react";
import "./UpButton.css";

export default function UpButton(props) {
  return (
    <div>
      <a class={props.type} href="#">^</a>
    </div>
  );
}

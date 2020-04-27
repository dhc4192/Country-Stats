import React from "react";
import "./SearchButton.css";

export default function SearchButton(props) {
  return (
    <div>
      <button className={props.type}>{props.label}</button>
    </div>
  );
}

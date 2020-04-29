import React from "react";
import "./CC.css";

export default function CC(props) {

  return (
    <div>
      <a href="https://pages.git.generalassemb.ly/Dhc4192/Change-My-Change/index.html">
        <button className={props.type}>{props.label}</button>
      </a>
    </div>
  );
}

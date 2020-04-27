import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <button className={props.type}>{props.label}</button>
    </div>
  );
}

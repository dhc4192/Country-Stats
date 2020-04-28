import React from "react";
import "./Home.css";

export default function Home(props) {

//! Only for desktop. After the data is displayed. Have a button linked to home.

  return (
    <div>
      <button className={props.type}>{props.label}</button>
    </div>
  );
}

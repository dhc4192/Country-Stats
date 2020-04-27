import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div>
      <input className={props.type} placeholder="Search..." />
    </div>
  );
}

import React, { useState } from "react";
import "./ScrollBar.css";

export default function ScrollBar({ countries }) {

//! Need to link the selected option to the designated data and display it to the data




  return (
    <div>
      <select className="Scroll">
        {countries.map((country) => (
          <option key={country.name}>{country.name}</option>
        ))}
      </select>
    </div>
  );
}

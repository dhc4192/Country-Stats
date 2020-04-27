import React, { useState } from "react";
import "./ScrollBar.css";

export default function ScrollBar({ countries }) {
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

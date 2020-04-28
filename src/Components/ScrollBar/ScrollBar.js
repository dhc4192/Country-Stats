import React, { useState } from "react";
import "./ScrollBar.css";

export default function ScrollBar({ countries }) {
  const [scroll, setScroll] = useState("");

  const handleChange = () => {};

  return (
    <div>
      <select className="Scroll">
        {countries.map((country) => (
          <option key={country.name} onChange={handleChange}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

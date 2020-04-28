import React, { useState } from "react";
import "./ScrollBar.css";

export default function ScrollBar({ countries, searchApi }) {
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setSelect(e.target.value);
    // searchApi(setSelect);
  };

  return (
    <div>
      <form>
        <select className="Scroll">
          <option>Select a Country</option>
          {countries.map((country) => (
            <option
              key={country.name}
              onChange={handleChange}
              countries={countries}
            >
              {country.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

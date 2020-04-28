import React, { useState } from "react";
import "./ScrollBar.css";

export default function ScrollBar({ countries, searchApi }) {
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    console.log(e.target);
    setSelect(e.target.value);
    searchApi(e.target.value);
  };

  return (
    <div>
      <form>
        <select className="Scroll" onChange={handleChange}>
          <option>Select a Country</option>
          {countries.map((country) => (
            <option key={country.name} countries={countries}>
              {country.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

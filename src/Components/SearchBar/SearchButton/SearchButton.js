import React, { useState } from "react";
import "./SearchButton.css";

export default function SearchButton(countries) {
  const [submit, setSubmit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  const handleSubmit = (e) => {
    setSubmit(searchCountry);
    console.log("clicked");
  };
  //! Onclick, if the input in "SearchBar.js" === countries.name, display the data in the data section

  return (
    <div>
      <button className="Submit" onClick={handleSubmit}>
        {countries.label}
      </button>
    </div>
  );
}

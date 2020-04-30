import React, { useState } from "react";
import SearchButton from "./SearchButton/SearchButton";
import "./SearchBar.css";

export default function SearchBar({ countries, searchApi }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [submit, setSubmit] = useState("");

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(searchCountry);
    searchApi(searchCountry);
  };

  return (
    <div className="SearchBarSection">
      <form>
        <input
          type="text"
          className="Search"
          placeholder=" &#128270; | Search....."
          onChange={handleChange}
        />
        <SearchButton
          label="Submit"
          type="Submit"
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

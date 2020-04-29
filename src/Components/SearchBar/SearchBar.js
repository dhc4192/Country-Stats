import React, { useState } from "react";
import "./SearchBar.css";
import SearchButton from "./SearchButton/SearchButton";

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
    <div>
      <form>
        <input
          type="text"
          className="Search"
          placeholder="Search....."
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

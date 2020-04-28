import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ countries }) {
  const [searchCountry, setSearchCountry] = useState("");

  // const [submit, setSubmit] = useState("")
  // console.log(submit)

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     setSubmit(searchCountry)
  // }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type="text"
        className="Search"
        placeholder="Search..."
        onChange={handleChange}
      />
      {/* <button type="submit">Search</button>
      </form> */}
    </div>
  );
}

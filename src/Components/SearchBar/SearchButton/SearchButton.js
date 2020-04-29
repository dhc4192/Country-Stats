import React, { useState } from "react";
import "./SearchButton.css";

export default function SearchButton({ label, handleSubmit }) {
  return (
    <div>
      <button className="Submit" onClick={handleSubmit}>
        {label}
      </button>
    </div>
  );
}

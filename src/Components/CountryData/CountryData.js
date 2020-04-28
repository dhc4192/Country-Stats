import React from "react";

export default function CountryData({ countries }) {
  //! When a country is selected from SearchBar or ScrollBar, display data.

  return (
    <div className="CountryData">
      {/* {countries.map((country) => (
        <>
          <img src={country.flag} />
          <p>{country.name}</p>
          <p>{country.nativeName}</p>
          <p>{country.altSpellings}</p>
          <p>{country.capital}</p>
          {country.languages.map((lang) => (
            <p>
              {lang.name} {lang.nativeName}
            </p>
          ))}
          <p>{country.borders}</p>
          <p>{country.region}</p>
          <p>{country.subregion}</p>
          <p>{country.population}</p>
          <p>{country.timezones}</p>
          {country.currencies.map((curr) => (
            <p>
              {curr.code} {curr.name}
            </p>
          ))}
          <p>{country.callingCode}</p>
        </>
      ))} */}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Header from "../Header/Header";
import ScrollBar from "../ScrollBar/ScrollBar";
import SearchBar from "../SearchBar/SearchBar";
import CountryData from "../CountryData/CountryData";
import DesktopData from "../DesktopData/DesktopData";
import Description from "../Header/Description/Description";

export default function App() {
  const [country, setCountry] = useState(null);
  const [countries, updateCountries] = useState([]);
  const Mobile = window.innerWidth <= 500;

  useEffect(() => {
    apiCall();
  }, [country]);

  const apiCall = async () => {
    const countryData = await axios("https://restcountries.eu/rest/v2/all");
    const data = countryData.data;
    updateCountries(data);
  };

  const searchApi = (countryName) => {
    const country = countries.find(
      (country) =>
        country.name.toLowerCase() === countryName.toLowerCase() ||
        country.demonym.toLowerCase() === countryName.toLowerCase() ||
        country.alpha3Code.toLowerCase() === countryName.toLowerCase() ||
        country.alpha2Code.toLowerCase() === countryName.toLowerCase()
    );
    setCountry(country);
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <Header />
      </header>
      <main className="AppMain">
        <Description />
        <section className="AppSection">
          <SearchBar
            label="Search"
            type="Search"
            countries={countries}
            searchApi={searchApi}
          />
          <ScrollBar
            label="Scroll"
            type="Scroll"
            countries={countries}
            searchApi={searchApi}
          />
          <CountryData country={country} />
          {/* <DesktopData countries={countries} /> */}
        </section>
      </main>
    </div>
  );
}

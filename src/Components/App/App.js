import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import CC from "../CC/CC";
import Home from "../Home/Home";
import Header from "../Header/Header";
import ScrollBar from "../ScrollBar/ScrollBar";
import SearchBar from "../SearchBar/SearchBar";
import Description from "../Description/Description";
import CountryData from "../CountryData/CountryData";
import CountryList from "../CountryList/CountryList";
import SearchButton from "../SearchButton/SearchButton";

export default function App() {
  const [country, setCountry] = useState({});

  const [countries, updateCountries] = useState([]);
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
        country.name === countryName || country.alpha3Code === countryName || country.alpha2Code === countryName || country.demonym === countryName
      
    );
    setCountry(country);
  };


  return (
    <div className="App">
      <header className="AppHeader">
        <Header />
        <CC label="Converter" type="Converter" />
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
          <ScrollBar label="Scroll" type="Scroll" countries={countries} searchApi={searchApi}/>
          <CountryData country={country} />
          <CountryList countries={countries} />
          <Home label="Home" type="Home" />
        </section>
      </main>
    </div>
  );
}

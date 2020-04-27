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
  const [countries, updateCountries] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const countryData = await axios('https://restcountries.eu/rest/v2/all')
      const data = countryData.data
      updateCountries(data)
    }
    apiCall()
  }, [])


  return (
    <div className="App">
      <header className="AppHeader">
        <Header />
        <CC label="Converter" type="Converter" />
      </header>
      <main className="AppMain">
        <Description />
        <section className="AppSection">
          <SearchBar label="Search" type="Search" />
          <SearchButton label="Submit" type="Submit" />
          <ScrollBar labe="Scroll" type="Scroll" countries={countries}/>
          <CountryData />
          <CountryList />
          <Home label="Home" type="Home" />
        </section>
      </main>
    </div>
  );
}

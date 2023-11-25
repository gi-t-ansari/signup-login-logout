import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CitySelector.css"

const CitySelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios
      .get("https://crio-location-selector.onrender.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the countries", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
    const stateInput = document.getElementById("stateInput")
    stateInput.removeAttribute("disabled")
      axios
        .get(
          `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
        )
        .then((response) => {
          setStates(response.data);
          setSelectedState("");
          setCities([]);
          setSelectedCity("");
        })
        .catch((error) => console.error("Error fetching states", error));
    }
  }, [selectedCountry]);

  useEffect(() => {
    
    if (selectedCountry && selectedState) {
        const cityInput = document.getElementById("cityInput")
        cityInput.removeAttribute("disabled")
      axios
        .get(
          `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
        )
        .then((response) => {
          setCities(response.data);
          setSelectedCity("");
        })
        .catch((error) => console.error("Error fetching the cities"));
    }
  }, [selectedCountry, selectedState]);

  return (
    
      <div className="container">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
        disabled
        id="stateInput"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
            disabled
            id="cityInput"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {selectedCity && (
        <p>
          You selected {selectedCity}, {selectedState}, {selectedCountry}
        </p>
      )}
      </div>
      
    
  );
};

export default CitySelector;

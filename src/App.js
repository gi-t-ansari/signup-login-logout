import React from 'react';
import { useState } from 'react';
import './App.css';
import CitySelector from './CitySelector';

function App() {
  

  return (
    <div className="App">
      <h1>Location Selector</h1>
      <p>Select your location</p>
      <CitySelector />
    </div>
  );
}

export default App;

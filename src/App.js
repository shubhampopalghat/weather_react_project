import React, { useState } from 'react';
import Weather from './Weather';
import './App.css';
import HamburgerMenu from './Navbar';
import SearchBar from './SearchBar';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HamburgerMenu />
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        <div id='weatherInfo'> 
        {selectedCity && <Weather city={selectedCity} />} </div>
      </header>
    </div>
  );
}

export default App;

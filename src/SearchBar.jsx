import React, { useState } from 'react';
import './'

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai",
  "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
  "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad",
  "Patna", "Vadodara"
];

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setSuggestions(indianCities.filter(city => city.toLowerCase().includes(value.toLowerCase())).slice(0, 4));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setSuggestions([]);
  };

  const handleInputClick = () => {
    onSearch('');
  };

  return (
    <div className="wrapper">
      <div className="label">Submit your search</div>
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
          autoComplete="off"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        <button id="searchQuerySubmit" type="button" onClick={handleSearchSubmit}>
          <svg viewBox="0 0 24 24">
            <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
        </button>
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          <ul id='suggestions-dropdownul'>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

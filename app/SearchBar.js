import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input 
      type="text"
      className="form-control "
      placeholder="Search for movies, actors, or directors..."
    //   onChange={handleSearch}
    />
  );
};

export default SearchBar;

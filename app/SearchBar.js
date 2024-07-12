"use client"
import React, { useState } from 'react';
import MovieDetails from './MovieDetails'; 
import './globals.css';  

const SearchBar = ({ onSearch }) => {
  const [movie, setMovie] = useState(null);
  const [search, searchTitle] = useState('');

  const searchMovie = () => {
    console.log('Searching for movie:', search);
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=8bf35543`)
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        setMovie(data);
        if (onSearch) {
          onSearch(data);
        }
      });
  };

  return (
    <div className="container">
        <div className="search-box">
          <img className="img-search" src="Frame.png" alt="Search" />
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={e => searchTitle(e.target.value)}
            placeholder="Enter movie title"
          />
          <button className="btn btn-primary" onClick={searchMovie}>
            Search
          </button>
        </div>
       <MovieDetails movie={movie} />
    </div>
  );
};

export default SearchBar;

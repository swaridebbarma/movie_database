"use client"
import React, { useState } from 'react';
import MovieDetails from './MovieDetails'; 
import './globals.css';  

const SearchBar = () => {
  const [movie, setMovie] = useState(null);
  const [search, searchTitle] = useState('');

  const searchMovie = () => {
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=8bf35543`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });
  };

  return (
    <div className="container">
        <div className="search-box">
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

import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';
import './globals.css';

function Page() {
  return (
    <div>
      <Header />
      <SearchBar />
      <MovieDetails/>
    </div>
  );
}

export default Page;

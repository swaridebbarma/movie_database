import React from 'react';

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="list-group">
      {movies.map(movie => (
        <button 
          key={movie.id} 
          className="list-group-item list-group-item-action"
          onClick={() => onMovieSelect(movie)}
        >
          {movie.title}
        </button>
      ))}
    </div>
  );
};

export default MovieList;

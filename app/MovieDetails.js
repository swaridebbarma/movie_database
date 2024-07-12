import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div>Select a movie to see details</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;

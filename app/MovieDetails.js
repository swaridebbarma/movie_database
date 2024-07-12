import React from 'react';
import "./MovieDetails.css"

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className='movie-row-main'>
      <div className='col1'>
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} /></div>
      <div className='col2'>
        <div className='col-1'>
          <p className="card"><strong>movie Name:</strong>{movie.Title}</p>
        </div>
        <div className='col-2'>
          <p className="card"><strong>Actors:</strong>{movie.Actors}</p>
        </div>
        <div className='col-3'>
          <p className="card"><strong>Year:</strong> {movie.Year}</p>
        </div>
        <div className='col-4'>
          <p className="card"><strong>Directon:</strong> {movie.Director}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

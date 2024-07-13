import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  if (!movie) return null;
  return (
    <div className='movie-row-main'>
      <div className='col1'>
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} /></div>
      <div className='col2'>
        <div className='col-1'>
          <p className="card"><strong>Name:</strong>{movie.Title}</p>
        </div>
        <div className='col-2'>
          <p className="card"><strong>Actors:</strong>{movie.Actors}</p>
        </div>
        <div className='col-3'>
          <p className="card"><strong>Released:</strong> {movie.Released}</p>
        </div>
        <div className='col-4'>
          <p className="card"><strong>Director:</strong> {movie.Director}</p>
        </div>
        <div className='col-5'>
          <p className="card"><strong>Genre:</strong> {movie.Genre}</p>
        </div>
        <div className='col-6'>
          <p className="card"><strong>Country:</strong> {movie.Country}</p>
        </div>
        <div className='col-7'>
          <p className="card"><strong>Type:</strong> {movie.Type}</p>
        </div>
        <div className='col-8'>
          <p className="card"><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};


export default MovieDetails;

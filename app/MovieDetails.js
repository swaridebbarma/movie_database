const MovieDetails = ({ movie }) => {
  if (!movie) return null;
  return (
    <div className="container movie-row-main">
        <div className="col-12 col-md-4 col-lg-3 col1">
          <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col2">
          <div className="card bg-transparent p-2">
            <h5 className="card-text">Title: {movie.Title}</h5>
            <p className="card-text">Actors: {movie.Actors}</p>
            <p className="card-text">Released: {movie.Released}</p>
            <p className="card-text">Director: {movie.Director}</p>
            <p className="card-text">Genre: {movie.Genre}</p>
            <p className="card-text">Country: {movie.Country}</p>
            <p className="card-text">Type: {movie.Type}</p>
            <p className="card-text">Plot: {movie.Plot}</p>
          </div>
      </div>
    </div>
  );
};

export default MovieDetails;

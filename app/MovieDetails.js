
const MovieDetails = ({ movie }) => {
  if (!movie) return null;
  return (
    <div className="movie-row-main">
      <div className="col1">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      </div>
      <div className="col2">
        <h2 className="card">Title: {movie.Title}</h2>
        <p className="card">Actors: {movie.Actors}</p>
        <p className="card">Released: {movie.Released}</p>
        <p className="card">Director: {movie.Director}</p>
        <p className="card">Genre: {movie.Genre}</p>
        <p className="card">Country: {movie.Country}</p>
        <p className="card">Type: {movie.Type}</p>
        <p className="card">Plot: {movie.Plot}</p>
      </div>
    </div>
  );
};


export default MovieDetails;

import img from "../assets/noimage.png"
function MovieItem({ movie, onSelectMovieId }) {
  const handleClick = () => onSelectMovieId(movie.imdbID);

  return (
    <li className="movie-item" onClick={handleClick}>
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      ) : (
        <div 
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          <p>X</p>
        </div>
      )}
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </li>
  );
}

export default MovieItem;
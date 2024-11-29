import Loader from "./Loader";
import { OMDB_API_KEY } from "../config";
import { useState, useEffect } from "react";
import Ratings from "./StarRatings";
import img from "../assets/noimage.png";
function MovieDetails({ selectedId, onCloseMovie,onAddWatched,watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating,setUserRating]=useState(0)
  function handleAddWatched(){
    const newWatchedMovie={
      imdbID:selectedId,
      title,year,poster,
      imbdRating:Number(imbdRating),
      runtime:Number(runtime.split(" ").at(0)),
      userRating:Number(userRating)
    }
    onAddWatched(newWatchedMovie)
    onCloseMovie()
  }
  const isWatched=watched.some((movie)=>movie.imdbID===selectedId)
  const {
    Title: title,
    Year: year,
    Released: released,
    Poster: poster,
    imbdRating,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Actors: actors,
    Director: director,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              X
            </button>
            {poster !== "N/A" ? (
              <img src={poster} alt={`${title} poster`} />
            ) : (
              <div
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: "200px",
                  height: "300px",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              </div>
            )}
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                <span>📅</span>
                <span>{released}</span>
              </p>
              <p>
                <span>⏱</span>
                <span>{runtime}</span>
              </p>
              <p>
                <span>⭐</span>
                <span>{imbdRating}</span>
              </p>
            </div>
          </header>
          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Year : {year}</p>
            <p>Genre : {genre}</p>
            <p>Actors : {actors}</p>
            <p>Directed by : {director}</p>
            <div className="rating">
              {!isWatched?(
                <>
                <Ratings max={10} size={24} color="#fcc419" onSetRating={setUserRating}/>
                {userRating>0&&(
                  <button className="btn-add" onClick={handleAddWatched}>+ Add to watched</button>
                )}
                </>
              ):(
                <p>
                  you have watched this movie with a rating of {" "}
                  {userRating} / 10
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
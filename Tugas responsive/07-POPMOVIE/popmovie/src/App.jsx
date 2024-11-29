import { useEffect, useState } from "react"
import {OMDB_API_KEY} from "./config"
import Logo from"./components/Logo"
import Search from "./components/Search"
import NavResults from "./components/NavResults"
import NavBar from "./components/Navbar"
import Main from "./components/Main"
import BoxMovies from "./components/BoxMovies"
import MovieList from "./components/MovieList"
import Loader from "./components/Loader"
import MovieDetails from "./components/MovieDetails"
import Ratings from "./components/StarRatings"
function App() {
  const [query,setQuery]=useState("oppenheimer")
  const [movies,setMovies]=useState([])
  const [selectedMovieId,setSelectedMovieId]=useState(null);
  const [isLoading,setIsLoading]=useState(false)
  const [watched,setWatched]=useState([])
  function handleAddWatched(movie){
    setWatched((watched) =>[...watched,movie])
  }
  function handleSelectedMovieId(id){
    setSelectedMovieId((selectedId)=>(selectedId===id?null:id));
  }
  function handleCloseMovie(){
    selectedMovieId(null)
  }
  useEffect(()=>{
    async function fetchMovie() {
      try{
        setIsLoading(true);
        const res=await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${OMDB_API_KEY}`
        )
        const data = await res.json();
        // console.log(data.Search)
        setMovies(data.Search||[])
        setIsLoading(false)
      } catch(err){
        console.log(err)
      }
    }
    if(query.length<3){
      setMovies([])
      return
    }
    fetchMovie();
  },[query])
  return (
    <>
      <NavBar>
        <Logo/>
        <Search query={query} setQuery={setQuery}/>
        <NavResults movies={movies}/>
      </NavBar>
      <Main>
        <BoxMovies>
          {isLoading ?
              <Loader/> :
              <MovieList movies={movies} onSelectMovieId={handleSelectedMovieId}/>}
        </BoxMovies>
        <BoxMovies>
          {selectedMovieId &&(
              <MovieDetails selectedId={selectedMovieId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched}/>
          )}
        </BoxMovies>
      </Main>
    </>
  )
}
export default App
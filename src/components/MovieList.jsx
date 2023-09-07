
import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesMaster,setMoviesMaster] = useState(moviesDataJSON)
 
  function addNewMovie(newMovie){
    const updatedMovies = [...movies,newMovie]


    setMovies(updatedMovies)
    setMoviesMaster(updatedMovies)
  }

  const filterMovieList = (str) => {
    let filteredMovies;
    
    if (str === "All") {
      filteredMovies = moviesMaster;
    } else {
      filteredMovies = moviesMaster.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setMovies(filteredMovies);
  };
  return (
    <div>
      <FilterMovies filterMovieList={filterMovieList}></FilterMovies>
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      <h2>Movie List</h2>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;
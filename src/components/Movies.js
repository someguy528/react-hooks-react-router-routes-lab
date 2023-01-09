import React from "react";
import { movies } from "../data";

function Movies() {



  const allMovies = movies.map(movie => {
    // const { title, time, genres } = movie;

    const allMovieGenres = movie.genres.map(genre => {
      return <li key={genre} >{genre} </li>
    })

    return (
      <div key={movie.title} >
        <p>Name : {movie.title}</p>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {allMovieGenres}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movies Page</h1>
    <div>
      {allMovies}
    </div>
  </div>;
}

export default Movies;

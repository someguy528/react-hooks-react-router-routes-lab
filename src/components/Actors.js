import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors = actors.map(actor => {

    const allActorMovies = actor.movies.map(movie => {
      return (<li key={movie} >{movie}</li>)
    });
    return (
      <div key={actor.name} >
        <p>Name: {actor.name}</p>
        <p>Movies: </p>
        <ul>
          {allActorMovies}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Actors Page</h1>
    {allActors}
  </div>;
}

export default Actors;

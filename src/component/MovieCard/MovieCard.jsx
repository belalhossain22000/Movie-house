import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie,handleWatchTime }) => {
//   console.log(movie);
  const { movieName, poster, watchTime, imdbRating, description } = movie;
  return (
    <div className="card">
      <div>
        <img className="image" src={poster} alt="" />
      </div>
      <div>
        <h1>{movieName}</h1>
        <p>{description}</p>
        <div className="time-rating">
          <p>watchTime :{watchTime} min</p>
          <p>Rating :{imdbRating}</p>
        </div>
      </div>
      <button onClick={()=>handleWatchTime(watchTime)} className="book-btn">Book Now</button>
    </div>
  );
};

export default MovieCard;

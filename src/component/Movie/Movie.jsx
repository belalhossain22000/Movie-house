import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Movie.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Movie = () => {
  const getDAata=(key)=>{
    const value = localStorage.getItem(key);
    return(JSON.parse(value)?JSON.parse(value):0);
}

  const [movies, setMovies] = useState([]);
  const [watchtime, seWatchtime] = useState(getDAata('watchTime'));
  const [breakTime,setBreakTime]=useState(getDAata('breakTime'))
  const notify = () => toast("Wow You Are Compleated!!!");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
 
  const handleWatchTime = (watchTimes) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      localStorage.setItem("watchTime", watchTimes + previousWatchTime);

      seWatchtime(previousWatchTime + watchTimes);
    } else {
      localStorage.setItem("watchTime", watchTimes + watchtime);
      seWatchtime(watchTimes + watchtime);
    }
  };
  const handleBreakTimw=(brTime)=>{
    setBreakTime(brTime)

  }
  return (
    <div className="movie-container">
      <div className="movie-card-container">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.movieName}
            handleWatchTime={handleWatchTime}
          ></MovieCard>
        ))}
      </div>
      <div className="summery-container">
        <h1>My Summery</h1>
        <p>Total watchTime :</p>
        <input className="watchTime" type="text" value={watchtime} />
        <h3>Add Break Time</h3>
        <button onClick={()=>handleBreakTimw(15)} className="btn-timmer">15</button>
        <button onClick={()=>handleBreakTimw(20)} className="btn-timmer">20</button>
        <button onClick={()=>handleBreakTimw(25)} className="btn-timmer">25</button>
        <input className="watchTime" type="text" value={breakTime} />
        <button onClick={notify} className="compleat-btn">Compleate</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Movie;

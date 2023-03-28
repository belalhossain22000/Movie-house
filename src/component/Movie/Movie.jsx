import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movie.css'

const Movie = () => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    return (
        <div className='movie-container'>
            <div className='movie-card-container'>
               {
                movies.map(movie=><MovieCard movie={movie} key={movie.movieName}></MovieCard>)
               }

            </div>
            <div className='summery-container'>
                <h1>My Summery</h1>
                <p>Total watchTime :</p>
                <input className='watchTime' type="text" value={0} />
                <h3>Add Break Time</h3>
                <button className='btn-timmer'>15</button><button className='btn-timmer'>20</button><button className='btn-timmer'>25</button>
                <input className='watchTime' type="text" value={0} />
                <button className="compleat-btn">Compleate</button>

            </div>
        </div>
    );
};

export default Movie;
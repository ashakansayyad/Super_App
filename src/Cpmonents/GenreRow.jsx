import React, { useState } from 'react'
import { useEffect } from 'react';
import fetchMoviesByGenre from '../api/fetchMovies';
import styles from './GenreRow.module.css'
import defaultGenre from '../data/genre';


const genreIDs = [28,18,10749,53,37,27,14,10402,878]



function GenreRow({genre}) {
    const index = defaultGenre.findIndex(g=>g.name === genre)
    const genreId = genreIDs[index];
    const [movies,setMovies]=useState([]);
    console.log("GenreID",genre,); 
    useEffect(()=>{
        if(genreId !== undefined){  
          console.log(`Fetching movies for genreId: ${genreId}`); // Debug
        fetchMoviesByGenre(genreId).then((data)=>setMovies(data.results))
       
      }
       
    },[genreId]);

  return (
    <div className={styles.container}  >
    {movies.slice(0,4).map((movie)=>(
        <img className={styles.moviesImg} key={movie.id}  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

    ))}
    </div>
  )
}

export default GenreRow

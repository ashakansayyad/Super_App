import React from 'react'
import styles from  './MoviePage.module.css'
import smallAvatar from '../assets/smallAvatar.png'
import { useContext } from 'react';
import {AppContext} from '../context/AppContext'
import GenreRow from '../Cpmonents/GenreRow';


function MoviePage() {
const {selectedGenre} = useContext(AppContext);
console.log(selectedGenre);

  return (
    <div className={styles.container} >
      <div className={styles.header}  >
        <h2 className={styles.heading} >Super App</h2>
        <img src={smallAvatar} alt="" />
      </div>
      <div className={styles.main}>
        <h2>Entertainment according to your choice</h2>
      </div>
      <div className={styles.footer}  >
        {selectedGenre?.slice(0,4).map((genre)=>(
        <div key={genre.id} className={styles.genre} >
            <h1  className={styles.genreName} >{genre}</h1>
            <GenreRow genre={genre}  />
           
            </div>

        ))}
      </div>


    </div>
  )
}

export default MoviePage

import React from 'react'
import warning from '../assets/warning.png'
import styles from "./GenrePage.module.css"
import defaultGenre  from '../data/genre'
import { AppContext } from '../context/AppContext'
import { useState,useEffect,useContext} from 'react'
import { useNavigate} from 'react-router-dom'
export default function GenrePage() {
    const [error,setError]=useState();
    const navigate = useNavigate();
    const {selectedGenre,setSelectedGenre} = useContext(AppContext);
   
    useEffect(()=>{
        if(selectedGenre.length >= 3){
            setError(false)
        }
    },[selectedGenre])

    const handleSubmit=()=>{
            if(selectedGenre.length < 3){
                setError(true);
            }else{
                navigate('/carousel')
            }
    };
  
    const handleSelectedGenre=(genre)=>{
        // POP Operation
            if( selectedGenre.includes(genre)){
                setSelectedGenre(selectedGenre.filter((selectedGenre)=>selectedGenre!==genre))
            }
            // Push operation
            else{
                setSelectedGenre([...selectedGenre,genre])
            }
    }
  return (
    <div  className={styles.container}  >
     
     <div className={styles.left}>
        <h2 className={styles.heading}>Super App</h2>
        <h2  className={styles.subheading}>Choose your <br /> entertainment <br /> category</h2>
        <div className={styles.selectGenCon}  >
            {
                selectedGenre.map((genre,index)=>(
                    <h2
                    key={index}
                    onClick={()=>handleSelectedGenre(genre)}
                    className={styles.selectedGenre}
                    >{genre}<span className={styles.cross}>X</span> </h2>
                ))
            }

        </div>
{error && (<p className={styles.error}>
    <img src={warning} className={styles.warningImg}  alt="vector image" />
    Minimum 3 categories required
  </p>
)}

     </div>
     <div className={styles.right}>
                <div className={styles.genre} >
                    {defaultGenre.map((genre,index)=>(
                        <div
                        key={index}
                        className={styles.disGenreContainer}
                        onClick={()=>{handleSelectedGenre(genre.name);
                        }}
                      

                        >
                     <h2 className={styles.genreName} >{genre.name}</h2>   
                        <img src={genre.url} alt={genre.item} style={{borderRadius:'19px', width: '250px', height: 'auto' }}/>
                           </div>
                    ))}
                </div>
                <button className={styles.nextPagebtn} onClick={handleSubmit}>Next Page</button>      
     </div>








    </div>
  )
}

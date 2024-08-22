import React from 'react'
import styles from './Carousel.module.css'
import ProfileWidget from '../Cpmonents/ProfileWidget'
import WeatherWidget from '../Cpmonents/WeatherWidget'
import NewsWidget from '../Cpmonents/NewsWidget'
import { useNavigate } from 'react-router-dom'

export default function Carousel() {
    const navigate = useNavigate()

    return (
        <div className={styles.container} >
            <div className={styles.profileWidget}>
            <ProfileWidget/>
            
            </div>
            <div className={styles.weatherWidget}>
                <WeatherWidget/>
            </div>
            <div className={styles.newsWidget}>
                <NewsWidget/>
            </div>
            <button className={styles.nextBtn}  onClick={()=>navigate('/dashbord')}>Next</button>
        </div>
    )
}

import React from 'react'
import styles from './DashbordPage.module.css'
import TimerWidget from '../Cpmonents/TimerWidget'
import NotesWidget from '../Cpmonents/NotesWidget'
import ProfileWidget from '../Cpmonents/ProfileWidget'
import WeatherWidget from '../Cpmonents/WeatherWidget'
import NewsWidget from '../Cpmonents/NewsWidget'
import { useNavigate } from 'react-router-dom'
function DashbordPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container} >
      <div className={styles.div1} ><ProfileWidget/>  </div>
	<div className={styles.div2} ><WeatherWidget/>  </div>
	<div className={styles.div3} >  <NotesWidget/>  </div>
	<div className={styles.div4} > <TimerWidget/>   </div>
	<div className={styles.div5} ><NewsWidget/></div>
      
      <button  className={styles.browseBtn} onClick={()=>navigate('/movies')} >Browse</button>

    </div>
  )
}

export default DashbordPage

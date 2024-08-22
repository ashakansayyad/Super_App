import React from 'react'
import styles from './TimerWidget.module.css'
import { useState, useEffect } from 'react'
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const HOUR_STEP = 3600;
const MINUTE_STEP = 60;
const SECONDS_STEP = 1;

export default function TimerWidget() {

  const [timeRemaining,setTimeRemaining]=useState(10);
  const [cachedSeconds,setCachedSeconds]=useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {

      const interval = setInterval(() => {

        setTimeRemaining((totalSeconds) => {
          if (totalSeconds > 0) return totalSeconds - 1;
          else {
            setIsRunning(false);
            return 0;
          }
        })
      }, 1000);  //1000ms  = 1 sec
      return () => clearInterval(interval); //clearInterval stops the interval or
    }
  }, [isRunning])


  const parseTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  }

  const stepHandler = (step) => {
    if (isRunning || step === 0 || (step < 0 && timeRemaining + step < 0)) return;
  
    const newTime = timeRemaining + step;
    setCachedSeconds(newTime);
    setTimeRemaining(newTime);
  };
  

  const formatTime = (time)=>{
    return `${time.hours.toString().padStart(2,"0")}:${time.minutes.toString().padStart(2,"0")}:${time.seconds.toString().padStart(2,"0")}`;

    // 0 --> 00:00:00
  };

  const percentage = (timeRemaining / cachedSeconds) * 100;

  return (
    <div className={styles.container} >
      <div className={styles.left}>
          <CircularProgressbar
          
          className={styles.CircularProgressbar}
          value={percentage} //0-1
          text={formatTime(parseTime(timeRemaining))}
          styles={{
         
            path:{
              stroke:"#FF6A6A",
              strokeWidth:"3px",
              // transition:
            },
            trail:{
              stroke:"transparent",

            },
            text:{
              fill:"white",
              fontSize:"12px",
            },
          }}
          
          />
      </div>

      <div className={styles.right}>
        <div className={styles.configure}>
          <div className={styles.cell1} >
            <h3>Hours</h3>
            <FaSortUp
             style={{ color: '#949494', fontSize: '45px' }}
              onClick={() => stepHandler(HOUR_STEP)}
            />
            <h3 className={styles.number} >{parseTime(cachedSeconds).hours.toString().padStart(2,"0")}</h3>
            <FaSortDown
            style={{ color: '#949494', fontSize: '45px' }}
              onClick={() =>  stepHandler(-HOUR_STEP)}
              
            />
          </div>
          <div  className={styles.mid} >:</div>
          <div className={styles.cell2} >
            <h3>Minutes</h3>
            <FaSortUp
             style={{  color: '#949494', fontSize: '45px' }}
              onClick={() =>  stepHandler(MINUTE_STEP)}
            />
            <h3  className={styles.number} >{parseTime(cachedSeconds).minutes.toString().padStart(2,"0")}</h3>
            <FaSortDown
             style={{ color: '#949494', fontSize: '45px' }}
              onClick={() => stepHandler(-MINUTE_STEP)}
            />
          </div>
          <div  className={styles.mid} >:</div>
          <div className={styles.cell3} >
            <h3 >Seconds</h3>
            <FaSortUp
             style={{ color: '#949494', fontSize: '45px' }}
              onClick={() => stepHandler(SECONDS_STEP)}
            />
            <h3  className={styles.number} >{parseTime(cachedSeconds).seconds.toString().padStart(2,"0")}</h3>
            <FaSortDown  style={{ color: '#949494', fontSize: '45px' }} onClick={() =>  stepHandler(-SECONDS_STEP) }/>
          </div>
        </div>
        <button onClick={() => setIsRunning(!isRunning)} >{isRunning ? "Stop" : "Start"}</button>
      </div>
    </div>
  )
}

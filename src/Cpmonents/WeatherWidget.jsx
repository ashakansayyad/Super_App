import React, { useEffect, useImperativeHandle, useState } from "react";
import styles from "./WeatherWidget.module.css";
import fetchWeather from "../api/fetchWeather";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import formatDateAndTime from "../utils/formatDateAndTime";
import { Navigate } from "react-router-dom";

export default function WeatherWidget() {
  
  const [weatherData, setWeatherData] = useState();
  const [dateTime,setDateTime]=useState();
  useEffect(() => {
    fetchWeather().then((data) => {
      console.log(data);
      const { pressure_mb, wind_kph, temp_c, humidity, condition } =
        data.current;
      const { localtime } = data.location;
      setWeatherData({
        pressure: pressure_mb,
        temperature: temp_c,
        wind: wind_kph,
        humidity,
        weatherText: condition.text,
        image: condition.icon,
      });
    });
      const {date,time}=formatDateAndTime();
      setDateTime({date,time});

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {dateTime && (
          <>
          <h2 className={styles.date}>{dateTime.date}</h2>
        <h2 className={styles.time}>{dateTime.time}</h2>
      
          </>

        )


        }
        
      </div>
      <div className={styles.footer}>
        {weatherData ? (
          <>
            <div className={styles.firstContainer}>
              <img src={weatherData.image} alt="weather img" />
              <h3 className={styles.weatherText}>{weatherData.weatherText}</h3>
            </div>
            <div className={styles.secondContainer}>
              <h2 className={styles.temperature}>
                {weatherData.temperature}&deg;C
              </h2>
              <h3 className={styles.pressure}>{weatherData.pressure} mbar</h3>
              <p>Pressure</p>
            </div>
            <div className={styles.thirdContainer}>
              <div className={styles.windImgtext}>
         
                <img src={wind} alt="wind" />
                <h2 className={styles.wind}>{weatherData.wind} km/h</h2>
              </div>
              <h2 className={styles.windtext}>Wind</h2>
              <div className={styles.humidityThird} >
              <img src={humidity} alt="humidity" />
            
              <h3 className={styles.humidity}>{weatherData.humidity}%</h3>
              <h3 className={styles.humidityText}>Humidity</h3>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}


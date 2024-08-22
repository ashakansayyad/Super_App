import React, { useState,useEffect } from 'react'
import styles from './NewsWidget.module.css'
import fetchNews from '../api/fetchNews'
import formatDateAndTime from '../utils/formatDateAndTime';


function NewsWidget() {
    const[news,setNews]=useState();
    const {date,time}=formatDateAndTime();
    

    useEffect(()=>{
        fetchNews().then((data)=>{
            if(data.status=="ok"){
                // console.log(data.articles);
                const randomIndex = Math.floor(Math.random() * data.articles.length);
                setNews(data.articles[randomIndex]);
                // generating a number between 0 and L-1

            }

        });
        
    },[])

    const renderPublishedAt=(timestamp)=>{
        const {date,time}=formatDateAndTime(timestamp);
        return `${date} | ${time}`;
    }
       
   

	console.log(news);


  return (
   
    <div className={styles.container} >
            <div className={styles.header} >
                    <img src={news?.urlToImage} alt="newsImage" />
                    <div className={styles.titleContainer} >
                    <h2 className={styles.title} >{news?.title}</h2>
                    <p className={styles.timeStamp}>{renderPublishedAt(news?.publishedAt)}</p>
                    </div>
            </div>
            <div className={styles.body} >
                <p className={styles.description} >{news?.content}</p>
            </div>
    </div>
  )
}

export default NewsWidget

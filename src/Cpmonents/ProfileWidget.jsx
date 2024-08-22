import React from 'react'
import styles from './ProfileWidget.module.css'
import { AppContext } from '../context/AppContext'
import avatar from '../assets/avatar.png'
import { useContext } from 'react'


export default function ProfileWidget() {
   
    const { user, selectedGenre } = useContext(AppContext);
    console.log(user, "",selectedGenre);
    return (
        <div className={styles.container} >
            <div className={styles.avatarImg} >
                <img src={avatar} className={styles.mainIMG}  alt="avatar" />
            </div>
            <div className={styles.parent}>
                <div className={styles.info} >
                 <h2 className={styles.heading}>{user.name}</h2>
                 <h3 className={styles.mail}>{user.email}</h3>
                 <h1 className={styles.username}>{user.username}</h1>
                </div>
                <div className={styles.selectGenre} >
                    {selectedGenre.slice(0,4).map((genre,index)=>(
                        <div key={index} className={styles.genre} >
                                {genre}
                            </div>
                    ))}
                        
                   
                  
                </div>
            </div>
        </div>
    )
}

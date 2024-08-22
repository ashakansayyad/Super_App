import React, { useState ,useEffect} from 'react'
import styles from './Form.module.css'
import validateForm from '../utils/validateForm';

export default function Form({
    name,
    setName,
    username,
    setUsername,
    email,
    setEmail,
    mobile,
    setMobile,
    checkbox,
    setCheckbox,
    error,
    setError,
    submitHandler
}) {
    const handleCheckbox =(e)=>{
            setCheckbox(e.target.checked);
        if(error?.checkbox){
            setError((prevError)=>({...prevError,checkbox:false}))
        };
    }
  
    return (
        
        <div className={styles.container}>
            <input type="text"
            value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
            />
            {error?.name && <p className={styles.error} >Name is required</p> }

            <input type="text" 
            placeholder='UserName'
            value={username}

            onChange={(e)=>setUsername(e.target.value)}
            />
            {error?.username &&  <p className={styles.error} >Username is required</p> }

            <input type="email"
            placeholder='Email'
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             {error?.email &&  <p className={styles.error} >Valid email is required</p> }

            <input type="tel" 
            placeholder='Mobile'
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            />
             {error?.mobile &&  <p className={styles.error} >Valid mobile no is required</p> }


            <div className={styles.boxContainer}>
             <input type='checkbox' id={styles.checkbox}
             value={checkbox}
             onChange={handleCheckbox}
             /><p  className={styles.checkboxpara}>Share my registration data with Superapp</p></div>
             {error?.checkbox &&  <p className={styles.error} >Check this box if you want to proceed</p> }
             <button className={styles.subBtn}
             onClick={submitHandler}>SIGN UP</button>
        </div>
    )
}

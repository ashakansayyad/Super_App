import React, {useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styles from './RegistrationPage.module.css'
import Form from '../Cpmonents/Form';
import validateForm from '../utils/validateForm';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPage() {

  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [mobile, setMobile] = useState(user?.mobile || "");
  const [checkbox,setCheckbox]=useState();
  const [error, setError] = useState();
const navigate = useNavigate();
  const submitHandler=()=>{
    const {valid , invalid } = validateForm(name,username,email,mobile,checkbox);
    if(!valid){
      setError({...invalid});
        return;
    }
    setError(null)
    setUser({name,username,email,mobile,checkbox})
    navigate('/Genre')
  }


  return (
    <div
      className={styles.container}
    >
      <div className={styles.left}>

        <h1
          className={styles.leftheading}
        > Discover new things on
          <br/>
          Superapp</h1>
      </div>



      <div className={styles.right}>


        {/*--------------------------- ----------------Header -------------------------------*/}
        <div className={styles.header}>
          <h2 className={styles.heading} >Super app</h2>
          <h3 className={styles.subHeading} >Create your new account</h3>
        </div>
        {/* form ----------------------------------------------------------------------- */}

        <Form
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          mobile={mobile}
          setMobile={setMobile}
          checkbox={checkbox}
          setCheckbox={setCheckbox}
          error={error}
          setError={setError}
          submitHandler={submitHandler}
        />

        {/* Footer---------------------------------------------------------------------- */}

        <div className={styles.footer}>

          <p>By clicking on Sign up. you agree to Superapp
            <span> Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span> </p>
        </div>



      </div>
    </div>
  )
}

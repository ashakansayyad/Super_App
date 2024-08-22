import React from 'react'
import styles from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className={styles.container} >
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <Link to='/'><h1>Home Page</h1></Link>
    </div>
  )
}

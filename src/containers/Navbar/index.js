
import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './navbar.module.css'


const Navbar = () =>{
    const history = useHistory()
    return(
    <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
              <li className={styles.item}>Home</li>
              <li className={styles.item}>Contacts</li>
              <li className={styles.item}>Details</li>
          </ul>
          <ul className={styles.list}>
             <li className={styles.item}><button className={styles.btn} onClick={()=>{
                 localStorage.clear()
                 history.push('/')
             }}>Logout</button></li>
          </ul>
          </nav>
     </header>
    )
}

export default Navbar
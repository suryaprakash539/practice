
import React from 'react'
import styles from './navbar.module.css'


const Navbar = () =>{
    return(
    <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
              <li className={styles.item}>Home</li>
              <li className={styles.item}>Contacts</li>
              <li className={styles.item}>Details</li>
          </ul>
          <ul className={styles.list}>
             <li className={styles.item}><button className={styles.btn}>Logout</button></li>
          </ul>
          </nav>
     </header>
    )
}

export default Navbar
import React from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  return (
  <header className={styles.navbar}>
    <div className={styles.mobile_btn}>
      <AiOutlineMenu size={25} />
    </div>
    <div className={styles.gb_mobile}>
      <li>GlobalTalk</li>
    </div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.gb_desktop}>GlobalTalk</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Textbook</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="#">Games</a></li>
        </ul>
      </nav>
      <div>
      <ul className={styles.user}>
          <span className={styles.alex}><p>A</p></span>
          <li><a href="#">Alex</a></li>
          <li className={styles.signout}>Sign Out</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
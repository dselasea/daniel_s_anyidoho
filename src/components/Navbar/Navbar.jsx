import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
  <div className={styles.border}>
    <div className={styles.container}>
    <header className={styles.navbar}>
      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div className={styles.gb_mobile}>
        <ul>
          <li>GlobalTalk</li>
        </ul>
      </div>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li><a href="#" className={styles.gb_desktop}>GlobalTalk</a></li>
          <li><a href="#" className={styles.links}>Home</a></li>
          <li><a href="#" className={styles.links}>Textbook</a></li>
          <li><a href="#" className={styles.links}>Statistics</a></li>
          <li><a href="#" className={styles.links}>Games</a></li>
          <li><a href="#" className={styles.links}>Sprint</a></li>
          <li><a href="#" className={styles.links}>Audio-call</a></li>
        </ul>
      </nav>
      <div>
      <ul className={styles.user}>
          <span className={styles.alex}><p>A</p></span>
          <li><a href="#">Alex</a></li>
          <li><a href="#" className={styles.signout}>Sign Out</a></li>
        </ul>
      </div>
    </header>
  </div>
  </div>
  )
}

export default Navbar
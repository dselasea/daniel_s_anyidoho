import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footer_content}>
            <div>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Textbooks</a></li>
                <li><a href="">Statistics</a></li>
                <li><a href="">Sprint</a></li>
                <li><a href="">Audio-call</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="">Alex</a></li>
                <li><a href="">Gabriel</a></li>
                <li><a href="">Marcus</a></li>
              </ul>
            </div>
        </div>
        <div className={styles.date}>
          <p>&copy; {date.getFullYear()} GlobalTalk Project for GlobalTalk</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
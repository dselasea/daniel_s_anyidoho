import React from 'react';
import styles from './Hero.module.css';
import mainImage from '../../assets/mainImage.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
            <div className={styles.hero_text}>
              <span>E-COURSE PLATFORM</span>
              <h1>Learning and teaching online, made easy.</h1>
              <p>Practice your english and learn new things with the platform</p>
              <button role='button' className='btn'>About platform</button>
              <div className={styles.numbers}>
                <div>
                  <p>
                    <span>600</span>
                    <span className={styles.plus}>+</span>
                    <span className={styles.text}>Popular words</span></p>
                </div>
                <div>
                    <p>
                    <span>2</span>
                    <span className={styles.plus}>+</span>
                     <span className={styles.text}>Mini-games</span></p></div>
              </div>
            </div>
            <div className={styles.hero_image}>
              <img src={mainImage} alt='Hero Illustration' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
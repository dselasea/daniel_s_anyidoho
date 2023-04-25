import React from 'react';
import styles from './Language.module.css';
// import thirdImage from '../../assets/thirdImage.png';

const Language = ({ image, title, description, children }) => {
  return (
      <section className={styles.container}>
        <div className={styles.language}>
            <div className={styles.language_image}>
              <img src={image} alt={`${image} illustration`} />
            </div>
            <div className={styles.language_content}>
              <h2>{title}</h2>
              <p>{description}</p>
              {children}
            </div>
        </div>
      </section>
  )
}

export default Language
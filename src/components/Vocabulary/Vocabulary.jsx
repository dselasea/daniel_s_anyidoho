import React from 'react';
import styles from './Vocabulary.module.css';
import lastImage from '../../assets/lastImage.png'

const Vocabulary = () => {
  return (
    <section className={styles.vocabulary}>
      <div className={styles.container}>
        <div className={styles.vocab}>
          <div className={styles.vocabulary_image}>
            <h2>Increase your vocabulary</h2>
            <p>Traditional and new effective approaches to word study</p>
            <button role='button' className='btn'>Textbook</button>
          </div>
      <div className={styles.vocabulary_content}>
        <img src={lastImage} alt={`${lastImage} illustration`} />
      </div>
      </div>
      </div>
    </section>
  )
}

export default Vocabulary
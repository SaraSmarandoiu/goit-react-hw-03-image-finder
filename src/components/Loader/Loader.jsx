import React from 'react';
import styles from './Loader.module.css'; // Importul fișierului CSS module

const Loader = () => (
  <div className={styles['loader-container']}>
    <div className={styles.loader}></div>
  </div>
);

export default Loader;

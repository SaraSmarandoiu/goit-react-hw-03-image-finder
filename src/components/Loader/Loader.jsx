
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const LoaderComponent = () => (
  <div className={styles.loader}>
    <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
  </div>
);

export default LoaderComponent;

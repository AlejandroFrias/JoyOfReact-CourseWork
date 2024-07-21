import React from 'react';

import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';
import ToastPlaygroundForm from './ToastPlaygroundForm';


function ToastPlayground() {
  console.log('ToastPlayground')
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <ToastPlaygroundForm />
    </div>
  );
}

export default React.memo(ToastPlayground);

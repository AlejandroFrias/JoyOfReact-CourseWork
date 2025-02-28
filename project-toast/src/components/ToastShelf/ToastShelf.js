import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  console.log('ToastShelf')
  const toasts = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label='Notification'
    >
      {toasts.map(({ id, variant, message, handleDismiss }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={handleDismiss}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);

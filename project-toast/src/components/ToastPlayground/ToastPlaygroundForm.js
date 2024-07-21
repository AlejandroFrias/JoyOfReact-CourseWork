import React from 'react';
import styles from './ToastPlayground.module.css';
import { AddToastContext } from '../ToastProvider/ToastProvider';
import { VARIANT_OPTIONS } from '../Toast/Toast';
import Button from '../Button';

function ToastPlaygroundForm() {
  console.log('ToastPlaygroundForm')
  const addToast = React.useContext(AddToastContext)
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function clearForm() {
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      addToast({ message, variant })
      clearForm()
    }}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              required
              value={message}
              onChange={event => setMessage(event.target.value)}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={event => setVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>

    </form>
  );
};
export default React.memo(ToastPlaygroundForm);
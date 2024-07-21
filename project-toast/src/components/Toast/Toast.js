import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import useEscapeKey from '../../hooks/useEscapeKey';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, handleDismiss }) {
  console.log('Toast', { variant, children })
  useEscapeKey(handleDismiss);

  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <div className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {index > 0 && !line && <br />}
            <p key={index}>
              {line}
            </p>
          </React.Fragment>
        ))}
      </div>
      <button
        className={styles.closeButton}
        onClick={handleDismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

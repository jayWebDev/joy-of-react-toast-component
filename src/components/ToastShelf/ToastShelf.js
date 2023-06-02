import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, setToasts, useEscapeKey } = React.useContext(ToastContext);
  const handleEscape = () => {
    setToasts([]);
  }
  
  useEscapeKey(handleEscape);

  return (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
      >
          {toasts.map(toast => (
              <li key={toast.id} className={styles.toastWrapper}>
                  <Toast toast={toast}>
                      {toast.message}
                  </Toast>
              </li>
          ))}
      </ol>
  );
}

export default ToastShelf;

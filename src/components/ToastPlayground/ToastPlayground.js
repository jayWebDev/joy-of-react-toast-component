import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import { ToastContext } from '../ToastProvider';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { createToast, setToasts } = React.useContext(ToastContext);

  const onSubmitHandler = e => {
    e.preventDefault();

    createToast(variant, message);

    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
      <div className={styles.wrapper}>
          <header>
              <img alt='Cute toast mascot' src='/toast.png' />
              <h1>Toast Playground</h1>
          </header>

          <ToastShelf />

          <form onSubmit={onSubmitHandler} className={styles.controlsWrapper}>
              <div className={styles.row}>
                  <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
                      Message
                  </label>
                  <div className={styles.inputWrapper}>
                      <textarea id='message' className={styles.messageInput} value={message} onChange={e => setMessage(e.target.value)} />
                  </div>
              </div>

              <div className={styles.row}>
                  <div className={styles.label}>Variant</div>
                  <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                      {VARIANT_OPTIONS.map(option => (
                          <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
                              <input
                                  id={`variant-${option}`}
                                  type='radio'
                                  name='variant'
                                  value={option}
                                  onChange={e => setVariant(e.target.value)}
                                  checked={variant === option}
                              />
                              {option}
                          </label>
                      ))}
                  </div>
              </div>

              <div className={styles.row}>
                  <div className={styles.label} />
                  <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                      <Button type='submit'>Pop Toast!</Button>
                  </div>
              </div>
          </form>
      </div>
  );
}

export default ToastPlayground;

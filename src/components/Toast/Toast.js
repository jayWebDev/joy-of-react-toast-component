import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden/VisuallyHidden.module.css';

import styles from './Toast.module.css';

import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast, closeHandler, children }) {
  const { variant, id } = toast;
  const { removeToast } = React.useContext(ToastContext);

  const IconComponent = ICONS_BY_VARIANT[variant];

  const clickHandler = (e) => {
    removeToast(id);
  }

  return (
      <div className={`${styles.toast} ${styles[variant]}`}>
          <div className={styles.iconContainer}>
              <IconComponent size={24} />
          </div>
          <p className={styles.content}>
              <span className={VisuallyHidden.wrapper}>{variant} -</span>
              {children}
          </p>
          <button className={styles.closeButton} onClick={clickHandler} aria-label='Dismiss message' aria-live='off'>
              <X size={24} />
          </button>
      </div>
  );
}

export default Toast;

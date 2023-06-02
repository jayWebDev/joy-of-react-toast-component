import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey.js";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  const handleEscapeKey = React.useCallback(() => {
    setToasts([]);
  }, [])

  useEscapeKey(handleEscapeKey)

  const createToast = (variant, message) => {
    const id = Date.now();

    const toast = {
      variant, message, id
    }

    setToasts([...toasts, toast]);
  }

  const removeToast = (id) => {
    const newToasts = [...toasts];
    const filteredToasts = newToasts.filter(toast => toast.id !== id);

    setToasts(filteredToasts);
  }

  return <ToastContext.Provider value={{
    toasts,
    setToasts,
    createToast,
    removeToast,
    useEscapeKey
  }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;

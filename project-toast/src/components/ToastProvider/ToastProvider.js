import React from 'react';

export const ToastContext = React.createContext();
export const AddToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(({ message, variant }) => {
    setToasts((toasts) => {
      const id = Math.random()
      return [
        ...toasts,
        {
          id,
          variant,
          message,
          handleDismiss: () => setToasts((toasts) => toasts.filter((toast) => toast.id !== id)),
        },
      ];
    });
  }, []);

  const toastsValue = React.useMemo(() => (toasts), [toasts]);

  return (
    <AddToastContext.Provider value={addToast}>
      <ToastContext.Provider value={toastsValue}>
        {children}
      </ToastContext.Provider>
    </AddToastContext.Provider>
  );
}

export default React.memo(ToastProvider);

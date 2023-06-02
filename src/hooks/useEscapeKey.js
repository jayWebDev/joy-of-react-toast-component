import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
      const handleKeyDown = e => {
          if (e.key === 'Escape') {
              callback();
          }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, [callback]);
}

export default useEscapeKey;
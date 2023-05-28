import { useEffect } from 'react';

const useOnClickOutside = (ref: any, func: () => void) => {
  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (ref.current
        && !ref.current.contains(event.target)
      ) {
        func();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, func]);
};

export default useOnClickOutside;

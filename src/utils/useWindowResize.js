import { useState, useEffect } from 'react';

const getSize = () => ({
  width: window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth,
  height: window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight,
});

const useWindowResize = () => {
  // save current window width in the state object
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setSize(getSize()), 300);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return size;
};

export default useWindowResize;

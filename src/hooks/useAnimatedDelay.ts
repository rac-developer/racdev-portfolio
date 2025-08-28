import { useState, useEffect } from 'react';

const useAnimatedDelay = (defaultDelay: number) => {
  const [delay, setDelay] = useState(defaultDelay);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Tailwind's md breakpoint
        setDelay(0.1);
      } else {
        setDelay(defaultDelay);
      }
    };

    handleResize(); // Establece el valor inicial al montar el componente
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [defaultDelay]); // Vuelve a ejecutar el efecto si defaultDelay cambia

  return delay;
};

export default useAnimatedDelay;

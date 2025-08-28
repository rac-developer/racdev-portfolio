'use client';

import { useState, useEffect } from 'react';
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import useAnimatedDelay from "@/hooks/useAnimatedDelay";

const opcionesFecha: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const opcionesDiaSemana: Intl.DateTimeFormatOptions = {
  weekday: 'long',
};

const Time = () => {
  const [fechaActual, setFechaActual] = useState(new Date());
  const titleDelay = useAnimatedDelay(1.1); 

  useEffect(() => {
    const timerID = setInterval(() => {
      setFechaActual(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Formateamos la fecha, el día y la hora
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
  const horaFormateada = fechaActual.toLocaleTimeString('es-ES');
  const diaSemana = fechaActual.toLocaleDateString('es-ES', opcionesDiaSemana);

  return (
    <>
      <AnimatedContainer delay={titleDelay}>
        <div className="flex flex-col h-full justify-center items-center">
          <h2 className="text-5xl font-bold text-white">{horaFormateada}</h2>
          <p className="text-xl text-gray-300 capitalize">{diaSemana}</p>
          <p className="text-base text-gray-400">{fechaFormateada}</p>
        </div>
      </AnimatedContainer>
    </>
  );
};

export default Time;

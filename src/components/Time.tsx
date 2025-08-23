'use client';

import { useState, useEffect } from 'react';

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
    <div className="flex flex-col h-full ">
      <h2 className="text-5xl font-bold text-gray-800 dark:text-white">{horaFormateada}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">{diaSemana}</p>
      <p className="text-md text-gray-500 dark:text-gray-400">{fechaFormateada}</p>
    </div>
  );
};

export default Time;
